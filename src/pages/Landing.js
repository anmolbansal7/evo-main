// import classes from '../components/Next.module.css';
import './Page.css'
import { Link } from 'react-scroll';
import Next from '../components/Next.js';
import Mission from './Mission.js';

function Landing() {
    return (
            <div className="landing" id="landing">
                <div className="text">
                <h2>EVO</h2>
                <h3>Events Promotions Reimagined</h3>
                <p>Are you tired of the same old event strategies? 
                    <br />
                    Check out Evo for an entirely new experience when it comes to scheduling your next big shindig.</p>
                
                <Link to={Mission}><Next></Next></Link>
                
                </div>
            </div>
    )
}

export default Landing;