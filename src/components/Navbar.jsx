import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/aboutus">aboutus <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contactus">contactus</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/storage">store</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/counter">counter</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">API DEMO 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">API DEMO 2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo3">API DEMO 3</Link>
      </li>
    
    
    <li class="nav-item">
        <Link class="nav-link" to="/fetchuserdata">fetchuserdata</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/adduserdata">adduserdata</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/books">books</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/filuser">fill user</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/fileupload">file upload</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/transaction">transaction </Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/bankHeader">bankHeader</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/muidemo1">muidemo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/muitable">muitable</Link>
      </li>
      
      </ul>
    
  </div>
</nav>
  )
}
