import React, { useState } from "react"; 
import './styles.css'

function ItemListContainer({ Hola }) {
  const [cambio, setCambio] = useState(Hola);

  function hacerCambio() {
    setCambio("En que lo podemos ayudar?");
  }

  return (
    <div className="Item-List-Container">
      <Aplicar saludo={cambio} hacerCambio={hacerCambio} /> 
    </div>
  );
}

function Aplicar({ saludo, hacerCambio }) {
  return (
    <>
      <p className="Parrafo">{saludo}</p>
      <button onClick={hacerCambio}>mensaje</button>
    </>
  );
}

export default ItemListContainer;
