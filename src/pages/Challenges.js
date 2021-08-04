import classes from '../components/Next.module.css';
import Next from '../components/Next.js';
import Back from '../components/Back.js';
import challenges from '../Assets/challenges.png';
import './Page.css';

function Challenges() {
    return (
        <div className={classes.box} id="challenges">
            <div className="challenges-left">
                <img src={challenges} alt="" className="c-img" />
            </div>
            <div className="challenges-right">
                <h2>CHALLENGES</h2>
                <p>You're planning a killer event and have spent months negotiating sponsorships, preparing speakers and getting permissions. You prepare everything only to have your Event Marketing get lost among memes on social media. </p>
                <Back></Back>
                <Next></Next>
            
            </div>
        </div>
    )
}

export default Challenges;