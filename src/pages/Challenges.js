import classes from '../components/Next.module.css';
import { Link } from 'react-scroll';
import Next from '../components/Next.js';
import Back from '../components/Back.js';
import challenges from '../Assets/challenges.png';
import './Page.css';

function Challenges() {
    return (
        <div className="challenges" id="challenges">
            <div className="image-c">
                <img src={challenges} alt="" className="challenges-img" />
            </div>
            <div className="text">
                <h2>CHALLENGE</h2>
                <p>You're planning a killer event and have spent months negotiating sponsorships, preparing speakers and getting permissions. You prepare everything only to have your Event Marketing get lost among memes on social media. </p>
                <div className="btns">
                <Link
                    activeClass="active"
                    to="mission"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Back />
                  </Link>
                  <Link
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Next />
                  </Link>
                    </div>
            </div>
        </div>
    )
}

export default Challenges;