import React, { useState,useEffect, useContext, useReducer } from "react";
import { reduce } from '../reducer/product_reducer';
import { storeProducts, detailProduct } from "../data";

const ProductsContext = React.createContext();

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
}

const initialState = {
  products: [],
  detailProduct: detailProduct,
  cart: getLocalStorage(),
  modalOpen: false,
  modalProduct:detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

const ProductProvider = ({children}) => {
  const [state, dispatch] = useReducer(reduce, initialState);
  
  useEffect(() => {
    dispatch({type: "SET_PRODUCTS"})
  },[])

  const handleDetails = (id) => {
    dispatch({ type: "PRODUCT_DETAILS", payload: id });
  }

  const addToCart = (id) => {
    dispatch({ type: "ADD_TO_CART", payload: id })
  };
  
  const removeCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  const openModal = (id) => {
    dispatch({ type: "OPEN_MODAL", payload: id });
    console.log(state)
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL"});
  }

  // toggle amount
  const toggleAmount = (id, value) => {
    dispatch({ type: "TOGGLE_CART_ITEM_AMOUNT", payload: { id, value } });
  };
  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    dispatch({type: "COUNT_CART_TOTALS"})
  }, [state.cart])
  
  return (
    <ProductsContext.Provider value={{
      ...state,
      handleDetails,
      openModal,
      addToCart,
      closeModal,
      removeCart,
      clearCart,
      toggleAmount
    }}>
      {children}
    </ProductsContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(ProductsContext);
};

export { ProductProvider, ProductsContext };