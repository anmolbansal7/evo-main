import classes from '../components/Next.module.css';
import './Page.css'
import features from '../Assets/features.png';
import Next from '../components/Next.js';
import Back from '../components/Back.js';
function Features(){
    return(
        <div className="features" id="features">
            <div className="text">
                <h2>FEATURES</h2>
            </div>
            <div className="image">
                <img src={features} alt="" className="image-features" />
            </div>
        </div>
    )
}

export default Features;