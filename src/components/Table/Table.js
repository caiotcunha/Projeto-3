// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Table.css";
import add from '../../images/add.svg';
import edit from '../../images/edit.svg';
import remove from '../../images/remove.svg';
export default function Table() {
    return (
        <>
            <div class="table">
                <div class="titulo row">
                    <div class="col-3">Titulo</div>
                    <div class="col-3">Preço</div>
                    <div class="col-3">Gênero</div>
                    <div class="col add">Adicionar um Jogo<img src={add} alt="out"></img></div>
                </div>
                <div class="game row">
                    <div class="col-3">Dar</div>
                    <div class="col-3">R$15</div>
                    <div class="col-3">sous</div>
                    <div class="col"><img src={edit} alt="out"></img></div>
                    <div class="col"><img src={remove} alt="out"></img></div>
                </div>
                <div class="add">Adicionar um Jogo<img src={add} alt="out"></img></div>
                {/* <div class="game row">
                    <div class="col-2">Dar</div>
                    <div class="col-2">15</div>
                    <div class="col-2">sous</div>
                    <div class="col-1"><img src={edit} alt="out"></img></div>
                    <div class="col-1"><img src={remove} alt="out"></img></div>
                </div>
                <div class="game row">
                    <div class="col-2">Dar</div>
                    <div class="col-2">15</div>
                    <div class="col-2">sous</div>
                    <div class="col-1"><img src={edit} alt="out"></img></div>
                    <div class="col-1"><img src={remove} alt="out"></img></div>
                </div>  */}
            </div>
        </>
    );
  }