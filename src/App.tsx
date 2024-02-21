import "./App.css";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()
  const nav = () => {
    console.log("Click");
    navigate("qr")
  }
  return (
    <>
      <button onClick={nav}> Activar Camara </button>
    </>
  );
}

export default App;
