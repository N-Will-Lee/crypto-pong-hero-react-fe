import React from 'react';
import ProfileGame from "./ProfileGame";


const Profile = (props) => {
    
    let myAddress = props.myAddress;
    let myUnconfirmedGames = [];

    function getMyConfirmedGames() {
        myUnconfirmedGames = [];
        for (let i=0; i<props.allGames.length; i++) {
            if(props.allGames[i][0] === myAddress || props.allGames[i][1] === myAddress && props.allGames[i][7] === true)  {
                myUnconfirmedGames.push(props.allGames[i]);
                console.log("all games for profile list: ", myUnconfirmedGames)
                console.log("props.allgames is: ", props.allGames)
            }
        }
    }

    getMyConfirmedGames();

    const createList = myUnconfirmedGames.map((type, i) =>  {
        return  (
            <ProfileGame 
                creatorWalletAddress={myUnconfirmedGames[i][0]}
                opponentWalletAddress={myUnconfirmedGames[i][1]}
                winner={myUnconfirmedGames[i][2]}
                creatorScore={myUnconfirmedGames[i][3]}
                opponentScore={myUnconfirmedGames[i][4]}
                wager={myUnconfirmedGames[i][5]}
                time={myUnconfirmedGames[i][6]}
                confirmed={myUnconfirmedGames[i][7]}
                gameId={myUnconfirmedGames[i][8]}
                handleConfirmGame={props.handleConfirmGame}
                timeConverter={props.timeConverter}  
            />
        )
    })

    return(

        <div className="newGame">
            <p>
                <h1>My Confirmed Games</h1>
            </p>
            <tr>
                <td>me</td>
                <td>opponent</td>
                <td>winner</td>
                <td>my score</td>
                <td>their score</td>
                <td>wager</td>
                <td>time</td>
                <td>confirm</td>
            </tr>
            {createList}
        </div>
    )
}

export default Profile