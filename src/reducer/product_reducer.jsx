import { storeProducts, detailProduct } from "../data";

export const reduce = (state, action) => {
  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      products: storeProducts
    }
  }
  if (action.type === "OPEN_MODAL") {
    const product = state.products.find(item => item.id === action.payload);
    
    return {
      ...state,
      modalOpen: true,
      modalProduct: product,
    };
  }
  if (action.type === "PRODUCT_DETAILS") {
    const product = state.products.find(item => item.id === action.payload);
    return {
      ...state,
      detailProduct: product
    }
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      modalOpen: false
    };
  }
  if (action.type === "ADD_TO_CART") {
    let tempProduct = [...state.products];
    const tempItem = state.products.find(item => item.id === action.payload);
    const index = tempProduct.indexOf(tempItem);
    const product = tempProduct[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    
    return {
      ...state,
      products: [...tempProduct],
      cart: [...state.cart, product],
      detailProduct: { ...product }
    }
  };
  if (action.type === "REMOVE_CART") {
    let tempProduct = [...state.products];
    let tempCart = [...state.cart];
    const product = state.products.find((venom) => venom.id === action.payload);

    const index = tempProduct.indexOf(product);
    let removeProduct = tempProduct[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    
    tempCart = tempCart.filter((venom) => venom.id !== action.payload);
    return {
      ...state,
      products: [...tempProduct],
      cart: [...tempCart]
    };
  }
  if (action.type === "CLEAR_CART") {
    
    return {
      ...state,
      products:[...state.products],
      cart:[]
    }
  }
  if (action.type === "TOGGLE_CART_ITEM_AMOUNT") {
    const { id, value } = action.payload;
    const tempCart = state.cart.map((item) => {
      if (item.id === id) {
        if (value === "inc") {
          let newAmount = item.count + 1;
          return {
            ...item,
            count: newAmount
          };
        }else {
          let newAmount = item.count - 1;
          if (newAmount < 1) {
            newAmount = 1;
          }
          return {
            ...item,
            count: newAmount
          };
        }
      }
      console.log(item);
      return item;
    })
    return {
      ...state,
      cart: tempCart
    }
  }
  if (action.type === "COUNT_CART_TOTALS") {
    let subTotal = 0;
    state.cart.map((item) => subTotal += item.price * item.count);

    const { cartTax, cartTotal, cartSubTotal } = state.cart.reduce((acc, curr) => { 
      const { price, count } = curr;
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      acc.cartTax = tax;
      acc.cartTotal = subTotal + tax

      return acc 
    }, {
      cartSubTotal:0,
      cartTax: 0,
      cartTotal: 0,
    })
    
    return {
      ...state,
      cartTax,
      cartTotal,
      cartSubTotal:subTotal
    }
  }
  // return state;
  throw new Error(`No Matching "${action.type}" - action type`)
};