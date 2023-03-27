import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.scss'
import './prod-footerstyle.scss'
import './prod-globalstyle.scss'
import './prod-headerstyle.scss'
import './prod-style.scss'
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { Prod } from "./pages/Prod";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <div className="container">
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/prod' element={<Prod/>} />
      </Routes>
     </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
