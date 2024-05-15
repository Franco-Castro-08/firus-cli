import React from 'react'
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'


export const ProductList = ({ products }) => {
 
   const dispatch = useDispatch(); 

   const { productsList } = useSelector(state => state.cart);

   const handleAddOrRemoveProduct = (productId) => {

    const product = products.find(product => product.id === productId);
    dispatch(addProductToCart(product));
     if(productsList.find(pdt => pdt.id === productId)){
            dispatch(removeProductFromCart(productId));
     }else{
           dispatch(addProductToCart(product));
     } 
   }

  return (
    <>
      <h2>Listado de producto</h2>

      <div className='row'>
        {
          products.map(product => {
            return (
                <div key={product.id} className='col-3 mt-3'>
                   <h4>{product.nombre}</h4>
                    <p><b>Precio</b> {product.precio}</p>
                    <p><b>Tipo</b> {product.tipos}</p>
                    <img src={product.url} alt=''/>
                     <button className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger":"btn-success"}`}
                      onClick={() => handleAddOrRemoveProduct(product.id)}> 
                       {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"}  to cart
                    </button> 
                </div>
            ) 
          })
        }
      </div>
    </>
  )
} 