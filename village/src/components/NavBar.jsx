import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: lightblue;
`;

const Link = {
    'margin': '0 20px',
    'color': 'black',
    'padding': '10px',
    'textDecoration': 'none',
}

const NavBar = props => {
    return (
        <NavContainer>
            <NavLink to="/" style={Link} >Smurfs</NavLink>
            <NavLink to="/smurf-form" style={Link} >Smurf Form</NavLink>
        </NavContainer>
    )
}

export default NavBar;