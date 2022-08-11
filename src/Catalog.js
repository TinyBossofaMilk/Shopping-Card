import { render } from "@testing-library/react";
import React from "react";

const Catalog = (props) => {
    const {catalog} = props;

    function createDisplay (item)
    {
        return (
            <div id={item.id}>
                <img></img>
                <div className="name">{item.name}</div>
                <button>Add to Cart</button>
            </div>
        )
    }

    return (
        <div id="catalog">
            Catalog!
        </div>
    )
}

export default Catalog;