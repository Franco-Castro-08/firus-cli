import { useSelector } from 'react-redux';
import axios from 'axios'

//import { unsetUser } from '../reducers/user/userSlice';
import { Link } from 'react-router-dom';

import { ProductList } from '../components/ProductList';
import { useEffect, useState } from 'react';

export const Dashboard = () => {

//    const dispatch = useDispatch();
//    const navigate = useNavigate();

    const [ products, setProducts ] = useState([]);

    const user = useSelector(state => state.user);

    useEffect(() => {
     axios.get("http://localhost:3000/products")
     .then(response => {
       setProducts(response.data);
     })
    }, [])

/*
    const handleLogout = () => {
        dispatch(unsetUser());
        navigate("/");
    }; */

  return (
    <>
      <div className='container'>
      <Link className='btn btn-info mx-2' to='/cart'>Cart</Link>  
      <Link className='btn btn-info mx-2' to='/dashboard'>Dash</Link> 
    { /* <button className='btn btn-primary' onClick={handleLogout}>Log out</button> */}
      </div>
     <p>Welcome {user.fullName} / {user.email}</p>
     
     <hr/>
     <ProductList products={products} />
    </>
  )
}