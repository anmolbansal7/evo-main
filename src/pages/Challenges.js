import classes from '../components/Next.module.css';
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
                <h2>CHALLENGES</h2>
                <p>You're planning a killer event and have spent months negotiating sponsorships, preparing speakers and getting permissions. You prepare everything only to have your Event Marketing get lost among memes on social media. </p>
                <div className="btns">
                        <Back></Back>
                        <Next></Next>
                    </div>
            </div>
        </div>
    )
}

export default Challenges;