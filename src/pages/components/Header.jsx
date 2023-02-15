import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../stores/useStore';

import Logo from '../../assets/logo.svg';

const Header = () => {
  const isNavOpen = useStore((state) => state.isNavOpen);
  const openNav = useStore((state) => state.openNav);
  const closeNav = useStore((state) => state.closeNav);

  const handleNav = useCallback(() => {
    if (isNavOpen) {
      closeNav();
    } else {
      openNav();
    }
  }, [isNavOpen]);

  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/');

    setTimeout(() => {
      closeNav();
    }, 100);
  }

  function navigateToAbout() {
    navigate('/about');

    setTimeout(() => {
      closeNav();
    }, 100);
  }

  function navigateToShuffler() {
    navigate('/shuffler');

    setTimeout(() => {
      closeNav();
    }, 100);
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
            <li className='nav-link' onClick={navigateToShuffler}>Decida-se</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;