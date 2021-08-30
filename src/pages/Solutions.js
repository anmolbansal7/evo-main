import classes from '../components/Next.module.css';
import { Link } from 'react-scroll';
import solutions from '../Assets/solutions.png';
import './Page.css';
import Next from '../components/Next.js';
import Back from '../components/Back.js';

function Solutions(){
    return(
        <div className="solutions" id="solutions">
            <div className="text">
                <h2>SOLUTIONS</h2>
                <p>Evo helps one explore the best of the Events enabling 
                    a full-fledged social experience with like-minded people.
                    Evo solves pain points associated with promotions, 
                    like spam ignores and less reach, without sacrificing the club’s value. <br />
                    This app exclusively focuses on making it accessible 
                    for users to search for an event of their interest.
               </p>
                <div className="btns">
                <Link
                    activeClass="active"
                    to="challenges"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Back />
                  </Link>
                  <Link
                    activeClass="active"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                      <Next />
                  </Link>
                </div>
            </div>

            <div className="image-s">
                <img src={solutions} alt="" className="image-solutions"/>
            </div>
        </div>
    )
}

export default Solutions;