import { render } from "@testing-library/react";
import React from "react";

const Cart = (props) => {
    const {cart} = props;

    return (
        <div>
            Cart!

            {cart.map((item) => {
                <div>
                    <div>{item.name}</div>
                    <div>Quantity: {item.qty}</div>
                    {/* <button onClick={removeItem}>Remove Item{item.qty}</button> */}
                </div>
            })}
        </div>
    )
}

export default Cart;