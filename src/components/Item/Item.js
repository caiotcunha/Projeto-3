// import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Item.css";
// import add from '../../images/add.svg';
import edit from '../../images/edit.svg';
import remove from '../../images/remove.svg';

export default function Item(props) {
    return (
        <>
            <div class="game row">
                <div class="col-3">{props.titulo}</div>
                <div class="col-2">R${props.preco}</div>
                <div class="col-4">
                    <div class=" col-4 bd-highlight mb-3 flex-row d-inline-flex">
                        {props.genero.map(a => <div class="genero">{a}</div>)}
                    </div>
                </div>
                <div class="col"><img src={edit} alt="out"></img></div>
                <div class="col"><img src={remove} alt="out"></img></div>
            </div>
        </>
    );
  }