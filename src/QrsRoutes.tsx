import vid from "./assets/vid.mp4";
import logo from "./assets/logo_si.jpg";
import logo2 from "./assets/logo_si2.jpg";
import sinapsis from "./assets/sinapsis.svg";
import instagram from "./assets/instagram.svg";
import newTargets from "./assets/newTargets.mind";
import uno from "./assets/1.jpg";
import dos from "./assets/2.png";
import tres from "./assets/3.jpg";
import cuatro from "./assets/4.png";
import cinco from "./assets/5.jpg";
import seis from "./assets/6.jpg";
import siete from "./assets/7.jpg";
import { useParams } from "react-router-dom";
import "./qr.scss";
import { useState } from "react";

const qrs = [uno, dos, tres, cuatro, cinco, seis, siete];
const QrsRoutes = () => {
  const [switchLogo, setSwitchLogo] = useState(0);
  let { id } = useParams();
  const goToHome = () => {
    window.open("https://sinapsis.global/", "_blank");
  };
  const goToInsta = () => {
    window.open("https://www.instagram.com/sinapsis.global/", "_blank");
  };
  let n = 0;
  while (n < 5) {
    n += 1;
    setTimeout(() => {
      if (switchLogo === 0) {
        setSwitchLogo(1);
      } else if (switchLogo === 1) {
        setSwitchLogo(0);
      }
      return;
    }, 6000);
  }
  return (
    <div>
      <div id="example-scanning-overlay" className="hidden">
        {switchLogo === 0 ? (
          <img src={logo} alt="" />
        ) : (
          <img src={logo2} alt="" />
        )}
        <p>Scanning...</p>
      </div>
      <a-scene
        mindar-image={`uiScanning: #example-scanning-overlay; imageTargetSrc: ${newTargets}; filterMinCF: 0.01; filterBeta: 15; missTolerance: 5`}
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        renderer="colorManagement: true, physicallyCorrectLights"
      >
        <a-assets>
          {id ? (
            <img id="card" src={qrs[Number(id) - 1]} alt="" />
          ) : (
            <video id="card" loop autoPlay controls={true} src={vid} />
          )}
          <img id="logo" src={sinapsis} />
          <img id="instagram" className="UsLogo" src={instagram} />
          <a-asset-item
            id="raccoonModel"
            src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.5/examples/image-tracking/assets/band-example/raccoon/scene.gltf"
          ></a-asset-item>
        </a-assets>
        <a-camera
          position="0 0 0"
          look-controls="enabled: false"
          cursor="fuse: false; rayOrigin: mouse;"
          raycaster="far: 10000; objects: .clickable"
        ></a-camera>
        <a-entity mindar-image-target="targetIndex: 0">
          <a-image
            src="#card"
            position="-1 0.5 0"
            height="1"
            width="1"
            rotation="0 0 0"
          ></a-image>
          <a-image
            visible="true"
            id="logo"
            class="clickable"
            src="#logo"
            position="-1.2 -0.2 0"
            height="0.15"
            width="0.15"
            material=""
            geometry=""
            onClick={goToHome}
          ></a-image>
          <a-image
            visible="true"
            id="instagram"
            class="clickable"
            src="#instagram"
            position="-0.8 -0.2 0"
            height="0.2"
            width="0.2"
            material=""
            geometry=""
            onClick={goToInsta}
          ></a-image>
        </a-entity>
        <a-entity mindar-image-target="targetIndex: 1">
          <a-gltf-model
            rotation="90 0 0 "
            position="-1 0 0"
            scale="0.05 0.05 0.05"
            src="#raccoonModel"
            animation-mixer
          />
          {/* <a-image
            visible="true"
            id="logo"
            class="clickable"
            src="#logo"
            position="-1.2 -0.2 0"
            height="0.15"
            width="0.15"
            material=""
            geometry=""
            onClick={goToHome}
          ></a-image>
          <a-image
            visible="true"
            id="instagram"
            class="clickable"
            src="#instagram"
            position="-0.8 -0.2 0"
            height="0.2"
            width="0.2"
            material=""
            geometry=""
            onClick={goToInsta}
          ></a-image> */}
        </a-entity>
      </a-scene>
    </div>
  );
};

export default QrsRoutes;
