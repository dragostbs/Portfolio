import { ReactComponent as ReactLogo2 } from "../elements/web-development.svg";
import { ReactComponent as ReactLogo3 } from "../elements/data-analysis.svg";
import { ReactComponent as ReactLogo4 } from "../elements/information-systems.svg";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Thirdpage() {
  return (
    <div>
      <section className="container3" id="skills">
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
      </section>
    </div>
  );
}

export default Thirdpage;
