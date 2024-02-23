import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <Link to="/">Sushi Co.</Link>
        <p>Elena Cherpakova</p>
    </header>
  )
}

export default Header