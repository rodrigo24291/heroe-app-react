import React from 'react'
import {
    NavLink,
     
  } from "react-router-dom";
function Navbar() {
    return (
        <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h1 class="navbar-brand">Heroesapp</h1>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <NavLink to={'/marvel'} activeClassName="active" className="nav-link" aria-current="page" >Marvel</NavLink>
        <NavLink to={'/DC'} activeClassName="active" className="nav-link" aria-current="page" >Dc</NavLink>
        <NavLink to={'/Search'} activeClassName="active" className="nav-link" aria-current="page" >Search</NavLink>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
