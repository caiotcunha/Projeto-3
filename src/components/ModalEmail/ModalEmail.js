import React from "react";
import "./ModalEmail.css";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal-root");

export default function ModalEmail({ closeModal }) {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modalContainerEmail">
        <div className="title">
          <h3 className="titulo">Editar Email</h3>
        </div>

        <div className="body"></div>
        <label className="labele">Novo Email</label>
        <input className="inpute" type="text" name="newEmail" />

        <div className="footer">
          <button
            onClick={() => {closeModal(false);}}
            id="cancelButton"
          >
            Cancelar
          </button>

          <button>Confirmar</button>
        </div>
      </div>
    </div>,
    portalRoot
  );
}
