import React from 'react';

import HeroImage from '../../assets/home-image.png';

const Hero = () => {
  return (
    <main className='hero wrapper'>
      <div className='hero__container'>
        <div className='hero__container__info'>
          <h1 className='hero-title'>Te ajudando a decidir o que fazer <strong>ou comer</strong></h1>

          <p className='hero-desc'>
            Esta confuso e não consegue decidir o que vai comer no jantar? ou o que quer fazer? Este app resolve seu problema te ajudando a ter uma
            escolha.
          </p>

          <button type='button' className='hero-btn'>Começar</button>
        </div>

        <div className='hero__container__image'>
          <div className='hero-image-box'>
            <img src={HeroImage} alt='lampada' className='hero-image' />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
