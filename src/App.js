import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Nav/Navbar";
import Card from "./components/Card/Card";
import NeoCard from "./components/Card/NeoCard";

import allData from "./allData/miArchivo.json";

//importando formulas Helper
import { filterByEquipo } from "./helper/funcionOrdenYFiltroArrayObjetos";

import Footer from "./components/Footer/Footer";

export default function App() {
  //ZoomOut en dispositivos mobiles

  //Filtros
  const [mostrarQueTabla, setMostrarQueTabla] = useState("caracteristicas");
  const [inventarioMostrarCero, setInventarioMostrarCero] = useState("si");
  const [filtrarPreciosNav, setFiltrarPreciosNav] = useState([
    ["id"],
    ["ASCENDENTE"],
  ]);

  //Buscador Nav
  const [equiposEnBuscadorNav, setequiposEnBuscadorNav] = useState(
    allData.data
  );
  const [ventanaAMostrar, setVentanaAMostrar] = useState("TodosLosEquipos");
  const [listaPreciosAMostar, setListaPreciosAMostar] = useState("");

  //Set Filtros
  const mostrarEquiposConInvetarioCero = (e) =>
    setInventarioMostrarCero(e.target.value);
  const queTablaMostrar = (e) => setMostrarQueTabla(e.target.value);
  const filtrandoDesdeNav = (e) => setFiltrarPreciosNav(e);

  //Set Buscador Nav
  const queEquiposMostrarDeTodos = (e) => {
    setequiposEnBuscadorNav(filterByEquipo(allData.data, e.target[0].value));
  };

  // Elelgir Ventana: TodosLosEquipos-CompararEquipos
  const queVentanaMostrarDelNavBar = (e) => {
    // console.log("que ventana mostrar", e.target.innerText)
    setVentanaAMostrar(e);
  };
  const queListaDePreciosMostrarDelNavBar = (e) => {
    //console.log("que Lista mostrar", e.target.getAttribute("refer"))
    setListaPreciosAMostar(e.target.getAttribute("refer"));
    setVentanaAMostrar("ListasDePrecios");
  };

  


  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );
    if(ventanaAMostrar === "TodosLosEquipos" ){
      if (isMobile) {
        document.body.style.zoom = "80%"; // Ajusta el valor según el nivel de zoom deseado
      }
    } else {
      if (isMobile) {
        document.body.style.zoom = "100%"; // Ajusta el valor según el nivel de zoom deseado
      }
    }
  }, [ventanaAMostrar]);
  

  return (
    <div className="App">
      
        <div>
          <Navbar
            filtrandoDesdeNav={filtrandoDesdeNav}
            queTablaMostrar={queTablaMostrar}
            mostrarCero={mostrarEquiposConInvetarioCero}
            buscador={queEquiposMostrarDeTodos}
            selectorNavBar={queVentanaMostrarDelNavBar}
            preciosNavBar={queListaDePreciosMostrarDelNavBar}
          />
          <div style={{ marginTop: "120px" }}>
            {ventanaAMostrar === "TodosLosEquipos" ? (
              <Card
                filtrarPreciosNav={filtrarPreciosNav}
                inventarioMostrarCero={inventarioMostrarCero}
                mostrarQueTabla={mostrarQueTabla}
                dataEquipos={equiposEnBuscadorNav}
              />
            ) : ventanaAMostrar === "CompararEquipos" ? (
              <NeoCard
                inventarioMostrarCero={inventarioMostrarCero}
                mostrarQueTabla={mostrarQueTabla}
                dataEquipos={allData.data}
              />
            ) : null}
          </div>
          <Footer version={allData.version} />
        </div>
      
    </div>
  );
}
