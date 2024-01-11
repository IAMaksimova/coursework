import React from 'react';
import './App.css';
import {GlobalStyle} from "./styles/GlobalStyle";
import {HomePage} from "./pages/home/HomePage";
import {Menu} from "./components/Menu";
import {Footer} from "./layout/Footer";
import {Route, Routes} from "react-router-dom";
import {Films} from "./pages/films/Films";
import {Directors} from "./pages/directors/Directors";
import {Contact} from "./pages/contact/Contact";

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Menu/>
        <Routes>
            <Route element={<HomePage/>} path={'/'}/>
            <Route element={<Films/>} path={'films'}/>
            <Route element={<Directors/>} path={'directors'}/>
            <Route element={<Contact/>} path={'contact'}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
