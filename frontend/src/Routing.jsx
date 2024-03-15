import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";

function Routing() {
    return(
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                </Routes>
           </BrowserRouter>
        </>
    );
}

export default Routing;