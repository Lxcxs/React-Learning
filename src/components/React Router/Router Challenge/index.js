import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Challenge.css'
import Produtos from "./components/Produtos";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";
import Produto from "./components/Produto";

const RouterChallenge = () => {

    return (
        <div className="RChallenge">
        <BrowserRouter>
            <Header />

            <div className="content">
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="contato" element={<Contato />} />
                    <Route path="produto/:id" element={<Produto />} />
                </Routes>
            </div>

            <Footer />
        </BrowserRouter>
        </div>
    )
}

export default RouterChallenge