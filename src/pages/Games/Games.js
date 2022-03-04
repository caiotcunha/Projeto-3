import "./Games.css";
import Table from "../../components/Table/Table";
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Games() {
    return (
        <>
            <h1>Todos os jogos</h1>
            <Table idUsuario={2}></Table>
        </>
    );
  }