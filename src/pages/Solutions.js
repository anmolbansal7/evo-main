import classes from '../components/Next.module.css';
import solutions from '../Assets/solutions.png';
import './Page.css';
import Next from '../components/Next.js';
import Back from '../components/Back.js';

function Solutions(){
    return(
        <div className="solutions" id="solutions">
            <div className="text">
                <h2>SOLUTIONS</h2>
                <p>Evo helps one explore the best of the Events enabling a full-fledged social experience with like-minded people.
                    <br /><br />
                Evo solves pain points associated with Promotions, like spam ignores and less reach, without sacrificing the club’s value.
                <br /><br />
                This app exclusively focuses on ...,</p>
                <div className="btns">
                        <Back></Back>
                        <Next></Next>
                </div>
            </div>

            <div className="image-s">
                <img src={solutions} alt="" className="image-solutions"/>
            </div>
        </div>
    )
}

export default Solutions;