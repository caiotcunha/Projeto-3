import "./MyAccount.css";
import ModalEmail from "../../components/ModalEmail/ModalEmail";
import { useState } from "react";
import ModalSenha from "../../components/ModalSenha/ModalSenha";
import React from "react";

export default function MyAccount() {
  const [openModalEmail, setOpenModalEmail] = useState(false);
  const [openModalSenha, setOpenModalSenha] = useState(false);

  return (
    <>
      <h1 className = 'conta'>MINHA CONTA</h1>

      <div className="forms">
        <label className="labele">Nome</label>
        <input
            className="input"
            type="text"
            placeholder="John Doe" />
        <label className="labele">Email</label>

        <input
          className="input"
          type="text"
          placeholder="john.doe@gmail.com "
        />
      </div>

      <div >
        <button
          className="botao"
          onClick={() => { if (!openModalSenha) setOpenModalEmail(true); }}
        >
          Editar Email
        </button>

        {openModalEmail && <ModalEmail closeModal={setOpenModalEmail} />}

        <button
          className="botao"
          style={{top: "45%", marginTop: "30px"}}
          onClick={() => { if (!openModalEmail) setOpenModalSenha(true);}}
        >
          Trocar Senha
        </button>

        {openModalSenha && <ModalSenha closeModal={setOpenModalSenha} />}
      </div>
    </>
  );
}
