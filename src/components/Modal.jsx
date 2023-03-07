import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from "../context/product_context";
import { ButtonContainer } from './Button';
import { Link } from "react-router-dom";

const Modal = () => {
  const { modalProduct, modalOpen, closeModal } = useGlobalContext();
  const { img, title, price } = modalProduct;

  return (
    <ModalContainer>
      <article  className={`${modalOpen ? "modal_product" : "hide"}`}>
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize" id="modal">
              <h5>item added to cart</h5>
              <img src={img} alt="" className="img-fluid" />
              <h5>{title}</h5>
              <h5 className="text-muted">price : ${price}</h5>
              <Link to='/'>
                <ButtonContainer onClick={closeModal}>
                  continue shopping
                </ButtonContainer>
              </Link>
              <Link to='/cart'
                onClick={() => {
                  closeModal()
                }}>
                <ButtonContainer cart>
                  Go To Cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
        </article>
    </ModalContainer>
  )
};

const ModalContainer = styled.article`
  align-items: center;
  .modal_product{
  position: fixed;
  top: 0;
  left:0;
  right:0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items:center;
  transition: all .3s linear;
  transform: scale(1);
}
#modal {
  background: var(--mainWhite);
}
.hide {
  overflow:hidden;
  visibility: hidden;
  opacity:0;
  transition: all .3s linear;
  transform:scale(0);
}
`;

export default Modal
