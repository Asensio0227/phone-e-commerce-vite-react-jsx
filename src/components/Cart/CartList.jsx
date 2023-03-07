import React from 'react'
import CartItem from './CartItem';
import { useGlobalContext } from '../../context/product_context'; 

const CartList = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="container=fluid">
      {
        cart.map((item) => {
          return <CartItem key={item.id} item={item}/>
        })
      }
    </div>
  )
}

export default CartList
