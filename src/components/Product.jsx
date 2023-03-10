import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGlobalContext } from '../context/product_context';
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const { handleDetails,openModal,addToCart } = useGlobalContext();
  
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetails(id)}>
          <Link to="/details">
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              openModal(id)
              addToCart(id)
            }}
          >
            {
              inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in Cart
                </p>
              ) : (
                  <FaShoppingCart/>
              )
            }
          </button>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <p className="align-self-center mb-0">{title}</p>
        <h5 className="text-blue font-italic mb-0">
          <span className="mr-1">$</span>
          {price}
        </h5>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
.card {
  border-color: transparent;
  transition: all 1s linear;
}
.card-footer {
  background: transparent;
  border-top: transparent;
  transition: all 1s linear;
}
&:hover {
  .card {
    border: .04rem solid rgba(0,0,0,.2);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
  }
  .card-footer {
    background: rgba(247,257,247);
  }
}
.img-container {
  position: relative;
  overflow: hidden;
}
.card-img-top {
  transition: all 1s linear;
}
.img-container:hover .card-img-top {
  transform: scale(1.2);
}
.cart-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: .2rem .4rem;
  background: hsl(185,100%,19%);
  border: none;
  color: var(--mainWhite);
  font-size: 1.4rem;
  border-radius:.5rem 0 0 0;
  transform: translate(100%, 100%);
  transition: all 1s ease-in-out;
}
.img-container:hover .cart-btn {
  transform: translate(0,0);
}
.cart-btn:hover {
  color: var(--mainBlue);
  cursor: pointer;
} 
`;

export default Product
