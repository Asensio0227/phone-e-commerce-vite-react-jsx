import React from 'react'
// import PayPalButton from "./PayPalButton";
import { Link} from "react-router-dom";
import { useGlobalContext } from "../../context/product_context";
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';

const client_ID = import.meta.env.VITE_APP_PAYPAL_CLIENT_ID;

const CartTotal = () => {
  const {
    cartSubTotal,
    cartTax,
    cartTotal,
    cart,
    clearCart
  } = useGlobalContext();
  const emptyCart = cart.length === 0 ? true : false;

  return (
    <>
      {
        !emptyCart && (
          <div className="container">
            <div className="row">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                  <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                    type='button'
                    onClick={clearCart}
                  >
                    clearCart
                  </button>
                </Link>
                <h5>
                  <span className="text-title">
                    subtotal :
                  </span> {" "}
                  <strong>$ {cartSubTotal}</strong>
                </h5>
                <h5>
                  <span className="text-title">
                    tax :
                  </span> {" "}
                  <strong>$ {cartTax}</strong>
                </h5>
                <h5>
                  <span className="text-title">
                    total :
                  </span> {" "}
                  <strong>$ {cartTotal}</strong>
                </h5>
                <PayPalScriptProvider
                  options={{
                    "client-id":client_ID,
                     components: "buttons",
                    currency: "USD"
                }}
                >
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: cartTotal
                            }
                          }
                        ]
                      })
                    }}
                    onApprove={(data, actions) => {
                      return actions.order.capture().then(function (details) {
                        alert("Transation completed by " + details.payer.name.given_name)
                      })
                    }}
                    currency={"USD"}
                  />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        )
      }
    </>
  )
}

export default CartTotal
