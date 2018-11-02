import React from 'react';
import IndividualGame from "./IndividualGame";


const ConfirmGames = (props) => {
    
    let myAddress = props.myAddress;
    let myUnconfirmedGames = [];

    function getMyUnconfirmedGames() {
        myUnconfirmedGames = [];
        for (let i=0; i<props.allGames.length; i++) {
            if(props.allGames[i][0] === myAddress && props.allGames[i][7] === false)  {
                myUnconfirmedGames.push(props.allGames[i]);
                console.log("props of allGames[i]", props.allGames[i])
            }
        }
    }

    getMyUnconfirmedGames();

    const createList = myUnconfirmedGames.map((type, i) =>  {
        return  (
            <IndividualGame 
                creatorWalletAddress={myUnconfirmedGames[i][0]}
                opponentWalletAddress={myUnconfirmedGames[i][1]}
                winner={myUnconfirmedGames[i][2]}
                creatorScore={myUnconfirmedGames[i][3]}
                opponentScore={myUnconfirmedGames[i][4]}
                wager={myUnconfirmedGames[i][5]}
                time={myUnconfirmedGames[i][6]}
                confirmed={myUnconfirmedGames[i][7]}  
            />
        )
    })

    return(

        <div className="newGame">
            <p>my address is: {props.myAddress}</p>
            <tr>
                <td>me</td>
                <td>opponent</td>
                <td>winner</td>
                <td>my score</td>
                <td>their score</td>
                <td>wager</td>
                <td>time</td>
                <td>confirmed</td>
                <td>complete button here</td>
            </tr>
            {createList}
            <button type="button" onClick={createList}>show all games including me</button>
 
        </div>
    )
}

export default ConfirmGames