import { useEffect, useState } from 'react'
import axios from 'axios'
import './ListaMascota.css';

export const ListaMascota = () => {

  const[dataimages, setdataimages]=useState([])


   useEffect(() => {
    axios.get('api/image/mascotas').then(res => {
      console.log(res.data) 
      setdataimages(res.data)
    }).catch(err =>{
      console.log(err)
    })
   }, [])

  return (
    <>

      <div className="row">
           {         
           dataimages.map( image => 
             (    
              
              <div className='mascota'>

                 <div key={image._id}>
                    
                    <div col-md-4>           

                        <div class="card-body">

                         <img src={image.path} class="card-img-top" alt=''/>
                         <h2 class="card-name">{image.title}</h2>
                         
                         <div class="descripcion">

                          <h3 class="desc"> Raza:
                          <h4 class="card-desc"> {image.raza} </h4>
                          </h3>

                          <h3 class="desc"> Sexo:
                          <h4 class="card-desc"> {image.sexo} </h4>
                          </h3>

                          <h3 class="desc"> Edad: 
                          <h4 class="card-desc"> {image.edad} </h4>
                          </h3>

                         </div>


                        </div>
                          
                    </div> 
                 </div>
                 </div> 
              )
            ) 
          }
           
           </div>

    </>
  )
}