import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"
import Catalog from "./Shop";
import Cart from "./Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/Catalog" element={<Catalog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;

{/* <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} /> */}