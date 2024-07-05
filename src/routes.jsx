import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuemSomos from './pages/QuemSomos'
import Inicio from './pages/Inicio'
import NossosProjetos from './pages/NossosProjetos'
import GrupoSimios1 from './pages/GrupoSimios'

export default function AppRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Inicio /> }></Route>
        <Route path="/quem-somos" element={ <QuemSomos /> }></Route>
        <Route path="/nossos-projetos" element={ <NossosProjetos /> }></Route>
        <Route path="/grupo-simios" element={ <GrupoSimios1 /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}