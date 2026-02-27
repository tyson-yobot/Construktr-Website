import pdf from "html-pdf-node";
import jsPDF from "jspdf";

interface QuoteData {
  customerName: string;
  customerEmail: string;
  company?: string;
  services: Array<{
    description: string;
    quantity: number;
    rate: number;
    total: number;
  }>;
  subtotal: number;
  tax?: number;
  total: number;
  validUntil: string;
  notes?: string;
}

interface InvoiceData {
  invoiceNumber: string;
  customerName: string;
  customerEmail: string;
  company?: string;
  billingAddress?: string;
  services: Array<{
    description: string;
    quantity: number;
    rate: number;
    total: number;
  }>;
  subtotal: number;
  tax?: number;
  total: number;
  dueDate: string;
  paymentTerms?: string;
}

export async function generateQuotePDF(quoteData: QuoteData): Promise<Buffer> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>CONSTRUKTR Quote</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 3px solid #0243fd;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #0243fd;
            }
            .quote-info {
                text-align: right;
                color: #666;
            }
            .customer-info {
                margin-bottom: 30px;
                background: #f8f9fa;
                padding: 20px;
                border-radius: 6px;
            }
            .services-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
            }
            .services-table th {
                background: #0243fd;
                color: white;
                padding: 12px;
                text-align: left;
            }
            .services-table td {
                padding: 12px;
                border-bottom: 1px solid #eee;
            }
            .services-table tr:nth-child(even) {
                background: #f8f9fa;
            }
            .totals {
                float: right;
                width: 300px;
                margin-top: 20px;
            }
            .totals table {
                width: 100%;
                border-collapse: collapse;
            }
            .totals td {
                padding: 8px;
                border-bottom: 1px solid #ddd;
            }
            .total-row {
                font-weight: bold;
                background: #0243fd;
                color: white;
            }
            .notes {
                margin-top: 40px;
                padding: 20px;
                background: #f8f9fa;
                border-left: 4px solid #0243fd;
            }
            .footer {
                margin-top: 40px;
                text-align: center;
                color: #666;
                border-top: 1px solid #eee;
                padding-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">CONSTRUKTR™</div>
                <div class="quote-info">
                    <h2>QUOTE</h2>
                    <p>Valid Until: ${quoteData.validUntil}</p>
                    <p>Date: ${new Date().toLocaleDateString()}</p>
                </div>
            </div>
            
            <div class="customer-info">
                <h3>Quote For:</h3>
                <p><strong>${quoteData.customerName}</strong></p>
                <p>${quoteData.customerEmail}</p>
                ${quoteData.company ? `<p>${quoteData.company}</p>` : ''}
            </div>

            <table class="services-table">
                <thead>
                    <tr>
                        <th>Service Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${quoteData.services.map(service => `
                        <tr>
                            <td>${service.description}</td>
                            <td>${service.quantity}</td>
                            <td>$${service.rate.toFixed(2)}</td>
                            <td>$${service.total.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div class="totals">
                <table>
                    <tr>
                        <td>Subtotal:</td>
                        <td>$${quoteData.subtotal.toFixed(2)}</td>
                    </tr>
                    ${quoteData.tax ? `
                        <tr>
                            <td>Tax:</td>
                            <td>$${quoteData.tax.toFixed(2)}</td>
                        </tr>
                    ` : ''}
                    <tr class="total-row">
                        <td>Total:</td>
                        <td>$${quoteData.total.toFixed(2)}</td>
                    </tr>
                </table>
            </div>
            <div style="clear: both;"></div>

            ${quoteData.notes ? `
                <div class="notes">
                    <h4>Notes:</h4>
                    <p>${quoteData.notes}</p>
                </div>
            ` : ''}

            <div class="footer">
                <p>Thank you for choosing CONSTRUKTR™</p>
                <p>Contact us: hello@construktr.com | (555) 123-4567</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const options = {
    format: 'A4',
    border: {
      top: "0.5in",
      right: "0.5in", 
      bottom: "0.5in",
      left: "0.5in"
    }
  };

  try {
    const file = { content: htmlContent };
    const buffer = await pdf.generatePdf(file, options);
    return buffer;
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw new Error("Failed to generate quote PDF");
  }
}

export async function generateInvoicePDF(invoiceData: InvoiceData): Promise<Buffer> {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>CONSTRUKTR Invoice</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f8f9fa;
            }
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: white;
                padding: 40px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 40px;
                padding-bottom: 20px;
                border-bottom: 3px solid #0243fd;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #0243fd;
            }
            .invoice-info {
                text-align: right;
                color: #666;
            }
            .customer-info {
                margin-bottom: 30px;
                background: #f8f9fa;
                padding: 20px;
                border-radius: 6px;
            }
            .services-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
            }
            .services-table th {
                background: #0243fd;
                color: white;
                padding: 12px;
                text-align: left;
            }
            .services-table td {
                padding: 12px;
                border-bottom: 1px solid #eee;
            }
            .services-table tr:nth-child(even) {
                background: #f8f9fa;
            }
            .totals {
                float: right;
                width: 300px;
                margin-top: 20px;
            }
            .totals table {
                width: 100%;
                border-collapse: collapse;
            }
            .totals td {
                padding: 8px;
                border-bottom: 1px solid #ddd;
            }
            .total-row {
                font-weight: bold;
                background: #0243fd;
                color: white;
            }
            .payment-info {
                margin-top: 40px;
                padding: 20px;
                background: #fff3cd;
                border-left: 4px solid #ffc107;
            }
            .footer {
                margin-top: 40px;
                text-align: center;
                color: #666;
                border-top: 1px solid #eee;
                padding-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">CONSTRUKTR™</div>
                <div class="invoice-info">
                    <h2>INVOICE</h2>
                    <p>Invoice #: ${invoiceData.invoiceNumber}</p>
                    <p>Due Date: ${invoiceData.dueDate}</p>
                    <p>Date: ${new Date().toLocaleDateString()}</p>
                </div>
            </div>
            
            <div class="customer-info">
                <h3>Bill To:</h3>
                <p><strong>${invoiceData.customerName}</strong></p>
                <p>${invoiceData.customerEmail}</p>
                ${invoiceData.company ? `<p>${invoiceData.company}</p>` : ''}
                ${invoiceData.billingAddress ? `<p>${invoiceData.billingAddress}</p>` : ''}
            </div>

            <table class="services-table">
                <thead>
                    <tr>
                        <th>Service Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${invoiceData.services.map(service => `
                        <tr>
                            <td>${service.description}</td>
                            <td>${service.quantity}</td>
                            <td>$${service.rate.toFixed(2)}</td>
                            <td>$${service.total.toFixed(2)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div class="totals">
                <table>
                    <tr>
                        <td>Subtotal:</td>
                        <td>$${invoiceData.subtotal.toFixed(2)}</td>
                    </tr>
                    ${invoiceData.tax ? `
                        <tr>
                            <td>Tax:</td>
                            <td>$${invoiceData.tax.toFixed(2)}</td>
                        </tr>
                    ` : ''}
                    <tr class="total-row">
                        <td>Total:</td>
                        <td>$${invoiceData.total.toFixed(2)}</td>
                    </tr>
                </table>
            </div>
            <div style="clear: both;"></div>

            <div class="payment-info">
                <h4>Payment Information:</h4>
                <p><strong>Due Date:</strong> ${invoiceData.dueDate}</p>
                ${invoiceData.paymentTerms ? `<p><strong>Terms:</strong> ${invoiceData.paymentTerms}</p>` : ''}
                <p>Please remit payment by the due date to avoid late fees.</p>
            </div>

            <div class="footer">
                <p>Thank you for your business!</p>
                <p>CONSTRUKTR™ | hello@construktr.com | (555) 123-4567</p>
            </div>
        </div>
    </body>
    </html>
  `;

  const options = {
    format: 'A4',
    border: {
      top: "0.5in",
      right: "0.5in",
      bottom: "0.5in", 
      left: "0.5in"
    }
  };

  try {
    const file = { content: htmlContent };
    const buffer = await pdf.generatePdf(file, options);
    return buffer;
  } catch (error) {
    console.error("PDF generation failed:", error);
    throw new Error("Failed to generate invoice PDF");
  }
}

// Simple PDF generation using jsPDF for basic documents
export function generateSimplePDF(title: string, content: string): Buffer {
  const doc = new jsPDF();
  
  // Add CONSTRUKTR header
  doc.setFontSize(20);
  doc.setTextColor(2, 67, 253); // Electric blue
  doc.text("CONSTRUKTR™", 20, 20);
  
  // Add title
  doc.setFontSize(16);
  doc.setTextColor(0, 0, 0);
  doc.text(title, 20, 40);
  
  // Add content
  doc.setFontSize(12);
  const splitContent = doc.splitTextToSize(content, 170);
  doc.text(splitContent, 20, 60);
  
  // Add footer
  const pageHeight = doc.internal.pageSize.height;
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  doc.text("Generated by CONSTRUKTR™", 20, pageHeight - 20);
  doc.text(new Date().toLocaleDateString(), 150, pageHeight - 20);
  
  return Buffer.from(doc.output('arraybuffer'));
}