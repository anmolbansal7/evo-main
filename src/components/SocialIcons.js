import classes from './Social.css';
import { MdEmail} from "react-icons/md";
import { FaInstagram, FaTwitter} from 'react-icons/fa';

function SocialIcons(){
    return(
        <div className="social">
            <span className="icon">
                <a href="mailto: evoappin@gmail.com">
                <MdEmail size="2em"/>
                </a>
            </span>
            <span className="icon">
                <a href="https://instagram.com/evo.app.in/" target="_blank" rel="noreferrer">
                <FaInstagram size="2em"/>
                </a>
            </span>
            <span className="icon">
                <a href="https://twitter.com/EvoAppIn" target="_blank" rel="noreferrer">
                <FaTwitter size="2em"/>
                </a>
            </span>
            {/* <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <FaLinkedinIn size="2em"/>
                </a>
            </span> */}
        </div>
    );
}

export default SocialIcons;