import React from 'react';

function Contactfrom(){
    //jsx
    return(
        <section>
            <h1>Contact-form</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type='text' name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <lable htmlFor="message">Message:</lable>
                    <textarea name="message" rows='5' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;