import React from 'react';
import IndividualGame from "./IndividualGame";
import { Table } from "reactstrap";


const ConfirmGames = (props) => {
    
    let myAddress = props.myAddress;
    let myUnconfirmedGames = [];
    let orderedUnconfirmedGames = [];

    function getMyUnconfirmedGames() {
        myUnconfirmedGames = [];
        for (let i=0; i<props.allGames.length; i++) {
            if(props.allGames[i][1] === myAddress && props.allGames[i][7] === false)  {
                myUnconfirmedGames.push(props.allGames[i]);
                // console.log("props.allGames.length", props.allGames.length)
                // console.log("props of allGames[i]", props.allGames[i])
            }
        }
        orderedUnconfirmedGames = myUnconfirmedGames.sort(compare);
        // console.log("sorted unconfirmed games: ", orderedUnconfirmedGames)
        // console.log("unordered unconfirmed games: ", myUnconfirmedGames)
    }

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

    getMyUnconfirmedGames();

    const createList = orderedUnconfirmedGames.map((type, i) =>  {
        return  (
            <IndividualGame 
                key={i}
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
        <div className="confirmGames">
            <h3>Confirm Games</h3>
            <Table dark>
                <thead>
                    <tr>
                        <th>me</th>
                        <th>opponent</th>
                        <th>winner</th>
                        <th>score</th>
                        {/* <th>their score</th> */}
                        <th>wager (eth)</th>
                        <th>time</th>
                        <th>confirm</th>
                    </tr>
                </thead>
                <tbody>
                    {createList}
                </tbody>
            </Table>
        </div>
    )
}

export default ConfirmGames