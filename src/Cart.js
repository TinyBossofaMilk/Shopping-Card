import { render } from "@testing-library/react";
import React from "react";

const Cart = (props) => {
    const {cart, addItemtoCart} = props;

    return (
        <div>
            Cart!

            {cart.map((item) => {
                <div>{item.name}</div>
                // <div>Quantity: {item.name}</div>
            })}
        </div>
    )
}

export default Cart;