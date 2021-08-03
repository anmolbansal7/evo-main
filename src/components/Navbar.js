import { Link } from 'react-scroll';

import classes from './Navbar.module.css';

function Navbar(props){
    return(
        <div className={classes.main}>
            <ul className={classes.nav}>
                <div className={classes.vl1}></div>
                <li><Link
                    activeClass="active"
                    to="landing"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >HOME</Link></li>
            <div className={classes.vl}></div>
                <li><Link
                    activeClass="active"
                    to="mission"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >MISSION</Link></li>
            <div className={classes.vl}></div>
                <li><Link
                    activeClass="active"
                    to="challenges"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >CHALLENGES</Link></li>
            <div className={classes.vl}></div>
                <li><Link
                    activeClass="active"
                    to="solutions"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >SOLUTIONS</Link></li>
            <div className={classes.vl}></div>
                <li><Link
                    activeClass="active"
                    to="features"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >FEATURES</Link></li>
            <div className={classes.vl}></div>
                <li><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >CONTACT US</Link></li>
            <div className={classes.vl1}></div>  
            </ul>
    </div>
    )
}

export default Navbar;