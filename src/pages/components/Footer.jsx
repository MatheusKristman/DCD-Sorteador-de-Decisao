import React from "react";
import { useLocation } from 'react-router-dom';

import MK from "../../assets/mk-logo.svg";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className={location.pathname !== '/shuffler' ? "footer" : "footer no-icon"}>
      <div className={location.pathname !== '/shuffler' ? "footer__container wrapper" : "footer__container no-before wrapper"}>
        <div className="footer__container__dev-logo">
          <a
            className="logo"
            href="https://portfolio-2-0-iota-henna.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Desenvolvido por{" "}
          </a>
        </div>

        <div className="footer__container__dev-socials">
          <ul className="dev-socials-links">
            <li>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/matheus-kristman/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                className="instagram"
                href="https://www.instagram.com/tinzin.exe/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="github"
                href="https://github.com/MatheusKristman"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
