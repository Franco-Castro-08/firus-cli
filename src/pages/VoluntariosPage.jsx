import React, { useState } from 'react'
import axios from 'axios'
import './Voluntarios.css'

export const VoluntariosPage = () => {
 
  const [nombre, setNombre] = useState()
  const [tipo, setTipo] = useState()
  const [direccion, setDireccion] = useState()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('/create', {nombre, tipo, direccion})
      .then(res => {console.log(res)})
      .catch(err => console.log(err))

      alert("Formulario enviado correctamente");
      window.location.reload();
  }
/*
axios.post('/create')
.then(res => {console.log(res)})
.catch(err => console.log(err))
*/

  return (
    <>
    <h2 className='title'>VoluntariosPage</h2>
  
    <div className='formulario'>
    <form onSubmit={handleSubmit}>
      <div>
         <label>Nombre</label>
         <input type='text' placeholder='Ingresar nombre' 
         className='form-control' onChange={(e)=> setNombre(e.target.value)}/>
      </div>
   
      <div>
         <label>Tipo</label>
         <input type='text' placeholder='Ingresar tipo' 
         className='form-control' onChange={(e)=> setTipo(e.target.value)}/>
      </div>
      
      <div>
         <label>Dirección</label>
         <input type='text' placeholder='Ingresar dirección'
          className='form-control' onChange={(e)=> setDireccion(e.target.value)}/>
      </div>

      <div class='btn-vol'>
      <button className='btn btn-success'>Enviar</button>
      </div>

    </form>
    </div>
  </>
  )
}
