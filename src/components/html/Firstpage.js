import { ReactComponent as ReactLogo1 } from "../elements/red-element.svg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLongArrowAltDown,
} from "react-icons/fa";

function Firstpage() {
  return (
    <div>
      <section className="container1">
        <h1 className="title1">Hello There !</h1>
        <ReactLogo1 />
        <div className="card1">
          <h1 className="foto">FOTO</h1>
        </div>
        <div className="title2">
          <span className="t1">I'M</span>
          <span className="t2">DRAGOS</span>
          <span className="t3">BOSCAN</span>
          <div className="information">
            <div id="info1">
              <FaMapMarkerAlt className="map" />
              <p>Str. Teodor Mihali 59</p>
            </div>
            <div id="info2">
              <FaPhoneAlt className="phone" />
              <p>+373 68425320</p>
            </div>
            <div id="info3">
              <FaEnvelope className="envelope" />
              <p>dragos.boscan.tbs@gmail.com</p>
            </div>
            <div className="scroll">
              <p>SCROLL DOWN</p>
              <FaLongArrowAltDown className="icon5" size="17px" />
            </div>
          </div>
          <div className="icons">
            <a href="https://www.linkedin.com/" className="a-link">
              <FaLinkedin className="icon1" size="35px" />
            </a>
            <a href="https://github.com/" className="a-link">
              <FaGithubSquare className="icon2" size="35px" />
            </a>
            <a href="https://www.facebook.com/" className="a-link">
              <FaFacebookSquare className="icon3" size="35px" />
            </a>
            <a href="https://twitter.com/?lang=en" className="a-link">
              <FaTwitterSquare className="icon4" size="35px" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Firstpage;
