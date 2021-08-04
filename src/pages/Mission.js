import classes from '../components/Next.module.css';
import missions from '../Assets/missions.png';
import './Page.css';

import Next from '../components/Next.js';
import Back from '../components/Back.js';

function Mission() {
    const bg=require('../Assets/bg.png');
    return (
        <div className={classes.box} id="mission">
            <div className="mission-left">
                <h2>MISSION</h2>
                <h3>Tagline</h3>
                <p>Our organization aims at bringing all the events from VIT's clubs right to your fingertips where you can not only view the details and timeliness but also register for any event.</p>

                <span>
                    <Back></Back>
                    <Next></Next>
                </span>
            </div>

            <div className="mission-right">
                <img src={missions} alt="" className="mission-img"/>
            </div>
        </div>
    )
}

export default Mission;