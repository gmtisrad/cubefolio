import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import serverlessExpress from '@vendia/serverless-express';

const { EMAIL_SERVICE, FROM_EMAIL, FROM_EMAIL_PASSWORD, PERSONAL_EMAIL } = process.env;

const app = express();

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: FROM_EMAIL,
    pass: FROM_EMAIL_PASSWORD,
  },
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// In Lambda, we'll serve static files from S3/CloudFront instead
if (process.env.NODE_ENV !== 'production') {
  const __dirname = path.resolve();
  app.use("/", express.static(path.join(__dirname, "../../build")));
}

app.post("/contact-me", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: FROM_EMAIL,
    to: PERSONAL_EMAIL,
    subject: `Contact Me - ${name} - ${email} - ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: any): void => {
    if (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  });
});

app.get("/ping", (req, res) => {
  res.status(200).json({ message: 'pong' });
});

// Local development server
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  });
}

// Export handler for AWS Lambda
export const handler = serverlessExpress({ app });
