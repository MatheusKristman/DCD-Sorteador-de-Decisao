import React, { useRef, useEffect } from 'react';
import useShufflerStore from '../../stores/useShufflerStore';
import Shuffle from './Shuffle';

const ShufflerContent = () => {
    const values = useShufflerStore((state) => state.values);
    const inputValue = useShufflerStore((state) => state.inputValue);

    const handleInputValue = useShufflerStore(
        (state) => state.handleInputValue
    );
    const addChoice = useShufflerStore((state) => state.addChoice);
    const handleAddChoice = () => {
        if (inputValue === '') {
            return;
        }

        addChoice();
    };

    const handleAddChoiceKeyboard = (e) => {
        if (e.key === 'Enter') {
            if (inputValue === '') {
                return;
            }

            addChoice();
        }
    };

    const handleEditValue = useShufflerStore((state) => state.handleEditValue);
    const editable = useShufflerStore((state) => state.editable);
    const acceptEdit = useShufflerStore((state) => state.acceptEdit);
    const declineEdit = useShufflerStore((state) => state.declineEdit);

    const acceptEditKeyboard = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value === '') {
                return;
            }

            acceptEdit();
        }
    };

    const deleteChoice = useShufflerStore((state) => state.deleteChoice);

    const isShuffling = useShufflerStore((state) => state.isShuffling);
    const handleShuffle = useShufflerStore((state) => state.handleShuffle);
    const loading = useShufflerStore((state) => state.loading);

    const updateResult = useShufflerStore((state) => state.updateResult);

    const choiceRef = useRef([]);
    const editInput = useRef([]);

    const shuffleValues = () => {
        if (values.length === 0) {
            return;
        }

        loading();
        const randomIndex = Math.floor(Math.random() * values.length);
        const choiceSelected = values[randomIndex].value;
        updateResult(choiceSelected);
        handleShuffle();
    };

    useEffect(() => {
        if (isShuffling) {
            scrollTo(0, 0, 'smooth');
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'unset';
        }
    }, [isShuffling]);

    return (
        <div className='shuffler'>
            {isShuffling && <Shuffle />}
            <div className='shuffler__container'>
                <div className='shuffler__container__input-box'>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={handleInputValue}
                        onKeyDown={handleAddChoiceKeyboard}
                        className='shuffler__container__input-box__input'
                    />
                    <button
                        onClick={handleAddChoice}
                        type='button'
                        className='shuffler__container__input-box__btn'
                    >
                        Adicionar
                    </button>
                </div>

                <div className='shuffler__container__choices-container'>
                    <div className='shuffler__container__choices-container__box wrapper'>
                        {values.length > 0 ? (
                            values.map((choice, index) => (
                                <div
                                    key={`${choice.value}-${index + 1}`}
                                    className='shuffler__container__choices-container__box__choice'
                                    ref={(el) =>
                                        (choiceRef.current[index] = el)
                                    }
                                >
                                    {choice.isEditable ? (
                                        <>
                                            <button
                                                className='shuffler__container__choices-container__box__choice__edit'
                                                type='button'
                                                onClick={() =>
                                                    acceptEdit(index)
                                                }
                                            >
                                                <i className='fa-solid fa-check' />
                                            </button>
                                            <button
                                                className='shuffler__container__choices-container__box__choice__delete'
                                                type='button'
                                                onClick={() =>
                                                    declineEdit(index)
                                                }
                                            >
                                                <i className='fa-solid fa-xmark' />
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => {
                                                    editable(index);
                                                    editInput.current[
                                                        index
                                                    ].focus();
                                                }}
                                                className='shuffler__container__choices-container__box__choice__edit'
                                                type='button'
                                            >
                                                <i className='fa-solid fa-pencil' />
                                            </button>
                                            <button
                                                className='shuffler__container__choices-container__box__choice__delete'
                                                type='button'
                                                onClick={() => {
                                                    choiceRef.current[
                                                        index
                                                    ].style.animation =
                                                        'bounce-out 0.8s ease-in-out forwards';

                                                    setTimeout(() => {
                                                        deleteChoice(index);
                                                    }, 800);
                                                }}
                                            >
                                                <i className='fa-regular fa-trash-can' />
                                            </button>
                                        </>
                                    )}

                                    <textarea
                                        ref={(el) =>
                                            (editInput.current[index] = el)
                                        }
                                        autoCorrect='off'
                                        autoComplete='off'
                                        readOnly={!choice.isEditable}
                                        rows={
                                            choice.value.length > 15 ||
                                            choice.newValue.length > 15 ||
                                            choice.isEditable
                                                ? 2
                                                : 1
                                        }
                                        value={
                                            choice.isEditable
                                                ? choice.newValue
                                                : choice.value
                                        }
                                        placeholder={
                                            choice.isEditable
                                                ? 'Selecione para editar'
                                                : ''
                                        }
                                        onChange={(e) =>
                                            handleEditValue(
                                                e.target.value,
                                                index
                                            )
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                if (choice.newValue === '') {
                                                    return;
                                                }

                                                acceptEdit(index);
                                            }

                                            if (e.key === 'Escape') {
                                                declineEdit(index);
                                            }
                                        }}
                                        className='shuffler__container__choices-container__box__choice__value'
                                    />
                                </div>
                            ))
                        ) : (
                            <h3 className='shuffler__container__choices-container__box__tip-empty'>
                                Adicione sua opção acima para decidir
                            </h3>
                        )}
                    </div>

                    <button
                        className='shuffler__container__choices-container__btn'
                        onClick={shuffleValues}
                    >
                        Decidir
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShufflerContent;
