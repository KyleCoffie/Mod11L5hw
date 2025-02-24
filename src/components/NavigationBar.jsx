import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="/">Marvel Characters</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/" activeClassname="active">
                        Home
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/browse-characters" activeClassname="active">
                        Browse Characters
                    </Nav.Link>
                    <Nav.Link as={NavLink} to="/comics" activeClassname="active">
                        Comics
                    </Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>



    //     <nav>
    //     <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end>Home</NavLink> | 
    //     <NavLink to="/browse-characters" className={({ isActive }) => (isActive ? 'active' : '')}>Browse Characters</NavLink> | 
    //     <NavLink to="/comics" className={({ isActive }) => (isActive ? 'active' : '')}>Comics</NavLink>
    //   </nav>
    );

}

export default NavigationBar