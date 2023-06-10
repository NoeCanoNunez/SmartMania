import React from "react";
import "./Card.css";
import TablaCaracteristicas from "./TablaCaracteristicas";
import promo from "../../img/promo.png";


function MiniCard({ el }) {
  
  function cambiarEspacios(cadena) {
    return cadena.replace(/ /g, "%20");
  }
  const imagenEquipo = "https://raw.githubusercontent.com/NoeCanoNunez/TC-Page/master/src/img/claro/" + cambiarEspacios(el.Equipo) +".webp"

  return (
    <>
      <div className="container__cards">
        <div className="card">
          <div className="cover__card">
          <img  id="enPromo" alt="promo" src={promo} />
            <img src={imagenEquipo} alt="" />
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="col prepagoGo1">Por Unidad</div>
              <div className="col preciopagoGo1">S/.{el.price}</div>
            </div>
            <div className="row">
              <div className="col prepagoGo2">Por Mayor(mín 3 und.)</div>
              <div className="col preciopagoGo2">S/.{el.price-20}</div>
            </div>
          </div>
          <h2 className="ColorNameEquipo">{el.Equipo}</h2>
          <br></br>
          <div>
          </div>
            <TablaCaracteristicas equipo={el} />
        </div>
      </div>
    </>
  );
}

function Card({ 
  dataEquipos
}) {
  
  return (
    <>
        <div>
          <div className="container__background-triangle">
            <div className="triangle triangle1"></div>
            <div className="triangle triangle2"></div>
            <div className="triangle triangle3"></div>
          </div>
          <div className="container_miniCard">
            {dataEquipos.length !== 0
              ? dataEquipos.map((el) => (
                  <MiniCard key={el.id} el={el} />
                ))
              : "Cargando..."}
          </div>
        </div>
      {/* </motion.div> */}
    </>
  );
}

export default Card;