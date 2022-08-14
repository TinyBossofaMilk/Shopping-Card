import { render } from "@testing-library/react";
import React from "react";
import {Link} from "react-router-dom"

const Nav = (props) => {
    // const {navLinks} = props;
    // console.log(navLinks);
    return (
        <nav id="nav">
            Links here!
            {/* <Link to="about">About</Link> */}
            <Link to="shop" >Shop</Link>
            <Link to="cart">Cart</Link>
        </nav>
    )
}

export default Nav;