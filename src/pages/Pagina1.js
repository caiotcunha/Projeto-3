import React from "react";
import "./pagescss/Pagina1.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route,Link} from 'react-router-dom'
import Pg2 from './Pagina2'


export default function Pagina1(){
    return(
        <div id="Pg1" class ="bg-dark d-flex justify-content-center align-items-center" >
            <div class="d-flex flex-column mb-1">

            <div class="p-2">
                <label for="email" class="form-label">Email</label>
                <input type="email" id="teste" placeholder="" size="50"></input>
            </div>

            <div class="p-2">
                <label for="senha" class="form-label">Senha</label>
                <input type="password" id="teste2" placeholder="" size="50"></input>
            </div>

            <div class="d-grid gap-3 col-6 mx-auto p-3">
                <Button class="btn btn-primary" type="submit"> Entrar </Button>
            </div>

            <div class="d-flex p-2 justify-content-center">
                <Link to='/pag2'>Novo usuário? Cadastre-se Aqui</Link>
            </div>

            </div>
        </div>
    );
}