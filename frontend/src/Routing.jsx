import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function Routing() {
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="*"/>
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Routing;