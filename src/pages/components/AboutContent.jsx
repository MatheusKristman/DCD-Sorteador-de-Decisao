import React from 'react';

import AboutImg from '../../assets/about-image.png';

const AboutContent = () => {
  return (
    <section className='about wrapper'>
      <div className='about__container'>
        <div className='about__container__info'>
          <h2 className='about-title'>Onde saiu essa ideia?</h2>

          <p className='about-desc text-margin'>
            Meu melhor amigo e sua namorada sempre foram indecisos em praticamente tudo que eles querem fazer ou comer, e então tiveram a ideia de
            usar o artificio chamado “Pergunte ao Tin” que sou eu, então já que sou um programador resolvi ajudar pessoas iguais a eles de forma bem
            simples, criando esse site.
          </p>

          <p className='about-desc'>
            Então se não sabe o que vai jantar no final de semana, ou se precisa lavar a louça agora ou no dia seguinte, até mesmo qual roupa usar
            para sair, este site esta aqui para te ajudar.
          </p>
        </div>

        <div className='about__container__image'>
          <div className='about-image-box'>
            <img src={AboutImg} alt='Confuso' className='about-image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
