// import classes from '../components/Next.module.css';
import { Link } from 'react-scroll';
import './Page.css'
import features from '../Assets/features.svg';
import Next from '../components/Next.js';
import Back from '../components/Back.js';
import FeatureBox from '../components/FeatureBox.js';
function Features(){
    return(
        <div className="features" id="features">
            <div className="text">
                <h2>FEATURES</h2>
                <FeatureBox />
                <div className="btns">
                <Link
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Back />
                  </Link>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Next />
                  </Link>
                </div>
            </div>
            <div className="image">
                <img src={features} alt="" className="image-features" />
            </div>
        </div>
    )
}

export default Features;