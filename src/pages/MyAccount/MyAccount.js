import "./MyAccount.css";
import ModalEmail from "../../components/ModalEmail/ModalEmail";
import { useState } from "react";
import ModalSenha from "../../components/ModalSenha/ModalSenha";
import React from "react";
import Criar_Usuario from "../../Requests/Usuario/Criar_Usuario";
import Logar from "../../Requests/Usuario/Logar";

export default function MyAccount() {
  const [openModalEmail, setOpenModalEmail] = useState(false);
  const [openModalSenha, setOpenModalSenha] = useState(false);

  function cadastrar (){
    const body = {
      nome: 'zezin90',
      email: 'zezin90@gmail.com',
      senha: '12345',
    }
    Criar_Usuario(body);
  }

  function handleLogar (){
    const corpo = {
      email: 'marcelomrad@gmail.com',
      senha: '123456',
    }
    Logar(corpo);
    
  }

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

        <button onClick={cadastrar}  >
          cadastrar
        </button>

        <button onClick= {handleLogar}>
          logar
        </button>
      </div>
    </>
  );
}
