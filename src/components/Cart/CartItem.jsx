import React from 'react'
import { 
  useGlobalContext
} from '../../context/product_context';
import { FaTrash } from "react-icons/fa"
import { ButtonContainer } from '../Button';

const CartItem = ({ item }) => {
  const { id, title, img, price, total, count } = item;
  const { removeCart,toggleAmount } = useGlobalContext();

  return (
    <article className="row my-1 text-capitalize text-center">
      <div className='col-10 mx-auto col-lg-2'>
        <img 
          src={img}
          style={{width: "5rem" ,height:"5rem"}}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>
        <span className="d-lg-none">price : </span> ${price}
        </strong>
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={()=>toggleAmount(id,'dec')}
            >
              -
            </span>
            <span
            className="btn btn-black mx-1"
            >
              {count}
            </span>
            <span
              className="btn btn-black mx-1"
              onClick={()=>toggleAmount(id,'inc')}
            >
              +
            </span>
        </div>
        </div> 
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="cart-icon" onClick={() => removeCart(id)}>
          <FaTrash/>
        </span>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total}</strong>
      </div>
    </article>
  )
};

export default CartItem
