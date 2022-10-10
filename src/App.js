import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ChooseSeatsPage from "./ChooseSeatsPage";
import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle";
import MoviesPage from "./MoviesPage";
import NavBar from "./NavBar";
import SessionPage from "./SessionPage";
import SuccessPage from "./SuccessPage";


export default function App() {
    

    return(
        <BrowserRouter>
            <GlobalStyle/>
            <NavBar/>
            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/sessoes/:idFilme" element={<SessionPage/>} />
                <Route path="/assentos/:idSessao" element={<ChooseSeatsPage />} />
                <Route path="/sucesso" render={(props) => <SuccessPage />} />
            </Routes>
                
        </BrowserRouter>
    )
};