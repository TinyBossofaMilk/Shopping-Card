import { render } from "@testing-library/react";
import React from "react";
import item from "./factories/item";

const Shop = (props) => {
    const {shop, addToCart} = props;

    function createDisplay(item)
    {
        return (
            <div key={item.id} id={item.id}>
                <img></img>
                <div className="name">{item.name}</div>
                <div className="price">${item.price}</div>
                <button onClick={(e) => {addToCart(e)}}>Add to Cart</button>
            </div>
        )
    }

    return (
        <div id="shop">
            shop!
            {shop.map(item => 
                createDisplay(item)
            )}
        </div>
    )
}

export default Shop;