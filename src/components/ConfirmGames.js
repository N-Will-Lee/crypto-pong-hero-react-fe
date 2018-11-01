import React from 'react';



const ConfirmGames = (props) => {

    function sendAddressToGame()  {
        props.callUnconfirmedGame(props.myAddress);
    }

    return(
        <div class="newGame">
            <p>my address is: {props.myAddress}</p>
            <button type="button" onClick={sendAddressToGame}>look for games by me</button>

            
        </div>
    )
}









export default ConfirmGames