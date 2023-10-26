import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/about.jsx";
import Home from "./components/home.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <nav className="nav-bar">
              <h1>#VANLIFE</h1>
              <div className="links-to">
                <Link to='/about' className="link">About</Link>
                <Link to='/' className="link">Vans</Link>
              </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
