import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function handleNav() {
    setIsNavOpen((prev) => !prev);
  }

  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/');
  }

  function navigateToAbout() {
    navigate('/about');
  }

  return (
    <header className='header wrapper'>
      <div className='header__container'>
        <div onClick={navigateToHome} className='logo-box'>
          <img src={Logo} alt="logo" className='logo' />
        </div>

        <nav className='nav-links-container'>
          <button onClick={handleNav} type='button' className='nav-btn'>
            {
              isNavOpen ? (
                <i className="fa-solid fa-xmark"></i>
              ) : (
                <i className="fa-solid fa-bars-staggered"></i>
              )
            }
          </button>

          <ul className={isNavOpen ? 'nav-links nav-links-active' : 'nav-links'}>
            <li className='nav-link' onClick={navigateToHome}>Início</li>
            <li className='nav-link' onClick={navigateToAbout}>Sobre</li>
            <li className='nav-link'>Decida-se</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;