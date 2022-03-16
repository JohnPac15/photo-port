import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleBlur(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isvalid conditional statement
      if (!isValid) {
        setErrorMessage("your email is invaild");
      } else {
        // console.log('hey', e.target.name)

        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          // console.log('hoe')
          setErrorMessage("");
        }
      }
    }
    // console.log('errorMessage', errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // console.log(formState)
  //jsx
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleBlur}
          />
        </div>
        <div>
          <lable htmlFor="message">Message:</lable>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onBlur={handleBlur}
          />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
