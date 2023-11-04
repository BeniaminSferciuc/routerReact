import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/about.jsx";
import Home from "./components/Home/home.jsx";
import Vans from "./components/Vans/vans.jsx";
import VanDetail from "./components/VanDetail/VanDetail.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Dashboard from "./components/Host/Dashboard/Dashboard.jsx";
import Income from "./components/Host/Income/Income.jsx";
import Reviews from "./components/Host/Reviews/Reviews.jsx";
import HostLayout from "./components/Host/Host.jsx";
import HostVans from "./components/Host/Vans/Vans.jsx";
import HostVansDetail from "./components/Host/VansDetail/VansDetail.jsx";
import Details from "./components/Host/VansDetail/Details/Details.jsx";
import Photos from "./components/Host/VansDetail/Photos.jsx";
import Price from "./components/Host/VansDetail/Price.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetail />} />

                    <Route path="host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans/:id" element={<HostVansDetail />}>
                            <Route index element={<Details />} />
                            <Route path="price" element={<Price />} />
                            <Route path="photos" element={<Photos />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
