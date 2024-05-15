import React, { useEffect, useState } from 'react'
//import UploadService from '../services/upload.service'
import '../assets/styles/Upload.css'
import axios from 'axios';


const Upload = () => {  //const Upload = ({setImages, images}) 
  
    const [ file, setFile ] = useState();
    const [ perros, setPerro ] = useState([]);  //const [ image, setImage ] = useState();


    const handleUpload = (e) => {
     // console.log(file);
     
      const formdata = new FormData()
      formdata.append('file', file)
      axios.post('http://localhost:4000/upload', formdata)
      .then(res => console.log(res))   // res => console.log(res)
      .catch(err => console.log(err)) 

      alert("Imagen enviada correctamente");
      window.location.reload();
    }
   
    //axios.get('http://localhost:4000/getImage')
     // .then(res => setImage(res.data[1].image))
      //  console.log(res.data)
      // setImage(res.data);
    useEffect(() => {
      axios.get('/getImage')
      .then(perros => setPerro(perros.data))
      .catch(err => console.log(err))  
    }, [])

    return (
    <>
        <div class="container p-4">
        
          <div >
           <div >
            <div class='btn-exa'>
            <input 
                type='file' class="btn btn-success" onChange={e => setFile(e.target.files[0])}
            />
            </div>
           </div>

           <div class='btn-1'>
           <button type="submit" class="btn  btn-success" onClick={handleUpload}>Enviar</button>
           </div>

          </div>
         
        </div>
       
        <br/>

        <div className='row-2'>
          {
            perros.map( perro => (   
              <div className='perdidos'> {/* className='mascota' */}
                 <div key={perro._id}>
                    <div col-md-4>    
                     <div class="card_body"> {/* class="card-body" */}
                       <img src={perro.image} class="card_img_top" alt=''/> {/* class="card-img-top" */}
                     </div>
                     </div> 
                 </div>
               </div>  
            ))
           }
         </div>  

       
    </>   
  )
}

export default Upload;