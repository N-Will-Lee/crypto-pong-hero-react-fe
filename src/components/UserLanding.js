import React from 'react';
import CreateGame from './CreateGame';
import ConfirmGames from './ConfirmGames';
import { Router, Link } from "@reach/router";
import { render } from "react-dom";
import LiveGame from './LiveGame';



const UserLanding = (props) => {

    return(
        <div>
            <br/>
                <CreateGame myAddress={props.myAddress} />
                {/* <ConfirmGames /> */}
        </div>
    )
}









export default UserLanding