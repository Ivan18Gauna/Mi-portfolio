import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Mailer.css";

export const Mailer = () => {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    if(input.user_name && input.user_email && input.user_message){
    emailjs
      .sendForm(
        "service_jy6a8i4",
        "template_vcbg65s",
        e.target,
        "lVkn881jkfeYEfMvo"
      )
      .then((response) => console.log(response))
      .then((error) => console.log(error));
    }else{
      alert('Todos los campos deven ser completados')
    }
  }
  return (
    <div className="div-form">
      {/* <h1 className="title-contact">Contactame</h1> */}
      <form className="form-mail" onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" onChange={handleInput} />
        <hr />

        <label>Email</label>
        <input type="email" name="user_email" onChange={handleInput} />
        <hr />

        <label>Message</label>
        <textarea
          name="user_message"
          onChange={handleInput}
          className="msj"
          cols="30"
          rows="10"
        ></textarea>
        <hr />
        <button className="btn-email">Send</button>
      </form>
    </div>
  );
};
