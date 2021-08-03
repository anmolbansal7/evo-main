import classes from './Navbar.module.css';

function Navbar(props){
    return(
        <div className={classes.main}>
            <ul className={classes.nav}>
                <li><a href="#">HOME</a></li>
                <div className={classes.vl}></div>
                <li><a href="#">MISSION</a></li>
                <div className={classes.vl}></div>
                <li><a href="#">CHALLENGE</a></li>
                <div className={classes.vl}></div>
                <li><a href="#">SOLUTIONS</a></li>
                <div className={classes.vl}></div>
                <li><a href="#">FEATURES</a></li>
                <div className={classes.vl}></div>
                <li><a href="#">CONTACT US</a></li>
            </ul>
    </div>
    )
}

export default Navbar;