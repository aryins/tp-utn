import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { QuienesSomos } from "../views/QuienesSomos"
import { NotFound } from "../views/NotFound"
import { Registro } from "../views/Registro"
import { Login } from "../views/Login"
import { ProtectedRoute } from "../components/ProtectedRoute"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export {RouterApp}