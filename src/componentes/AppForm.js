
  import React, { useState } from 'react'
  import { addDoc, collection, doc } from "firebase/firestore";
  import { db } from "./firebase";
  
  const AppForm = (props) => {

    /////////////////////////cread fnCread guardar en Bd/////////////////////////////////////
    const camposRegistro ={nombre:"", edad:"", genero:""};
    const [objeto, setObjeto] = useState(camposRegistro);

    const handleStatuschange = (e) => {
        const {name, value} = e.target;
        setObjeto({...objeto, [name]:value });
        //console.log(objeto);

    }
    const handleSubmit =  (e) => {
      try {
        e.preventDefault();
        
        if(validarform()){
          addDoc(collection(db, "persona"), objeto);
          
          console.log("Se guardo...");
          //props.fnRead();
          
        }else{

        }
      } catch (error) {
        
      }

    }

    const validarform = () => {
      if (objeto.nombre==="" || /^\s+$/.test(objeto.nombre)) {
        alert("Escriba nombres...");
        return false;

      }
      return true;

    };

    /////////////////////////update fnUpdate actualizar en Bd/////////////////////////////////////

    

    return (
      <div style={{background:"green", padding:"10px",margin:"10px"}}>
        <h1>AppForm.js</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" name="nombre" placeholder='Nombres...'
        onChange={handleStatuschange} value={objeto.nombre}/> <br/>

        <input type="text" name="edad" placeholder='Edad...'
        onChange={handleStatuschange} value={objeto.edad}/> <br/>

        <input type="text" name="genero" placeholder='Genero...'
        onChange={handleStatuschange} value={objeto.genero}/> <br/>

        


        <button>
          {props.idActual === ""?"Guardar": "Actualizar"}

        </button>



      </form>

      </div>
    )
  }
  
  export default AppForm
  