import classes from './Social.css';
import { MdEmail } from "react-icons/md";

function SocialIcons(){
    return(
        <div className="social">
            <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <MdEmail />
                </a>
            </span>
            
        </div>
    );
}

export default SocialIcons;