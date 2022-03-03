// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Table.css";
import add from '../../images/add.svg';
// import edit from '../../images/edit.svg';
// import remove from '../../images/remove.svg';
import Item from '../Item/Item';
export default function Table(props) {
    return (
        <>
            <div class="table">
                <div class="titulo row">
                    <div class="col-3">Titulo</div>
                    <div class="col-3">Preço</div>
                    <div class="col-3">Gênero</div>
                    <div class="col add">Adicionar um Jogo<img src={add} alt="out"></img></div>
                </div>
                <Item preco={20} titulo={'Teste'} genero={['terror','ação']} />
                <div class="add">Adicionar um Jogo<img src={add} alt="out"></img></div>
            </div>
        </>
    );
  }