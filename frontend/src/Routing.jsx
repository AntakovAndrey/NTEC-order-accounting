import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ClientPage from "./pages/ClientPage/ClientPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import AdminPanelPage from "./pages/AdminPanelPage/AdminPanelPage";

function Routing() {
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/client/:id" element={<ClientPage/>}/>
                    <Route path="/order/:id" element={<OrderPage/>}/>
                    <Route path="admin" element={<AdminPanelPage/>}/>
                    <Route path="*"/>
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Routing;