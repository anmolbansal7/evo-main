import classes from './Social.css';
import { MdEmail} from "react-icons/md";
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function SocialIcons(){
    return(
        <div className="social">
            <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <MdEmail size="2em"/>
                </a>
            </span>
            <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <FaInstagram size="2em"/>
                </a>
            </span>
            <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <FaTwitter size="2em"/>
                </a>
            </span>
            <span className="icon">
                <a href="mailto: ios@vit.ac.in" target="_blank">
                <FaLinkedinIn size="2em"/>
                </a>
            </span>
        </div>
    );
}

export default SocialIcons;