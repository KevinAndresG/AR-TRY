import "./App.css";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { useState } from "react";
import vid from "./assets/vid.mp4";
import logo from "./assets/logo.svg";
import target from "./assets/targets.mind";
import { useParams } from "react-router-dom";
import uno from "./assets/1.jpg";
import dos from "./assets/2.png";
import tres from "./assets/3.jpg";
import cuatro from "./assets/4.png";
import cinco from "./assets/5.jpg";
import seis from "./assets/6.jpg";
import siete from "./assets/7.jpg";

const qrs = [uno, dos, tres, cuatro, cinco, seis, siete]

function App() {
  const [m, setM] = useState(false);
  let {id} = useParams()
  Number(id);
  console.log("This Is  id:", id ? id : "Sin Id")
  return (
    <>
    {!m && (
      <button
        onClick={() => {
          setM(!m);
        }}
      >
        Activar Camara
      </button>
      )
    }
      {m && (
        <>
          <a-scene
            mindar-image={`imageTargetSrc: ${target}; filterMinCF: 0.01; filterBeta: 15; missTolerance: 5`}
            color-space="sRGB"
            renderer="colorManagement: true, physicallyCorrectLights"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
          >
            <a-assets>
              {id ? (
                <img id="card" src={qrs[Number(id) - 1]} alt="" />
              ) : (
              <video
                id="card"
                loop
                autoPlay
                controls={true}
                src={vid}
              />
              )}
                <img id="logo" src={logo} alt=""/>
            </a-assets>

            <a-camera
              position="0 0 0"
              look-controls="enabled: true"
            ></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
              <a-plane
                src="#card"
                position="-1 0.5 0"
                height="0.5"
                width="1"
                rotation="0 0 0"
              ></a-plane>
              <a-plane
                src="#logo"
                position="-1 0.15 0"
                height="0.1"
                width="0.5"
                rotation="0 0 0"
              ></a-plane>
            </a-entity>
          </a-scene>
        </>
      )}
    </>
  );
}

export default App;
