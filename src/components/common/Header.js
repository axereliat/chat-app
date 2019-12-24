import React from 'react';
import {Nav, NavItem} from "reactstrap";
import {Link} from "react-router-dom";
import {Auth} from "../../api/auth";
import toastr from 'toastr';

const Header = props => {
    const handleLogout = () => {
        Auth.logout();
        toastr.success('You have successfully logged out.');
    };

    return (
        <Nav>
            {!Auth.isLoggedIn() && <NavItem>
                <Link className="nav-link" to='/login'>Login</Link>
            </NavItem>}
            {!Auth.isLoggedIn() && <NavItem>
                <Link className="nav-link" to='/register'>Register</Link>
            </NavItem>}
            {Auth.isLoggedIn() && <NavItem>
                <Link className="nav-link" to='/'>Home</Link>
            </NavItem>}
            {Auth.isLoggedIn() && <NavItem>
                <a href="#" className="nav-link" onClick={handleLogout}>Logout</a>
            </NavItem>}
        </Nav>
    );
};

export default Header;
