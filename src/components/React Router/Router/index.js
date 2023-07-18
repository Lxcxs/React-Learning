import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/homePage";
import Login from "./pages/login";
import Sobre from "./pages/sobre";
import Header from "./components/header/header";
import NotFound from "./components/notFound";
import Produto from "./pages/Produto/produto";
import ProdutoDescricao from "./pages/Produto/produtoDescricao";
import ProdutoCustomizado from "./pages/Produto/produtoCustomizado";
import ProdutoAvaliacao from "./pages/Produto/produtoAvaliacao";


const RouterDom = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="login" element={<Login />} />
                {/* <Route path="produto/:id/*" element={<Produto />}> */}
                <Route path="produto/:id" element={<Produto />}>

                    <Route path="" element={<ProdutoDescricao />} />
                    <Route path="customizado" element={<ProdutoCustomizado />} />
                    <Route path="avaliacao" element={<ProdutoAvaliacao />} />

                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterDom