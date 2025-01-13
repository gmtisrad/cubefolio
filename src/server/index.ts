import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";

const { EMAIL_SERVICE, FROM_EMAIL, FROM_EMAIL_PASSWORD, PERSONAL_EMAIL, PORT } = process.env;

const __dirname = path.resolve();

const app = express();

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE,
  auth: {
    user: FROM_EMAIL,
    pass: FROM_EMAIL_PASSWORD,
  },
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, "../../build")));

app.post("/contact-me", (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);

  const mailOptions = {
    from:   FROM_EMAIL,
    to:   PERSONAL_EMAIL,
    subject: `Contact Me - ${name} - ${email} - ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error: Error | null, info: any): void => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.send(200);
});

app.get("/ping", (req, res) => {
  res.send(200);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
