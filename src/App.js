import { ReactComponent as ReactLogo1 } from "./components/elements/red-element.svg";
import { ReactComponent as ReactLogo2 } from "./components/elements/web-development.svg";
import { ReactComponent as ReactLogo3 } from "./components/elements/data-analysis.svg";
import { ReactComponent as ReactLogo4 } from "./components/elements/information-systems.svg";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLongArrowAltDown,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#" id="home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      {/* First Page */}
      <div className="container1">
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
            <a href="https://www.linkedin.com/" id="a-link">
              <FaLinkedin className="icon1" size="35px" />
            </a>
            <a href="https://github.com/" id="a-link">
              <FaGithubSquare className="icon2" size="35px" />
            </a>
            <a href="https://www.facebook.com/" id="a-link">
              <FaFacebookSquare className="icon3" size="35px" />
            </a>
            <a href="https://twitter.com/?lang=en" id="a-link">
              <FaTwitterSquare className="icon4" size="35px" />
            </a>
          </div>
        </div>
      </div>
      {/* Second Page */}
      <div className="container2" id="about">
        <div className="card2">
          <h1 className="foto">FOTO</h1>
        </div>
        <p className="title3">About Me</p>
        <p className="info-me">
          Student with a Bachelor degree in Economics and pursuing a Master
          Degree in Information Systems and Data Analytics. Trained in
          implementing analysis using phython, Power BI, MySQL and web
          development with .NET Framework while implementing feauters such as
          GRPC, API, SignalR using C#, JavaScript, HTML, CSS.
        </p>
        <button class="download-btn">Download CV</button>
      </div>
      {/* Third Page */}
      <div className="container3" id="skills">
        <p className="title4">Skills & Performance</p>
        <FaChevronCircleLeft className="icon6" size="40px" />
        <ReactLogo2 className="logo1" />
        <div className="card3">
          <h1 className="info">INFO</h1>
        </div>
        <ReactLogo3 className="logo2" />
        <div className="card3">
          <h1 className="info">INFO</h1>
        </div>
        <ReactLogo4 className="logo3" />
        <div className="card3">
          <h1 className="info">INFO</h1>
        </div>
        <FaChevronCircleRight className="icon6" size="40px" />
      </div>
      {/* Forth Page */}
      <div className="container4" id="portfolio">
        <p className="title5">Latest Projects</p>
        <div className="card4">
          <h1 className="project">PROJECT</h1>
        </div>
        <div className="card4">
          <h1 className="project">PROJECT</h1>
        </div>
        <div className="card4">
          <h1 className="project">PROJECT</h1>
        </div>
      </div>
      {/* Fifth Page */}
      <div className="container5" id="contact">
        <p className="title6">Let's Talk</p>
        <p className="title-name">Name</p>
        <input className="input-field1" placeholder="Your name"></input>
        <p className="title-mail">Email</p>
        <input className="input-field2" placeholder="Your email adress"></input>
        <p className="title-message">Message</p>
        <textarea
          className="input-field3"
          rows="3"
          placeholder="Enter your message"
        ></textarea>
        <button class="submit-btn">Submit</button>
        <div className="card5">
          <h1 className="foto">FOTO</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
