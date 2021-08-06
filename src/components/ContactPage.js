import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">contact</div>
      <div className="contact-info">
        <div className="contact-left">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur
        </div>
        <div className="contact-right">
          <form className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="contact-form-group">
                <label htmlFor="email">e-mail</label>
                <input type="text" name="name" id="email" />
              </div>
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject">subject</label>
              <input type="text" name="name" id="subject" />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">message</label>
              <textarea
                className="contact-form-message"
                type="text"
                name="name"
                id="message"
              />
            </div>
            <button className="contact-form-button" type="submit">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
