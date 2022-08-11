import { render } from "@testing-library/react";
import React from "react";
import item from "./factories/item";

const Catalog = (props) => {
    const {catalog, addToCart} = props;
    console.log(addToCart)

    function createDisplay(item)
    {
        return (
            <div key={item.id} id={item.id}>
                <img></img>
                <div className="name">{item.name}</div>
                <div className="price">${item.price}</div>
                <button onClick={addToCart(item)}>Add to Cart</button>
            </div>
        )
    }

    return (
        <div id="catalog">
            Catalog!
            {catalog.map(item => 
                createDisplay(item)
            )}
        </div>
    )
}

export default Catalog;