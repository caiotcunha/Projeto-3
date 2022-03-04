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

        <label className="labeleSenha">Senha Atual</label>
        <input
            className="inputeSenha"
            type="password"
            name="senhaAtual" />

        <label className="labeleSenha">Nova Senha</label>
        <input
            className="inputeSenha"
            type="password"
            name="newSenha" />

        <label className="labeleSenha">Confirmar nova senha</label>
        <input
            className="inputeSenha"
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
