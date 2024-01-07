import React from "react";
import "./ContactStyle.css";   // In contact css, project css and also About css

const Contact = () => {
  return (
    <div className="ContactMain">
      <div className="contact-form-container">
        <div className="contact-us">
          <div className="contact-header">
            <h1>&#9135;&#9135;&#9135;&#9135;&nbsp;&nbsp;CONTACT US</h1>
          </div>
          <div className="social-bar">
            <ul className="cntIcon">
              <li>
                <a href="https://github.com/karankushwah9"><i className="fab fa-github"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/karan-kushwah-b2144324a"><i className="fab fa-linkedin-in"></i></a>
              </li>
              <li>
                <a href="https://www.instagram.com/k_a_n_n_u_9/"><i className="fab fa-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header">
          <h1>Let's Get in Touch.</h1>
          <h2>Contact us to start your next project!</h2>
        </div>
        <div className="address">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Gole ka Mandir</h3>
          <h3>Gwalior, Madhya Pradesh</h3>
        </div>
        <div className="phone">
          <i className="fas fa-phone"></i>
          <h3>800 014 8232</h3>
        </div>
        <div className="email">
          <i className="fas fa-envelope"></i>
          <h3>Karankushwah90127@gmail.com</h3>
        </div>
        <div className="contact-form">
          <form>
            <input placeholder="Name" type="text" />
            <input placeholder="Email" type="email" />
            <textarea
              placeholder="Tell us about your project..."
              rows="4"
            ></textarea>

            {/* send button */}
            <s href="#">Send</s>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
