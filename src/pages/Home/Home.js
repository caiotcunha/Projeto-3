import "./Home.css";
import Table from "../../components/Table/Table";
// import { Container, Row, Col } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    return (
        <>
            <h1>Meus os jogos</h1>
            <Table idUsuario={2}></Table>
        </>
    );
  }