import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCart } from '../reducers/cart/cartSlice';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const dispatch = useDispatch();
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));
  
   return (
    <>
      <Link className='btn btn-info mx-2' to='/dashboard'>Dash</Link>
      <table className='table'>
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Precio</th>
                <th scope='col'>Tipo</th>
            </tr>
        </thead>
        <tbody>
            {productsList.map(product => {
             return(
                <tr key={product.id}>
                    <th scope='row'>{product.id}</th>
                    <th scope='row'>{product.nombre}</th>
                    <th scope='row'>{product.precio}</th>
                    <th scope='row'>{product.tipos}</th>
                    <th scope='row'>
                     <button className='btn btn-danger' onClick={() => handleRemoveProduct(product.id)}>
                        Delete 
                     </button>
                    </th>
                </tr>
                )
            })}
        </tbody>
      </table>
    </>
  )
}
