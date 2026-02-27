import fetch from "node-fetch";
import { WebhookLog, webhookLogs } from "@shared/schema";
import { db } from "./db";

interface WebhookPayload {
  event: string;
  data: any;
  timestamp: string;
}

// Airtable webhook integration
export async function sendToAirtable(event: string, data: any) {
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableTableName = process.env.AIRTABLE_TABLE_NAME || "Leads";

  if (!airtableApiKey || !airtableBaseId) {
    console.log("Airtable not configured - would send:", { event, data });
    return logWebhook("airtable", event, data, null, "failed", "Airtable API credentials not configured");
  }

  try {
    const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;
    
    // Transform data based on event type
    let airtableRecord;
    if (event === "lead_created") {
      airtableRecord = {
        fields: {
          "Email": data.email,
          "Name": data.name || "",
          "Company": data.company || "",
          "Source": data.source,
          "Message": data.message || "",
          "Created": new Date().toISOString(),
        }
      };
    } else if (event === "payment_completed") {
      airtableRecord = {
        fields: {
          "Email": data.email,
          "Amount": parseFloat(data.amount),
          "Plan": data.plan,
          "Payment ID": data.stripePaymentId,
          "Created": new Date().toISOString(),
        }
      };
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${airtableApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(airtableRecord),
    });

    const responseData = await response.json();
    
    if (response.ok) {
      await logWebhook("airtable", event, data, responseData, "success");
      return responseData;
    } else {
      await logWebhook("airtable", event, data, responseData, "failed", `HTTP ${response.status}`);
      throw new Error(`Airtable API error: ${response.status}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    await logWebhook("airtable", event, data, null, "failed", errorMessage);
    console.error("Airtable webhook failed:", error);
    throw error;
  }
}

// HubSpot webhook integration  
export async function sendToHubSpot(event: string, data: any) {
  const hubspotApiKey = process.env.HUBSPOT_API_KEY;

  if (!hubspotApiKey) {
    console.log("HubSpot not configured - would send:", { event, data });
    return logWebhook("hubspot", event, data, null, "failed", "HubSpot API key not configured");
  }

  try {
    let url, payload;
    
    if (event === "lead_created") {
      url = "https://api.hubapi.com/contacts/v1/contact";
      payload = {
        properties: [
          { property: "email", value: data.email },
          { property: "firstname", value: data.name?.split(" ")[0] || "" },
          { property: "lastname", value: data.name?.split(" ").slice(1).join(" ") || "" },
          { property: "company", value: data.company || "" },
          { property: "lead_source", value: data.source },
          { property: "hs_lead_status", value: "NEW" },
        ]
      };
    } else if (event === "payment_completed") {
      // Create a deal in HubSpot
      url = "https://api.hubapi.com/deals/v1/deal";
      payload = {
        properties: [
          { name: "dealname", value: `${data.plan} - ${data.email}` },
          { name: "amount", value: data.amount },
          { name: "dealstage", value: "closedwon" },
          { name: "pipeline", value: "default" },
          { name: "closedate", value: new Date().getTime() },
        ]
      };
    }

    const response = await fetch(`${url}?hapikey=${hubspotApiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    
    if (response.ok) {
      await logWebhook("hubspot", event, data, responseData, "success");
      return responseData;
    } else {
      await logWebhook("hubspot", event, data, responseData, "failed", `HTTP ${response.status}`);
      throw new Error(`HubSpot API error: ${response.status}`);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    await logWebhook("hubspot", event, data, null, "failed", errorMessage);
    console.error("HubSpot webhook failed:", error);
    throw error;
  }
}

// QuickBooks Online webhook integration
export async function sendToQuickBooks(event: string, data: any) {
  const qboAccessToken = process.env.QBO_ACCESS_TOKEN;
  const qboCompanyId = process.env.QBO_COMPANY_ID;

  if (!qboAccessToken || !qboCompanyId) {
    console.log("QuickBooks not configured - would send:", { event, data });
    return logWebhook("qbo", event, data, null, "failed", "QuickBooks API credentials not configured");
  }

  try {
    if (event === "payment_completed") {
      // Create a customer and invoice in QuickBooks
      const customerUrl = `https://sandbox-quickbooks.api.intuit.com/v3/company/${qboCompanyId}/customer`;
      
      const customerPayload = {
        Name: data.email,
        CompanyName: data.company || "",
        PrimaryEmailAddr: {
          Address: data.email
        }
      };

      const customerResponse = await fetch(customerUrl, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${qboAccessToken}`,
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerPayload),
      });

      const customerData = await customerResponse.json();
      
      if (customerResponse.ok) {
        await logWebhook("qbo", event, data, customerData, "success");
        return customerData;
      } else {
        await logWebhook("qbo", event, data, customerData, "failed", `HTTP ${customerResponse.status}`);
        throw new Error(`QuickBooks API error: ${customerResponse.status}`);
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    await logWebhook("qbo", event, data, null, "failed", errorMessage);
    console.error("QuickBooks webhook failed:", error);
    throw error;
  }
}

// ConvertKit newsletter integration
export async function addToNewsletter(email: string, source: string, tags: string[] = []) {
  const convertKitApiKey = process.env.CONVERTKIT_API_KEY;
  const convertKitFormId = process.env.CONVERTKIT_FORM_ID;

  if (!convertKitApiKey || !convertKitFormId) {
    console.log("ConvertKit not configured - would add to newsletter:", { email, source, tags });
    return;
  }

  try {
    const url = `https://api.convertkit.com/v3/forms/${convertKitFormId}/subscribe`;
    
    const payload = {
      api_key: convertKitApiKey,
      email: email,
      tags: tags,
      fields: {
        source: source,
        subscribed_at: new Date().toISOString(),
      }
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseData = await response.json();
    
    if (response.ok) {
      console.log("Successfully added to ConvertKit newsletter:", email);
      return responseData;
    } else {
      console.error("ConvertKit API error:", response.status, responseData);
      throw new Error(`ConvertKit API error: ${response.status}`);
    }
  } catch (error) {
    console.error("ConvertKit webhook failed:", error);
    throw error;
  }
}

// Webhook logging function
async function logWebhook(
  service: string,
  event: string,
  payload: any,
  response: any,
  status: "success" | "failed",
  error?: string
) {
  try {
    await db.insert(webhookLogs).values({
      service,
      event,
      payload,
      response,
      status,
      error,
    });
  } catch (dbError) {
    console.error("Failed to log webhook:", dbError);
  }
}

// Process all webhooks for an event
export async function processWebhooks(event: string, data: any) {
  const webhookPromises = [];

  // Send to all configured services
  if (process.env.AIRTABLE_API_KEY) {
    webhookPromises.push(sendToAirtable(event, data));
  }
  
  if (process.env.HUBSPOT_API_KEY) {
    webhookPromises.push(sendToHubSpot(event, data));
  }
  
  if (process.env.QBO_ACCESS_TOKEN) {
    webhookPromises.push(sendToQuickBooks(event, data));
  }

  // Execute all webhooks in parallel
  const results = await Promise.allSettled(webhookPromises);
  
  // Log any failures
  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.error(`Webhook ${index} failed:`, result.reason);
    }
  });

  return results;
}