import React from 'react';
import IndividualGame from "./IndividualGame";


const ConfirmGames = (props) => {
    let myAddress = props.myAddress;
    
    function renderGameHistory() {
        console.log(props.getAllGamesOfAddress(myAddress))
    }


    return(
        <div className="newGame">
            <p>my address is: {props.myAddress}</p>
            {/* {renderGameHistory}  */}
            <button type="button" onClick={renderGameHistory}>show all games including me</button>

            
        </div>
    )
}









export default ConfirmGames

