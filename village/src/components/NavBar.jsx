import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
    return (
        <div>
            <NavLink to="/" >Smurfs</NavLink>
            <NavLink to="/smurf-form" >Add Smurf</NavLink>
        </div>
    )
}

export default NavBar;