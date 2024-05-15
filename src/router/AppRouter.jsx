import { Route, Routes } from "react-router-dom"
//import { Navbar } from "../components/Navbar/Navbar"
import { Adoption, Cart, Dashboard, HomePage, Login, PerdidosPage, VoluntariosPage } from "../pages"
import { Layout } from "../components/Layout"


//<Route path='/' element={<Navbar />}> </Route>  
//<Route index element= {<HomePage />}/>     
//<Route path='voluntarios' element={<VoluntaryPage />} />

export const AppRouter = () => {
  return (
    <>
    
    <Routes>

      <Route path="/" element={<Layout />}> 
      <Route index element= {<HomePage />}/> 
      <Route path="perdidos" element={<PerdidosPage />}/>
      <Route path="adopcion" element={<Adoption />} /> 
      <Route path="voluntarios" element={<VoluntariosPage/>}/> 
      <Route path="dashboard" element={<Dashboard />}/>

      <Route path="login" element={<Login />}/>
      <Route path="cart" element={<Cart />}/>
      </Route>

    </Routes>   

    </>
    )
}