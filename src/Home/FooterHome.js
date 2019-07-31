import React from "react";
import googlelogo from "./Images/google-logo-flat.png";
import githublogo from "./Images/github-logo-flat.png";
import linkedinlogo from "./Images/linkedin-logo-flat.png";
import lucylogo from "./Images/lucy-logo-black-2.png";
import "./styles/footer.css";

export class FooterHome extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer-container">
        <h3 className="titles">HIRE ME!</h3>

        <section className="about-footer">
          <p className="title-footer">It would be a pleasure to work together!</p>
          <p>
          Do you want to know more about my projects or better, collaborate on your projects? 
          Write me!
          </p>
        </section>

        <section className="logo-container">
          <a
            href="mailto:ldi.lucy.mendez@gmail.com?Subject=Trabajemos%20en%20juntos!"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="google" type="image" className="logo-footer" src={googlelogo} />
            <p className="text-logo-footer">ldi.lucy.mendez@gmail.com</p>
          </a>

          <a
            href="https://github.com/lumenbarron"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="github" type="image" className="logo-footer-git" src={githublogo} />
            <p className="text-logo-footer">Github : lumenbarron</p>
          </a>

          <a
            href="https://www.linkedin.com/in/luceromendez/"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="linkedin" type="image" className="logo-footer" src={linkedinlogo} />
            <p className="text-logo-footer">Linkedin : Lucero Méndez Barrón</p>
          </a>
        </section>

        <section className="titles">
          <a
            href="https://drive.google.com/file/d/1HPhuwBbYPo3P2hV1fEnaEUmZ8q_wNeYD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-cv"
          >
            Curriculum Vitae
          </a>
        </section>

        <section className="sign-footer">
          <p>I hope to hear from you soon! Lovely :</p>

          <img alt="lucy" type="image" className="logo-lucy-footer" src={lucylogo} />
        </section>
      </footer>
    );
  }
}
