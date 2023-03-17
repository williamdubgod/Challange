import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Error from "./components/Error";

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
       </BrowserRouter>
        </>
    )
}