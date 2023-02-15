import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useShufflerStore from '../../stores/useShufflerStore';

const ShuffleLoading = () => {
  const notLoading = useShufflerStore((state) => state.notLoading);

  const loadingRef = useRef(null);

  const showResult = () => {
    loadingRef.current.style.animation = "fadeOut 1s ease forwards";

    setTimeout(() => {
      notLoading();
    }, 1000);
  }

  return (
    <div ref={loadingRef} className="shuffle-overlay__loading-container">
      <h3 className="shuffle-overlay__loading-container__title">
        Tomando uma decisão...
      </h3>
      <div className="shuffle-overlay__loading-container__box">
        <div className="shuffle-overlay__loading-container__box__btn-overflow">
          <button type="button" className="shuffle-overlay__loading-container__box__btn-overflow__btn" onClick={showResult}>
            Ver Decisão
          </button>
        </div>
      </div>
    </div>
  );
}

const ShuffleResult = () => {
  const result = useShufflerStore((state) => state.result);
  const resetValues = useShufflerStore((state) => state.resetValues);
  const notLoading = useShufflerStore((state) => state.notLoading);
  const handleShuffle = useShufflerStore((state) => state.handleShuffle);

  const resultRef = useRef(null);

  const navigate = useNavigate();

  const reset = () => {
    resultRef.current.style.animation = 'fadeOut 1s ease forwards';
    resetValues();

    setTimeout(() => {
      handleShuffle();
      handleShuffleLoading();
    }, 1000);
  }

  const navigateToHome = () => {
    reset();
    navigate('/');
  }

  return (
    <div ref={resultRef} className="shuffle-overlay__result-container">
      <div className="shuffle-overlay__result-container__result-displayer">
        <h2 className="shuffle-overlay__result-container__result-displayer__result">{result}</h2>
      </div>

      <div className="shuffle-overlay__result-container__btn-box">
        <button onClick={reset} type="button" className="shuffle-overlay__result-container__btn-box__restart-btn">
          Reiniciar
        </button>
        <button onClick={navigateToHome} type="button" className="shuffle-overlay__result-container__btn-box__home-btn">
          Voltar para Início
        </button>
      </div>
    </div>
  );
}

const Shuffle = () => {
  const isShuffleLoading = useShufflerStore((state) => state.isShuffleLoading); 

  return (
    <div className="shuffle-overlay">
      {isShuffleLoading && <ShuffleLoading />}
      {!isShuffleLoading && <ShuffleResult />}
    </div>
  )
}

export default Shuffle