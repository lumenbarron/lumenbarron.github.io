import React from "react";
import googlelogo from "./Images/google-logo.png";
import githublogo from "./Images/github-logo.png";
import linkedinlogo from "./Images/linkedin-logo.png";
import lucylogo from "./Images/lucy-logo-white.png";
import "./styles/home.css";

export class FooterHome extends React.Component {
  render() {
    return (
      <footer id="contact" className="footer-container">
        <h3 className="titles">CONTACTAME</h3>

        <section className="about-footer">
          <p className="title-footer">Sería un gusto trabajar juntos!</p>
          <p>
            ¿Quieres conocer más acerca de mis proyectos, o mejor aún,
            coolaborar en tus proyectos? Escríbeme por cualquiera de estos
            medios:
          </p>
        </section>

        <section className="logo-container">
          <a
            href="mailto:ldi.lucy.mendez@gmail.com?Subject=Trabajemos%20en%20juntos!"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="google" type="image" src={googlelogo} />
            <p className="text-logo-footer">ldi.lucy.mendez@gmail.com</p>
          </a>

          <a
            href="https://github.com/lumenbarron"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="github" type="image" src={githublogo} />
            <p className="text-logo-footer">Github : lumenbarron</p>
          </a>

          <a
            href="https://www.linkedin.com/in/luceromendez/"
            target="_blank"
            rel="noopener noreferrer"
            className="logos-home"
          >
            <img alt="linkedin" type="image" src={linkedinlogo} />
            <p className="text-logo-footer">Linkedin : Lucero Méndez Barrón</p>
          </a>
        </section>

        <section className="titles">
          <a
            href="https://drive.google.com/file/d/1cETild1ipKPGQwKwgfVdYuKm-FFpRSKn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="button-cv"
          >
            Curriculum Vitae
          </a>
        </section>

        <section className="sign-footer">
          <p>Espero tener pronto noticias tuyas! Con cariño:</p>

          <img alt="lucy" type="image" src={lucylogo} />
        </section>
      </footer>
    );
  }
}
