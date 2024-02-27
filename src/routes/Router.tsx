import { Navigate, Route, Routes, useParams } from "react-router-dom"
import App from "../App"
import QrsRoutes from "../QrsRoutes"

const Router = () => {
  let {id} = useParams()
  return (
    <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/qr" element={ id ? <Navigate to={`/qrNew`} /> : <QrsRoutes />}/>
        <Route path="/qr/:id" element={<QrsRoutes />}/>
        <Route path="/qrNew" element={<QrsRoutes />}/>
    </Routes>
  )
}

export default Router