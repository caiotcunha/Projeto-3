import './App.css';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import home from './images/home.svg';
import games from './images/games.svg';
import account from './images/count.svg';
import out from './images/out.svg';
import Home from './pages/Home/Home';
import MyAccount from './pages/MyAccount/MyAccount'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {
  return (
    <>
     <div className="App">
          <Navbar className="navbar, align-items-start">
            <Container>
            <Nav className="flex-column">
              <Nav.Link href="/home" ><img src={home} alt="home"></img ></Nav.Link>
              <Nav.Link href="/games"><img src={games} alt="games"></img></Nav.Link>
              <Nav.Link href="/account" ><img src={account} alt="count"></img></Nav.Link>
              <Nav.Link className="xx" href="#out">
                <img src={out} alt="out"/>
              </Nav.Link>
            </Nav>
            </Container>
          </Navbar>

          <Routes >
            <Route path='/account' element = {<MyAccount/>} />
            <Route path='/home' element = {<Home/>} />
          </Routes>

          
      </div>

    </>
  );
}
