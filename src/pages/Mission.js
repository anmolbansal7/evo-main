import classes from '../components/Next.module.css';
import missions from '../Assets/missions.png';
import './Page.css';
import { Link } from 'react-scroll';

import Next from '../components/Next.js';
import Back from '../components/Back.js';

function Mission() {
    // const bg=require('../Assets/bg.png');
    return (
            <div className="mission" id="mission">
                <div className="text">
                <h2>MISSION</h2>
                <h3>Find your niche at VIT</h3>
                <p>
                Our organization aims at bringing all the events from VIT's clubs right to your fingertips where you can not only view the details and timeliness but also register for any event.
                </p> 
                <div className="btns">
                    <Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Back />
                  </Link>
                  <Link
                    activeClass="active"
                    to="challenges"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Next />
                  </Link>
                    </div>
                </div>
                <div className="image">
                    <img src={missions} alt="" className="mission-img"/>
                </div>
            </div>
    )
}

export default Mission;