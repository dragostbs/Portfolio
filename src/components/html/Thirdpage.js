import { ReactComponent as ReactLogo2 } from "../elements/web-development.svg";
import { ReactComponent as ReactLogo3 } from "../elements/data-analysis.svg";
import { ReactComponent as ReactLogo4 } from "../elements/information-systems.svg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Thirdpage() {
  return (
    <div>
      <div className="title4" id="skills">
        <p>Skills & Performance</p>
      </div>
      <section className="container3">
        <div>
          <FaChevronCircleLeft className="icon6" size="50px" />
        </div>
        <div className="for-logo">
          <ReactLogo2 className="logo1" />
          <div className="card3">
            <h1 className="info">INFO</h1>
          </div>
        </div>
        <div className="for-logo">
          <ReactLogo3 className="logo2" />
          <div className="card3">
            <h1 className="info">INFO</h1>
          </div>
        </div>
        <div className="for-logo">
          <ReactLogo4 className="logo3" />
          <div className="card3">
            <h1 className="info">INFO</h1>
          </div>
        </div>
        <div>
          <FaChevronCircleRight className="icon6" size="50px" />
        </div>
      </section>
    </div>
  );
}

export default Thirdpage;
