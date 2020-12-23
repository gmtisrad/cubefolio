import React, { useEffect, useContext, useState } from "react";
import { css, cx } from "@emotion/css";
import { getBackgroundColor, getTextColor } from "../../utils/styleUtils";
import ThemeContext from "../../context/ThemeContext";

export const contactMeStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const contactMeFormStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  input {
    padding: 10px 2px;
    margin: 0 0 10px;
  }
  button {
    margin-top: 10px;
  }
  @media (min-width: 769px) {
    width: 640px;
  }
  @media (max-width: 768px) {
    width: 320px;
  }
`;

export const contactFormRow = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media (min-width: 769px) {
    justify-content: space-between;
    input {
      width: 49%;
    }
    #subject-input {
      width: 100%;
    }
    #message-input {
      width: 100%;
      height: 100px;
    }
  }
  @media (max-width: 768px) {
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`;

export const formTitleStyle = (
  textColor: string,
  backgroundColor: string
): string => css`
  font-size: 24px;
  width: 100%;
  padding: 10px;
  text-align: center;
  color: ${backgroundColor};
  background-color: ${textColor};
  margin-bottom: 10px;
`;

export const formButtonStyle = (isFormValid: boolean) => css`
  opacity: ${isFormValid ? 1 : 0.5};
  cursor: ${isFormValid ? "pointer" : "cursor"};
`;

export const contactMeIntro = css`
  width: 100%;
  text-align: center;
`;

interface FormDataSchema {
  name: string;
  subject: string;
  message: string;
  email: string;
}

const validateEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({} as FormDataSchema);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [errorObj, setErrorObj] = useState((undefined as unknown) as Error);
  const [success, setSuccess] = useState(false);
  const [nameValid, setNameValid] = useState((undefined as unknown) as boolean);
  const [emailValid, setEmailValid] = useState(
    (undefined as unknown) as boolean
  );
  const [subjectValid, setSubjectValid] = useState(
    (undefined as unknown) as boolean
  );
  const [messageValid, setMessageValid] = useState(
    (undefined as unknown) as boolean
  );
  const [formValid, setFormValid] = useState((undefined as unknown) as boolean);

  const { light, dark, neon } = useContext(ThemeContext);

  useEffect(() => {
    setBackgroundColor(getBackgroundColor(light, neon, dark));
    setTextColor(getTextColor(light, neon, dark));
  }, [light, dark, neon]);

  useEffect(() => {
    setFormValid(nameValid && subjectValid && emailValid && messageValid);
  }, [nameValid, subjectValid, emailValid, messageValid]);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.trim() === "") {
      setNameValid(false);
    } else {
      setNameValid(true);
    }
    setFormData({
      ...formData,
      name: event.target.value,
    });
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const email = event.target.value.trim();
    if (validateEmail(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setFormData({
      ...formData,
      email: event.target.value,
    });
  };

  const onSubjectChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (event.target.value.trim() === "") {
      setSubjectValid(false);
    } else {
      setSubjectValid(true);
    }
    setFormData({
      ...formData,
      subject: event.target.value,
    });
  };

  const onMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const message = event.target.value.trim();
    if (message === "" || message.length > 400) {
      setMessageValid(false);
    } else {
      setMessageValid(true);
    }
    setFormData({
      ...formData,
      message: event.target.value,
    });
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    fetch("/contact-me", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        setSuccess(true);
        setErrorObj((undefined as unknown) as Error);
        console.log("Successfully submitted the contact request.");
      })
      .catch((error: Error) => {
        setErrorObj(error);
        setSuccess(false);
        console.error(error);
      });
  };

  const isValid = (valid: boolean) =>
    css`
      ${valid === false ? "border: 1px solid red" : ""}
    `;

  return (
    <div className={contactMeStyle}>
      <form className={contactMeFormStyle}>
        {!success ? (
          <>
            <div className={contactMeIntro}>
              <p>
                I'm always open to new opportunities or to collaborate on a
                project. Or even just to talk about cool stuff. Shoot me an
                email and I'll try to get back to you as soon as possible!
              </p>
            </div>
            {errorObj ? (
              <p
                className={css`
                  color: red;
                `}
              >
                Error submitting the form, please try again.
              </p>
            ) : null}
            <div className={formTitleStyle(textColor, backgroundColor)}>
              Contact Me
            </div>
            <div className={contactFormRow}>
              <input
                type="text"
                id="name-input"
                placeholder="Your Name"
                value={formData.name || ""}
                className={isValid(nameValid)}
                onChange={(event): void => onNameChange(event)}
              />
              <input
                type="email"
                id="email-input"
                placeholder="example@host.com"
                value={formData.email || ""}
                className={isValid(emailValid)}
                onChange={(event): void => onEmailChange(event)}
              />
              <input
                type="text"
                id="subject-input"
                placeholder="Subject"
                value={formData.subject || ""}
                className={isValid(subjectValid)}
                onChange={(event): void => onSubjectChange(event)}
              />
            </div>
            <div className={contactFormRow}>
              <textarea
                id="message-input"
                placeholder="Message..."
                value={formData.message || ""}
                className={isValid(messageValid)}
                onChange={(event): void => onMessageChange(event)}
              />
            </div>
            <button
              className={cx(
                formTitleStyle(textColor, backgroundColor),
                formButtonStyle(formValid)
              )}
              disabled={!formValid}
              onClick={(
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void => handleSubmit(event)}
            >
              Send
            </button>
          </>
        ) : (
          <p>
            Thanks for reaching out! I'll try to get back to you as soon as I
            can!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactMe;
