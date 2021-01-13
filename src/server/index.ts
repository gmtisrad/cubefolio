import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import {
  emailService,
  fromEmail,
  fromEmailPassword,
  personalEmail,
} from "../../secrets";

const app = express();
const PORT = 3001;

const transporter = nodemailer.createTransport({
  service: emailService,
  auth: {
    user: fromEmail,
    pass: fromEmailPassword,
  },
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", express.static("build"));

app.post("/contact-me", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from: fromEmail,
    to: personalEmail,
    subject: `Contact Me - ${name} - ${email} - ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error: Error, info: any): void => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send(200);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
