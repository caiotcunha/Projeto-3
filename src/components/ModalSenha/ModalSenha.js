import React from "react";
import "./ModalSenha.css";

export default function ModalEmail({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainerSenha">
        <div className="title">
          <h2>Editar Email</h2>
        </div>

        <div className="body"></div>

        <label className="labele">Senha Atual</label>
        <input
            className="inpute"
            type="password"
            name="senhaAtual" />

        <label className="labele">Nova Senha</label>
        <input
            className="inpute"
            type="password"
            name="newSenha" />

        <label className="labele">Confirmar nova senha</label>
        <input
            className="inpute"
            type="password"
            name="ConfirmarSenha" />

        <div className="footer">
          <button
            onClick={() => {
              closeModal(false);
            }}
            id="cancelButton"
          >
            Cancelar
          </button>

          <button>Confirmar</button>
        </div>
      </div>
    </div>
  );
}
