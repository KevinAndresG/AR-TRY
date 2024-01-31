import "./App.css";
import "aframe";
import "mind-ar/dist/mindar-image-aframe.prod.js";
import { useState } from "react";
import vid from "./assets/vid.mp4";
import target from "./assets/targets.mind";

function App() {
  const [m, setM] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setM(!m);
        }}
      >
        Activar Camara
      </button>
      {m && (
        <>
          <a-scene
            mindar-image={`imageTargetSrc: ${target};`}
            color-space="sRGB"
            renderer="colorManagement: true, physicallyCorrectLights"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
          >
            <a-assets>
              <video
                id="card"
                autoPlay
                controls={true}
                src={vid}
              />
            </a-assets>

            <a-camera
              position="0 0 0"
              look-controls="enabled: false"
            ></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
              <a-plane
                src="#card"
                position="0 0 0"
                height="0.5"
                width="1"
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
