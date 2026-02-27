import { WebClient } from "@slack/web-api";

// Initialize Slack client - will work when secrets are provided
let slack: WebClient | null = null;

if (process.env.SLACK_BOT_TOKEN) {
  slack = new WebClient(process.env.SLACK_BOT_TOKEN);
}

const SLACK_CHANNEL = process.env.SLACK_CHANNEL_ID || "#general";

interface LeadNotification {
  email: string;
  name?: string;
  company?: string;
  source: string;
  message?: string;
}

interface PaymentNotification {
  email: string;
  amount: string;
  plan: string;
  stripePaymentId: string;
}

interface DemoNotification {
  email: string;
  name?: string;
  company?: string;
  requestedDate?: string;
}

export async function sendLeadNotification(lead: LeadNotification) {
  if (!slack) {
    console.log("Slack not configured - Lead notification would be sent:", lead);
    return;
  }

  const blocks = [
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "🎯 New Lead Generated!"
      }
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Email:*\n${lead.email}`
        },
        {
          type: "mrkdwn", 
          text: `*Source:*\n${lead.source}`
        }
      ]
    }
  ];

  if (lead.name) {
    blocks[1].fields!.unshift({
      type: "mrkdwn",
      text: `*Name:*\n${lead.name}`
    });
  }

  if (lead.company) {
    blocks[1].fields!.push({
      type: "mrkdwn",
      text: `*Company:*\n${lead.company}`
    });
  }

  if (lead.message) {
    blocks.push({
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*Message:*\n${lead.message}`
      }
    });
  }

  try {
    await slack.chat.postMessage({
      channel: SLACK_CHANNEL,
      blocks: blocks
    });
  } catch (error) {
    console.error("Failed to send Slack lead notification:", error);
  }
}

export async function sendPaymentNotification(payment: PaymentNotification) {
  if (!slack) {
    console.log("Slack not configured - Payment notification would be sent:", payment);
    return;
  }

  try {
    await slack.chat.postMessage({
      channel: SLACK_CHANNEL,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "💰 Payment Received!"
          }
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Customer:*\n${payment.email}`
            },
            {
              type: "mrkdwn",
              text: `*Amount:*\n$${payment.amount}`
            },
            {
              type: "mrkdwn",
              text: `*Plan:*\n${payment.plan}`
            },
            {
              type: "mrkdwn",
              text: `*Payment ID:*\n${payment.stripePaymentId}`
            }
          ]
        }
      ]
    });
  } catch (error) {
    console.error("Failed to send Slack payment notification:", error);
  }
}

export async function sendDemoNotification(demo: DemoNotification) {
  if (!slack) {
    console.log("Slack not configured - Demo notification would be sent:", demo);
    return;
  }

  const blocks = [
    {
      type: "header", 
      text: {
        type: "plain_text",
        text: "🎬 Demo Request!"
      }
    },
    {
      type: "section",
      fields: [
        {
          type: "mrkdwn",
          text: `*Email:*\n${demo.email}`
        }
      ]
    }
  ];

  if (demo.name) {
    blocks[1].fields!.unshift({
      type: "mrkdwn",
      text: `*Name:*\n${demo.name}`
    });
  }

  if (demo.company) {
    blocks[1].fields!.push({
      type: "mrkdwn",
      text: `*Company:*\n${demo.company}`
    });
  }

  if (demo.requestedDate) {
    blocks[1].fields!.push({
      type: "mrkdwn",
      text: `*Requested Date:*\n${demo.requestedDate}`
    });
  }

  try {
    await slack.chat.postMessage({
      channel: SLACK_CHANNEL,
      blocks: blocks
    });
  } catch (error) {
    console.error("Failed to send Slack demo notification:", error);
  }
}

export async function sendGeneralNotification(title: string, message: string) {
  if (!slack) {
    console.log(`Slack not configured - Notification would be sent: ${title} - ${message}`);
    return;
  }

  try {
    await slack.chat.postMessage({
      channel: SLACK_CHANNEL,
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text", 
            text: title
          }
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: message
          }
        }
      ]
    });
  } catch (error) {
    console.error("Failed to send Slack notification:", error);
  }
}