import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ca589im", "template_56839ai", form.current, {
        publicKey: "LAUCdnnsKRlB85leB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="contact  ">
        <div className="contactimage w-screen md:w-1/3 h-[40vh] md:h-[60vh] bg-white">
          <img src="./Follow Your Heart.png" />
        </div>
        <div className="contactcontent w-screen md:w-2/3">
          <form className="contactform" ref={form} onSubmit={sendEmail}>
            <label className="contactlabel">Name</label>
            <input className="contacttext" type="text" name="user_name" />
            <label className="contactlabel">Email</label>
            <input className="contacttext" type="email" name="user_email" />
            <label className="contactlabel">Message</label>
            <textarea className="contactmessage" name="message" />
            <input className="contactbutton" type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="contactend h-[15vh] bg-black relative pl-20 pb-10">
        <h3 className="text-white">
          E-mail :{" "}
          <a href="mailto:rahulkumar3gen@gmail.com" target="_blank">
            rahulkumar3gen@gmail.com
          </a>
        </h3>
        <h3 className="text-white">
          Whatsapp :{" "}
          <a href="https://wa.me/+917903877521" target="_blank">
            7903877521
          </a>
        </h3>
        <h3 className="text-white">
          Linkdin :{" "}
          <a
            href="https://www.linkedin.com/in/rahul-kumar-7694b1228/"
            target="_blank"
          >
            rahulkumar3gen
          </a>
        </h3>
      </div>
    </>
  );
};

export default Contact;
