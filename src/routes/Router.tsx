import { Route, Routes } from "react-router-dom"
import App from "../App"
import QrsRoutes from "./QrsRoutes"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/qr" element={<QrsRoutes />}/>
        <Route path="/qr/:id" element={<QrsRoutes />}/>
    </Routes>
  )
}

export default Router