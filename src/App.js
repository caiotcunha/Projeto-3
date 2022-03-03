import './App.css';
// import {Routes,Route,Link} from 'react-router-dom'
// import Pg1 from './pages/Login/Login'
// import Pg2 from './pages/Cadastro/Cadastro'
import './App.css';
import home from './images/home.svg';
import games from './images/games.svg';
import count from './images/count.svg';
import out from './images/out.svg';
import Home from './pages/Home/Home';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <>
     <div className="App">
          <Navbar className="navbar, align-items-start">
            <Container>
            <Nav className="flex-column">
              <Nav.Link href="#home"><img src={home} alt="home"></img></Nav.Link>
              <Nav.Link href="#games"><img src={games} alt="games"></img></Nav.Link>
              <Nav.Link href="#count"><img src={count} alt="count"></img></Nav.Link>
              <Nav.Link className="xx" href="#out">
                <img src={out} alt="out"/>
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>
          <Home></Home>
      </div>
    {/* <Pg1></Pg1> */}
    </>
  );
}
