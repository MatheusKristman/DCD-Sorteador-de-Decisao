import React from 'react';

import MK from '../../assets/mk-logo.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container wrapper'>
        <div className='footer__container__dev-logo'>
          <a className='logo' href=''>Desenvolvido por </a>
        </div>

        <div className='footer__container__dev-socials'>
          <ul className='dev-socials-links'>
            <li>
              <a className='linkedin' href="https://www.linkedin.com/in/matheus-kristman/" target='_blank' rel='noreferrer noopener'>
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a className='instagram' href="https://www.instagram.com/tinzin.exe/" target='_blank' rel='noreferrer noopener'>
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li>
              <a className='github' href="https://github.com/MatheusKristman" target='_blank' rel='noreferrer noopener'>
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;