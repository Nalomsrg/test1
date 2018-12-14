import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Test</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>link</MenuItem>
                  <MenuItem eventKey={3.2}>link</MenuItem>
                  <MenuItem eventKey={3.3}>link</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link 
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link 
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Header;