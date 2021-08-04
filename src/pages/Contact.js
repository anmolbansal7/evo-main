import classes from '../components/Next.module.css';
import './Page.css';

import Back from '../components/Back.js';
function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="text">
                <h2>CONTACT US</h2>
                <p>Slide into our DMs for anything you wanna know</p>
                <Back></Back>
            </div>
            <div className="form">
                <input type="text" placeholder="Name"/><br></br>
                <input type="email" placeholder="Email"/><br></br>
                <input type="textarea" placeholder="Your Message" className="message"/><br></br>
                <button className="send">Send</button>
            </div>
        </div>
    )
}

export default Contact;