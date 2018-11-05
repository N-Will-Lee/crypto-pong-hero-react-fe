import React from 'react';
import ProfileGame from "./ProfileGame";


const Profile = (props) => {
    
    let myAddress = props.myAddress;
    let myUnconfirmedGames = [];
    let orderedConfirmedGames =[];

    function compare(a, b) {
        const timeA = Number(JSON.stringify(a[6]).substring(1,11))
        const timeB = Number(JSON.stringify(b[6]).substring(1,11))
      
        let comparison = 0;
        if (timeA > timeB) {
          comparison = 1;
        } else if (timeA < timeB) {
          comparison = -1;
        }
        return comparison * -1;
      }

    function getMyConfirmedGames() {
        myUnconfirmedGames = [];
        for (let i=0; i<props.allGames.length; i++) {
            if((props.allGames[i][0] === myAddress || props.allGames[i][1] === myAddress) && props.allGames[i][7] === true)  {
                myUnconfirmedGames.push(props.allGames[i]);
                // console.log("all games for profile list: ", myUnconfirmedGames)
                // console.log("props.allgames is: ", props.allGames)
            }
        }
        orderedConfirmedGames = myUnconfirmedGames.sort(compare);
    }

    getMyConfirmedGames();

    const createList = orderedConfirmedGames.map((type, i) =>  {
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
                myAddress={props.myAddress}  
            />
        )
    })

    let winsLossesTotal = props.countWinsLossesTotal(myAddress);
    let wLRatio = Number.parseFloat(winsLossesTotal[0]/winsLossesTotal[1]).toFixed(2);
    

    return(

        <div className="newGame">
            <p>
                <h1>My Confirmed Games</h1>
            </p>
            <p>
                <h3>My Address: {props.myAddress}</h3>
            </p>
            <tr>
                <td>me</td>
                <td>opponent</td>
                <td>winner</td>
                <td>my score</td>
                <td>their score</td>
                <td>wager (ether)</td>
                <td>time</td>
            </tr>
            {createList}
            <br/>
            <br/>
            <h5>wins: {winsLossesTotal[0]}  Losses: {winsLossesTotal[1]}    W/L Ratio: {wLRatio}</h5>
        </div>
    )
}

export default Profile