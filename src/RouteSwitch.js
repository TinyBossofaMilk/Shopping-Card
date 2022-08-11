import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Catalog from "./Catalog";
import Cart from "./Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/ShoppingCart" element={<Cart/>}/>
                <Route path="/Catalog" element={<Catalog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

{/* <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} /> */}