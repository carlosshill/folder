import { useState } from "react";
import AppForm from "./componentes/AppForm";

 

function App() {
 
  /////////////////////////read fnRead lectura a Bd/////////////////////////////////////
  const [docsBD, setDocsBD] = useState([]);
  const [idActual, setIdActual] =useState("");
  const fnRead = () => {
    console.log("lectura a bd");
  }
  /////////////////////////delete fnDelete Borrar en Bd///////////////////////////////////// 
  


  return (
    <div style={{background:"red" , width:"350px" }}>
     hola mundo
     <AppForm {...{idActual, setIdActual, fnRead}} />
    </div>
  );
}

export default App;
