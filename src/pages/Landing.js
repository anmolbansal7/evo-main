// import classes from '../components/Next.module.css';
import './Page.css'
import Next from '../components/Next.js';

function Landing() {
    return (
            <div className="home" id="landing">
                <h2>EVO</h2>
                <h3>Events Promotions Reimagined</h3>
                <p>Are you tired of the same old event strategies? 
                    <br />
                    Check out Evo for an entirely new experience when it comes to scheduling your next big shindig.</p>

                <Next></Next>
                
            </div>
    )
}

export default Landing;