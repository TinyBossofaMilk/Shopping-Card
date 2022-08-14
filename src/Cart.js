import { render } from "@testing-library/react";
import React from "react";

const Cart = (props) => {
    const {cart} = props;

    function createDisplay(e)
    {
        {/* // console.log(e) */}
        return (
            <div key={e.item.id} id={e.item.id}>
                <img></img>
                <div className="name">{e.item.name}</div>
                <div className="Quantity">{e.qty}</div>
                <div className="Total">${e.item.price*e.qty}</div>
            </div>
        )
    }

    return (
        <div id="cart">
            Cart!
            {cart.map(createDisplay)}
        </div>
    )
}

export default Cart;