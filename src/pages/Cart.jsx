import React from 'react'
import { useGlobalContext } from "../context/product_context";
import EmptyCart from "../components/Cart/EmptyCart";
import CartColumn from "../components/Cart/CartColumn";
import CartList from "../components/Cart/CartList";
import CartTotals from "../components/Cart/CartTotal";
import Title from "../components/Title";

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length < 0) {
    return <EmptyCart/>
  };

  return (
    <section>
      <Title name="your" title="cart" />
      <CartColumn />
      <CartList />
      <CartTotals />
    </section>
  );
}

export default Cart
