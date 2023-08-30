// import classes from '../components/Next.module.css';
import "./Page.css";
import { Link } from "react-scroll";
import Next from "../components/Next.js";
// import Mission from './Mission.js';
import icon from "../Assets/icon.svg";

function Landing() {
    return (
        <div className="landing" id="landing">
            <div className="text">
                <img src={icon} alt="" className="logo" />
                <h2>EVO</h2>
                <h3>Events Promotions Reimagined</h3>
                <p>
                    Are you tired of the same old event strategies?
                    <br />
                    Check out Evo for an entirely new experience when it comes
                    to scheduling your next big shindig.
                </p>
             
                <button className="send" onClick={()=>{window.location.href = 'https://anmolbansal7.github.io/evo-admin/'}}>Go to Admin Portal</button>

                <div className="btns">
                    <Link
                        activeClass="active"
                        to="mission"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        <Next />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Landing;
