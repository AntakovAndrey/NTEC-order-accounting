import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";

function Routing() {
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="*"/>
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Routing;