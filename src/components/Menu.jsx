import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menu(){
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="md">
                <Container fluid>
                    <Link to="/"><img src="https://th.bing.com/th/id/R.5718a3faebbfaa443bae51f6e19c01bf?rik=9sMxd9RiFJuZcQ&riu=http%3a%2f%2fsurf.renzy.land%2fimg%2flogo%2flogo1.png&ehk=sbSs68S5N2PasciLGGOP6qBq1chbZ%2bcZLuY5vTnL3OU%3d&risl=&pid=ImgRaw&r=0https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png" width="50"/></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/contato">Contato</Link>
                            <Link className="nav-link" to="/cadastro">Cadastro</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                            <Link className="nav-link" to="/ajuda">Ajuda</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        
           
        </header>
    )
}
export default Menu;