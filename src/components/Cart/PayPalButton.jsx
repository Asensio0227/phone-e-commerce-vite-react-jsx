import { useEffect } from "react";
import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useGlobalContext } from "../../context/product_context";

const ButtonWrapper = ({ currency }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const { cartTotal } = useGlobalContext();
  
    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency]);

 
     return (<PayPalButtons
        fundingSource="paypal"
        style={{"layout":"vertical","label":"Purchase"}}
        disabled={false}
        createOrder={(data, actions) => {
            return actions.order
                .create({
                    purchase_units: [
                        {
                            amount: {
                                value: cartTotal,
                                breakdown: {
                                    item_total: {
                                        currency_code: "USD",
                                        value: cartTotal,
                                    },
                                },
                            },
                            items: [
                                {
                                    name: "Purchase",
                                    quantity: "1",
                                    unit_amount: {
                                        currency_code: "USD",
                                        value: cartTotal,
                                    },
                                    category: "Purchase",
                                },
                            ],
                        },
                    ],
                })
                .then(function (details) {
                        alert("Transation completed by " + details.payer.name.given_name)
                      }
                );
        }}
    />
     );
} 


export default ButtonWrapper 