import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../pages/Home";
import ItemDetailPage from "../pages/ItemDetailPage";
import Error404 from "../pages/Error404";
import Cart from "../pages/Cart";

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/category/:categoryId' element={<Home/>} />
                    <Route path='/item/:id' element={<ItemDetailPage/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Route>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default SiteRoutes
