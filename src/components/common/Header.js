import React from 'react';
import {Nav, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

const Header = () => (
    <Nav>
        <NavItem>
            <Link className="nav-link" to='/login'>Login</Link>
        </NavItem>
        <NavItem>
            <Link className="nav-link" to='/register'>Register</Link>
        </NavItem>
    </Nav>
);

export default Header;
