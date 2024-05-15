import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { unsetUser } from '../../reducers/user/userSlice';
import { FaUserCircle } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

   const user = useSelector(state => state.user);

    const handleLogout = () => {
      dispatch(unsetUser());
      navigate("/");
  };

  return (
    <>
      <header>
        
        <h1>
        <Link to='/'>Firus    </Link>   
        <GiDogHouse />
        </h1>

        {
          user?.logged? (
         
          <div className='user'>  
          <button className='btn-logout' onClick={handleLogout}>Log Out</button>
          </div>

        ) : (
        <nav>

           <nav className='inicio'>
            <Link to='/perdidos'>Perdidos</Link> 
            <Link to='/adopcion'>Adopción</Link> 
            <Link to='/voluntarios'>Voluntarios</Link> 
            </nav> 

            <ul>
            <Link to='/login'><FaUserCircle /></Link> 
            </ul> 
        </nav>
        )
      
       }
         <hr/>
      
      </header> 
    </>
  )
}