import { Nav } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Nav className="justify-content-right">
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Autos</Nav.Link>
                    <Nav.Link href="#">Nosotros</Nav.Link>
                    <Nav.Link href="#">Contacto</Nav.Link>
                    <CartWidget />
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar