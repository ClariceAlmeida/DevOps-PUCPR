import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cadastro from "./pages/Cadastro";

const ProjectRoutes = () => {
   return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Login} />
                <Route path='/cadastro' Component={Cadastro} />
                <Route path='/home' Component={Home} />
                <Route path='*' Component={NotFound} />
            </Routes>
        </BrowserRouter>
   )
}

export default ProjectRoutes