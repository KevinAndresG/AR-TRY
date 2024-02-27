import vid from "./assets/vid.mp4";
import logo from "./assets/logo_si.jpg";
import us from "./assets/grupo.png";
import port from "./assets/portafolio.png";
import cont from "./assets/contact.svg";
import target from "./assets/targets.mind";
import uno from "./assets/1.jpg";
import dos from "./assets/2.png";
import tres from "./assets/3.jpg";
import cuatro from "./assets/4.png";
import cinco from "./assets/5.jpg";
import seis from "./assets/6.jpg";
import siete from "./assets/7.jpg";
import { useParams } from "react-router-dom";
import "./qr.scss";

const qrs = [uno, dos, tres, cuatro, cinco, seis, siete]
const QrsRoutes = () => {
  let {id} = useParams()
  const goToHome = ()=> {
    window.open('https://sinapsis.global/', '_blank');
  }
  const goToUs = ()=> {
    window.open('https://sinapsis.global/nosotros', '_blank');
  }
  const goToPortfolio = ()=> {
    window.open('https://sinapsis.global/portafolio', '_blank');
  }
  const goToContact = ()=> {
    window.open('https://sinapsis.global/contacto', '_blank');
  }
  return (
    <div>
      <div id="example-scanning-overlay" className="hidden">
        <img src={logo} alt="" />
        <p>Scanning...</p>
      </div>
          <a-scene
            mindar-image={`uiScanning: #example-scanning-overlay; imageTargetSrc: ${target}; filterMinCF: 0.01; filterBeta: 15; missTolerance: 5`}
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
                <img id="logo" src={logo}/>
                <img id="us" className="UsLogo" src={us}/>
                <img id="portfolio" src={port}/>
                <img id="contact" src={cont}/>
            </a-assets>

            <a-camera
              position="0 0 0"
              look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"
            ></a-camera>
            <a-entity id="mytarget" mytarget="" mindar-image-target="targetIndex: 0">
              <a-plane
                src="#card"
                position="-1 0.5 0"
                height="0.5"
                width="1"
                rotation="0 0 0"
              ></a-plane>
              <a-image
                visible="true"
                id="logo"
                class="clickable"
                src="#logo"
                position="-1.4 0.10 0"
                height="0.1"
                width="0.1"
                material=""
                geometry=""
                onClick={goToHome}
                animation="property: scale; to: 1.5 1.5 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"></a-image>
                <a-image
                visible="true"
                id="us"
                class="clickable"
                src="#us"
                position="-1.1 0.10 0"
                height="0.1"
                width="0.1"
                material=""
                geometry=""
                onClick={goToUs}
                animation="property: scale; to: 1.5 1.5 1.2; dur: 1100; easing: easeInOutQuad; loop: true; dir: alternate"
                color={'red'}></a-image>
              <a-image
                visible="true"
                id="portfolio"
                class="clickable"
                src="#portfolio"
                position="-0.9 0.10 0"
                height="0.1"
                width="0.1"
                material=""
                geometry=""
                onClick={goToPortfolio}
                animation="property: scale; to: 1.5 1.5 1.2; dur: 1200; easing: easeInOutQuad; loop: true; dir: alternate"></a-image>
              <a-image
                visible="true"
                id="contact"
                class="clickable"
                src="#contact"
                position="-0.6 0.10 0"
                height="0.1"
                width="0.1"
                material=""
                geometry=""
                onClick={goToContact}
                animation="property: scale; to: 1.5 1.5 1.2; dur: 1300; easing: easeInOutQuad; loop: true; dir: alternate"></a-image>
            </a-entity>
          </a-scene>
        </div>
  )
}

export default QrsRoutes