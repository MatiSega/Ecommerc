import React from "react"; 
import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <main className='main'>
      <Navbar />
      <ItemListContainer Hola="Bienvenidos" className="Parrafo" /> 
    </main>
  );
}

export default App;
