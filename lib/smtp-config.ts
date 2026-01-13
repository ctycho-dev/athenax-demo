interface SMTPConfig {
   host: string;
   port: number;
   secure: boolean;
   auth: {
      user: string;
      pass: string;
   };
   from: {
      name: string;
      email: string;
   };
}

export function getSMTPConfig(): SMTPConfig {
   // Validate required environment variables
   if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.SMTP_FROM
   ) {
      throw new Error("Missing required SMTP environment variables");
   }

   const port = parseInt(process.env.SMTP_PORT || "587");

   const config: SMTPConfig = {
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465, // true for 465 (SSL), false for other ports (TLS)
      auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
      },
      from: {
         name: process.env.SMTP_FROM_NAME || "AthenaX",
         email: process.env.SMTP_FROM,
      },
   };

   return config;
}

export function getAdminEmail(): string {
   if (!process.env.ADMIN_EMAIL) {
      throw new Error("ADMIN_EMAIL environment variable is not set");
   }
   return process.env.ADMIN_EMAIL;
}
