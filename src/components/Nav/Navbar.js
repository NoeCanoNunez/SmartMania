import React, { useState } from "react";
import logo from "../../logo.svg";

import "./Navbar.css";

function Navbar({
  buscador,
  selectorNavBar,
}) {
  const liStyle = { color: "white" };

  const submitBuscar = (e) => {
    e.preventDefault();
    buscador(e);
    selectorNavBar("TodosLosEquipos");
  };

  const submitSelectorNavbar = (e) => {
    e.preventDefault();
    hasHechoClick();
    selectorNavBar(e.target.innerText);
    if (e.target.innerText === "TodosLosEquipos") {
      document.getElementById("navInputBusqueda").value = "";
      document.getElementById("tori").click();
    }
  };


  const [mostrarNavbar, setMostrarNavbar] = useState(false);
  const hasHechoClick = e => {
    setMostrarNavbar(!mostrarNavbar)
  }


  return (
    <div className="fixed-top">
      
      <nav className="navbar navbar-expand-lg">
        
        <div className="container-fluid">
          <img src={logo} className="App-logo" alt="logo" />
          
          <button
            className="navbar-toggler"
            type="button"

            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={hasHechoClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={mostrarNavbar ? "collapse navbar-collapse show" : "collapse navbar-collapse"} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  onClick={submitSelectorNavbar}
                  style={liStyle}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  TodosLosEquipos
                </a>
              </li>
              <li className="nav-item">
                <a
                  onClick={submitSelectorNavbar}
                  style={liStyle}
                  className="nav-link"
                  href="/"
                >
                  CompararEquipos
                </a>
              </li>
              {/* <li className="nav-item">
                <a style={liStyle} className="nav-link disabled" href="/">
                  EnPromocion
                </a>
              </li> */}
            </ul>
            

            <form onSubmit={submitBuscar} className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busqueda Grupal"
                aria-label="Search"
                id="navInputBusqueda"
              />
              <button
                id="tori"
                className="btn btn-warning botonBuscar"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
