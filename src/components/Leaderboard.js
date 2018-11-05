import React from 'react';
import PlayerRank from "./PlayerRank";



const Leaderboard = (props) => {

    function compare(a, b) {
        const ratioA = a[4];
        const ratioB = b[4];
      
        let comparison = 0;
        if (ratioA > ratioB) {
          comparison = 1;
        } else if (ratioA < ratioB) {
          comparison = -1;
        }
        return comparison * -1;
      }

    function getUserAddresses() {
        let userAddresses = [];
        let confirmedGames = props.getAllConfirmedGames()
        for (let i=0; i<confirmedGames.length; i++) {
            let firstAddressFound = false;
            let secondAddressFound = false;
            for (let j=0; j<userAddresses.length; j++)  {
                if(userAddresses[j] === confirmedGames[i][0]) {
                    firstAddressFound = true;
                }
                if(userAddresses[j] === confirmedGames[i][1]) {
                    secondAddressFound = true;
                }
            }
            if (firstAddressFound === false)    {
                userAddresses.push(confirmedGames[i][0])
            }
            if (secondAddressFound === false)   {
                userAddresses.push(confirmedGames[i][1])
            }
        }
        return userAddresses;
    }

    function buildLeaderboard() {
        let userRankings = [];
        let users = getUserAddresses();
        for (let i=0; i<users.length; i++)  {
            let userRanking = []
            userRanking.push(users[i]);
            let winsLossesTotal = props.countWinsLossesTotal(users[i])
            userRanking.push(winsLossesTotal[2]);
            userRanking.push(winsLossesTotal[0]);
            userRanking.push(winsLossesTotal[1]);
            let wLRatio = Number.parseFloat(winsLossesTotal[0]/winsLossesTotal[1]).toFixed(2);
            userRanking.push(wLRatio);

            userRankings.push(userRanking);
        }
        return userRankings  
    }
    
    let orderedUserRankings = buildLeaderboard().sort(compare);

    const createList = orderedUserRankings.map((type, i) =>  {
        return  (
            <PlayerRank 
                user={orderedUserRankings[i]} 
                i={i}
                myAddress={props.myAddress}
            />
        )
    })


    return(

        <div className="newGame">
            <p>
                <h1>LeaderBoard</h1>
            </p>
            <br/>
            <br/>
            <tr>
                <td>Rank</td>
                <td>Player</td>
                <td>Games Played</td>
                <td>Wins</td>
                <td>Losses</td>
                <td>Win/Loss Ratio</td>
            </tr>
            {createList}
            <br/>
            <br/>
        </div>
    )
}

export default Leaderboard