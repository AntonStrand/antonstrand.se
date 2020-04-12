import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"

const Header = () => (
  <header>
    <Link to='/'>
      <Logo alt='An illustration of me by me' className='logo' />
    </Link>
    <span>
      <Link to='/about'>About</Link>
    </span>
  </header>
)

export default Header
