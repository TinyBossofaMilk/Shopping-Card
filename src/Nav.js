import { render } from "@testing-library/react";
import React from "react";
import {Link} from "react-router-dom"

const Nav = (props) => {
    const {navLinks} = props;
    console.log(navLinks);
    return (
        <nav>
            Links here!
            {navLinks.forEach(link => {<Link>
                {link}
            </Link>})};
        </nav>
    )
}

export default Nav;