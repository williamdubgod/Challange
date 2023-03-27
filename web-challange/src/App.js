import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Error from "./components/Error";
import Simulacoes from "./components/Simulacoes";
import Ipo from "./components/Ipo";
import Login from "./components/Login";
import Cadastro from "./components/Cadastro";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/simulacoes" element={<Simulacoes/>}/>
                <Route path="/ipo" element={<Ipo/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}