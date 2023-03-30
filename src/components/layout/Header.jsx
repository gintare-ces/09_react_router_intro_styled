import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    background-color: #333;
    color: #fff;
    .navLink {
        display: block;
        padding: 0.5em 1em;
        background-color: #333;
    }
    
`

function Header() {
  return (
    <header className='container'>
        <Nav>
            <Link to="/" className="navLink">Home</Link>
            <Link to="/about" className="navLink">About</Link>
            <Link to="/contacts" className="navLink">Contacts</Link>
        </Nav>
    </header>
  )
}

export default Header