import classes from './Next.module.css';

function Back(props){
    return(
        <div className={classes.backbtn}>
        <div className={classes.btnp}>
            <p>BACK</p>
            </div>
            <div className={classes.sv}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z" stroke="white" stroke-width="2"/>
                <path d="M13.5 8L9.5 12L13.5 16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
    </div>
    )
}

export default Back;