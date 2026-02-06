import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { QuienesSomos } from "../views/QuienesSomos"
import { NotFound } from "../views/NotFound"
import { Register } from "../views/Registro"
import { Login } from "../views/Login"
import { ProtectedRoute } from "../components/ProtectedRoute"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registrarme" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export {RouterApp}