import { useContext, useLayoutEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { MdArrowForward } from "react-icons/md";
import { Ring } from "@uiball/loaders";

import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";
import { SocialLinks } from "../../data/data";
import { FooterLinkBoxLayout } from "./FooterLinkBoxLayout";

interface FormField {
  name: string;
  email: string;
  message: string;
}

const FormData: FormField = {
  name: "",
  email: "",
  message: "",
};

export const FooterLayout = () => {
  const { addRef, state } = useContext(AppContext);
  const [sending, setSending] = useState(false);
  const [sended, setSended] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const { lang } = state;

  const sendEmail = async (form: HTMLFormElement) => {
    try {
      setSending(true);
      const result = await emailjs.sendForm(
        import.meta.env.VITE_MAIL_SERVICE_ID ? import.meta.env.VITE_MAIL_SERVICE_ID.toString() : "",
        import.meta.env.VITE_MAIL_TEMPLATE_ID
          ? import.meta.env.VITE_MAIL_TEMPLATE_ID.toString()
          : "",
        form.target,
        import.meta.env.VITE_MAIL_PUBLIC_KEY ? import.meta.env.VITE_MAIL_PUBLIC_KEY.toString() : ""
      );
      reset();
      setSended(true);
      setSending(false);
    } catch (error) {
      console.log(`Error`);
    }
  };

  const { handleInputChange, handleSubmit, reset, formValues } = useForm<FormField>(
    sendEmail,
    FormData
  );

  useLayoutEffect(() => {
    addRef(contactRef, "contact");
  }, []);

  return (
    <div ref={contactRef} className="footer-content">
      <p className="txt-title">
        <b>
          Let's <br />
          connect
        </b>
      </p>
      <div className="contact">
        <form onSubmit={handleSubmit} ref={form}>
          <input
            name="name"
            className="form-input txt-text"
            type="text"
            placeholder="Name"
            onChange={handleInputChange}
            value={formValues.name}
            required
          />
          <input
            name="email"
            className="form-input txt-text"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={formValues.email}
            required
          />
          <textarea
            className="form-text txt-text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleInputChange}
            value={formValues.message}
            required
          ></textarea>
          <button className="form-btn txt-subtitle" type="submit">
            {!sended ? <u>Send</u> : <u>Send again</u>}
            {!sending ? (
              <MdArrowForward />
            ) : (
              <Ring size={40} lineWeight={5} speed={2} color="white" />
            )}
          </button>
        </form>
      </div>
      <FooterLinkBoxLayout lang={lang} />
    </div>
  );
};
