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
    <section className="container1" id="home">
      <div className="title2">
        <div className="red-element">
          <h1 className="title1">Hello There !</h1>
          <ReactLogo1 />
          <ul className="titles">
            <li className="t1">I'M</li>
            <li className="t2">OPLSAC</li>
            <li className="t3">NMJKSU</li>
          </ul>
        </div>
        <div className="information">
          <div id="info1">
            <FaMapMarkerAlt className="map" />
            <p>Str. Loskdm Mkdmsd 59</p>
          </div>
          <div id="info2">
            <FaPhoneAlt className="phone" />
            <p>+999 03938476</p>
          </div>
          <div id="info3">
            <FaEnvelope className="envelope" />
            <p>gjkffd.vjkfgn.nfc@gmail.com</p>
          </div>
        </div>
        <ul className="icons">
          <li className="icon-link">
            <a href="https://www.linkedin.com/">
              <FaLinkedin className="icon1" size="35px" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://github.com/">
              <FaGithubSquare className="icon2" size="35px" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://www.facebook.com/">
              <FaFacebookSquare className="icon3" size="35px" />
            </a>
          </li>
          <li className="icon-link">
            <a href="https://twitter.com/?lang=en">
              <FaTwitterSquare className="icon4" size="35px" />
            </a>
          </li>
        </ul>
      </div>
      <div className="container22">
        <div className="card1">
          <h1 className="foto">FOTO</h1>
        </div>
        <div className="scroll">
          <p>SCROLL DOWN</p>
          <FaLongArrowAltDown className="icon5" size="17px" />
        </div>
      </div>
    </section>
  );
}

export default Firstpage;
