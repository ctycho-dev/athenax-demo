interface ApplicationFormData {
   projectName: string;
   email: string;
   website: string;
   category: string;
   stage: string;
   description: string;
}

export function generateApplicantConfirmationEmail(data: ApplicationFormData): {
   subject: string;
   html: string;
} {
   const subject = `Application Received: ${data.projectName}`;

   const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f9fafb;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .info-box {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #667eea;
    }
    .info-row {
      margin: 10px 0;
    }
    .label {
      font-weight: 600;
      color: #667eea;
      display: inline-block;
      width: 120px;
    }
    .value {
      color: #333;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🚀 Application Received!</h1>
  </div>
  <div class="content">
    <p>Hi there,</p>
    <p>Thank you for applying to the <strong>AthenaX Incubation Program</strong>! We've received your application and our team will review it shortly.</p>

    <div class="info-box">
      <h3 style="margin-top: 0; color: #667eea;">Application Summary</h3>
      <div class="info-row">
        <span class="label">Project Name:</span>
        <span class="value">${data.projectName}</span>
      </div>
      <div class="info-row">
        <span class="label">Website:</span>
        <span class="value"><a href="${data.website}" style="color: #667eea;">${data.website}</a></span>
      </div>
      <div class="info-row">
        <span class="label">Category:</span>
        <span class="value">${data.category}</span>
      </div>
      <div class="info-row">
        <span class="label">Stage:</span>
        <span class="value">${data.stage}</span>
      </div>
    </div>

    <div class="footer">
      <p>Best regards,<br><strong>The AthenaX Team</strong></p>
      <p style="font-size: 12px; color: #9ca3af;">This is an automated confirmation email. Please do not reply to this message.</p>
    </div>
  </div>
</body>
</html>
  `;

   return { subject, html };
}

export function generateAdminNotificationEmail(data: ApplicationFormData): {
   subject: string;
   html: string;
} {
   const subject = `New Incubation Application: ${data.projectName}`;

   const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: #1f2937;
      color: white;
      padding: 20px;
      border-radius: 8px 8px 0 0;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
    }
    .badge {
      display: inline-block;
      background: #10b981;
      color: white;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 10px;
    }
    .content {
      background: #ffffff;
      padding: 30px;
      border: 1px solid #e5e7eb;
      border-top: none;
      border-radius: 0 0 8px 8px;
    }
    .detail-grid {
      display: grid;
      grid-template-columns: 150px 1fr;
      gap: 15px;
      margin: 20px 0;
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
    }
    .detail-label {
      font-weight: 600;
      color: #6b7280;
    }
    .detail-value {
      color: #111827;
    }
    .description-section {
      margin-top: 25px;
      padding: 20px;
      background: #fffbeb;
      border-left: 4px solid #f59e0b;
      border-radius: 4px;
    }
    .description-section h3 {
      margin-top: 0;
      color: #92400e;
    }
    .description-text {
      white-space: pre-wrap;
      color: #78350f;
      line-height: 1.7;
    }
    .action-button {
      display: inline-block;
      background: #667eea;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 6px;
      margin-top: 20px;
      font-weight: 600;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e5e7eb;
      color: #6b7280;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>New Application Submitted<span class="badge">NEW</span></h1>
  </div>
  <div class="content">
    <p style="font-size: 16px; color: #111827; margin-top: 0;">
      A new project has applied for the AthenaX Incubation Program.
    </p>

    <div class="detail-grid">
      <div class="detail-label">Project Name:</div>
      <div class="detail-value"><strong>${data.projectName}</strong></div>

      <div class="detail-label">Contact Email:</div>
      <div class="detail-value"><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></div>

      <div class="detail-label">Website:</div>
      <div class="detail-value"><a href="${data.website}" style="color: #667eea;" target="_blank">${data.website}</a></div>

      <div class="detail-label">Category:</div>
      <div class="detail-value">${data.category}</div>

      <div class="detail-label">Stage:</div>
      <div class="detail-value"><strong>${data.stage}</strong></div>
    </div>

    <div class="description-section">
      <h3>Project Description</h3>
      <div class="description-text">${data.description}</div>
    </div>

    <div style="text-align: center;">
      <a href="mailto:${data.email}" class="action-button">Reply to Applicant</a>
    </div>

    <div class="footer">
      <p><strong>Action Required:</strong> Review this application and respond to the applicant within 3-5 business days.</p>
      <p style="font-size: 12px; color: #9ca3af;">Received: ${new Date().toLocaleString()}</p>
    </div>
  </div>
</body>
</html>
  `;

   return { subject, html };
}
