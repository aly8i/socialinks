import React from 'react'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Social Links</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Links 1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Links 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Links 3</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Links 4</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}