import Link from 'next/link'
import React from 'react'

import { FaUserAlt } from "react-icons/fa";

function NavBar() {
  return (
    <div id="navbar">
      <div id="logo">ChargEra</div>
      <ul id="menu">
        <Link href="/"><li>Home</li></Link>
        <Link href="/"><li>Chargers</li></Link>
        <Link href="/"><li>Providers</li></Link>
        <Link href="/"><li>Contacts</li></Link>
      </ul>
      <div id="account">
        <FaUserAlt />
      </div>
    </div>
  )
}

export default NavBar