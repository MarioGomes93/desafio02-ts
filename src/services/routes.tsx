import { useContext } from "react";
import { Route, Routes } from "react-router-dom"
import AppContext from "../components/AppContext";
import Conta from "../pages/Conta";
import ContaInfo from "../pages/ContaInfo";
import Home from "../pages/Home"
import Usuario from "../pages/Usuario";

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)
    return (
        <Routes>
            <Route path='/' element={ !isLoggedIn ? <Home /> : <Conta /> } />
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home /> } />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='/usuario' element={ isLoggedIn ?<Usuario /> : <Home />} />
        </Routes>
    )
}

export default MainRoutes;