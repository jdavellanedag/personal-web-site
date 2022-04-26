import { FormEvent, useContext, useLayoutEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import { MdArrowForward } from "react-icons/md";
import { GoMarkGithub } from "react-icons/go";

import { AppContext } from "../../context/AppContext";
import { useForm } from "../../hooks/useForm";

export const FooterLayout = () => {
  const { addRef, state } = useContext(AppContext);
  const contactRef = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLFormElement>(null);
  const { lang } = state;

  const sendEmail = async (form: HTMLFormElement) => {
    try {
      const result = await emailjs.sendForm(
        "service_i1bfjw8",
        "template_sraopum",
        form.target,
        "qnjnyFrIOCfOAJ3ao"
      );
    } catch (error) {
      console.log(`Error`);
    }
  };

  const { handleInputChange, handleSubmit } = useForm(sendEmail, {
    name: "",
    email: "",
    message: "",
  });

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
          />
          <input
            name="email"
            className="form-input txt-text"
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
          />
          <textarea
            className="form-text txt-text"
            name="message"
            id="message"
            placeholder="Message"
            onChange={handleInputChange}
          ></textarea>
          <button className="form-btn txt-subtitle" type="submit">
            <u>Send</u>
            <MdArrowForward />
          </button>
        </form>
      </div>
      <div className="link__box link__box-center mt-3">
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
        <div className="link__box-link">
          <GoMarkGithub className="is-36" />
        </div>
      </div>
      <div className="footer-text">
        <p className="txt-text">
          Created by <b>Julian</b> | All reserved 2022 | 🍻 ☕
        </p>
        <p className="txt-text">
          ES | <b>{lang}</b>
        </p>
      </div>
    </div>
  );
};
