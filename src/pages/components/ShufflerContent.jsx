import React, { useRef } from "react";
import useShufflerStore from "../../stores/useShufflerStore";

const ShufflerContent = () => {
  const values = useShufflerStore((state) => state.values);
  const inputValue = useShufflerStore((state) => state.inputValue);

  const handleInputValue = useShufflerStore((state) => state.handleInputValue);
  const addChoice = useShufflerStore((state) => state.addChoice);

  const handleAddChoice = () => {
    if (inputValue === "") {
      return;
    }

    addChoice();
  };

  const handleEditValue = useShufflerStore((state) => state.handleEditValue);
  const editable = useShufflerStore((state) => state.editable);
  const acceptEdit = useShufflerStore((state) => state.acceptEdit);
  const declineEdit = useShufflerStore((state) => state.declineEdit);

  const deleteChoice = useShufflerStore((state) => state.deleteChoice);

  const editInput = useRef(null);

  return (
    <div className="shuffler">
      <div className="shuffler__container">
        <div className="shuffler__container__input-box">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputValue}
            className="shuffler__container__input-box__input"
          />
          <button
            onClick={handleAddChoice}
            type="button"
            className="shuffler__container__input-box__btn"
          >
            Adicionar
          </button>
        </div>

        <div className="shuffler__container__choices-container">
          <div className="shuffler__container__choices-container__box wrapper">
            {values.map((choice, index) => (
              <div
                key={`${choice.value}-${index + 1}`}
                className="shuffler__container__choices-container__box__choice"
              >
                {choice.isEditable ? (
                  <>
                    <button
                      className="shuffler__container__choices-container__box__choice__edit"
                      type="button"
                      onClick={() => acceptEdit(index)}
                    >
                      <i className="fa-solid fa-check" />
                    </button>
                    <button
                      className="shuffler__container__choices-container__box__choice__delete"
                      type="button"
                      onClick={() => declineEdit(index)}
                    >
                      <i className="fa-solid fa-xmark" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        editable(index);
                        editInput.current.focus();
                      }}
                      className="shuffler__container__choices-container__box__choice__edit"
                      type="button"
                    >
                      <i className="fa-solid fa-pencil" />
                    </button>
                    <button
                      className="shuffler__container__choices-container__box__choice__delete"
                      type="button"
                    >
                      <i className="fa-regular fa-trash-can" />
                    </button>
                  </>
                )}

                <textarea
                  ref={editInput}
                  autoCorrect="off"
                  autoComplete="off"
                  readOnly={!choice.isEditable}
                  rows={
                    choice.value.length > 15 || choice.newValue.length > 15 || choice.isEditable
                      ? 2
                      : 1
                  }
                  value={choice.isEditable ? choice.newValue : choice.value}
                  placeholder={choice.isEditable ? "Selecione para editar" : ""}
                  onChange={(e) => handleEditValue(e.target.value, index)}
                  className="shuffler__container__choices-container__box__choice__value"
                />
              </div>
            ))}
          </div>

          <button className="shuffler__container__choices-container__btn">Decidir</button>
        </div>
      </div>
    </div>
  );
};

export default ShufflerContent;
