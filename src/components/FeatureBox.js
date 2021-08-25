import classes from "./Feature.css";
import {useState} from 'react';
import Clubs from './Clubs';
import Users from "./Users";

function FeatureBox(){
    const [usersOpen, setUsersOpen] = useState(false);

    function handler() {
        setUsersOpen(true);
    }
    function handler1() {
        setUsersOpen(false);
    }
    return(
        <div>
            <div className="switch">
                <h3 className={usersOpen ? "title" : "active"}  onClick={handler1}>Clubs</h3>
                <h3 className={usersOpen ? "active" : "title"} onClick={handler}>Users</h3>
            </div>
            { usersOpen ? <Users /> : <Clubs />}
        </div>
    );
}

export default FeatureBox;