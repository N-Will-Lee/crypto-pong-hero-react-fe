import React from 'react';



const IndividualGame = (props) => {
    
    let myAddress = props.creatorWalletAddress.substring(0,5);
    console.log(myAddress);

    let oppAddress = props.opponentWalletAddress.substring(0,5);
    console.log(oppAddress);

    let winner = props.winner.substring(0,5);
    console.log(winner);

    let crScore = Number(JSON.stringify(props.creatorScore).substring(1,JSON.stringify(props.creatorScore).length - 1));
    console.log(crScore);
    
    
    let oppScore = Number(JSON.stringify(props.opponentScore).substring(1,JSON.stringify(props.opponentScore).length - 1));
    console.log("props.opponentScore.length ", JSON.stringify(props.opponentScore).length)
    console.log(oppScore);

    let wager = Number(JSON.stringify(props.wager).substring(1,2));
    console.log(wager);

    let time = Number(JSON.stringify(props.time).substring(1,11));
    console.log(time);

    let confirmed = JSON.stringify(props.confirmed);
    console.log(confirmed);




    return(
        <tr>
            <td> {myAddress}</td>
            <td> {oppAddress}</td>
            <td> {winner}</td>
            <td> {crScore}</td>
            <td> {oppScore}</td>
            <td> {wager}</td>
            <td> {time}</td>
            <td> {confirmed}</td>
        </tr>

    )
}









export default IndividualGame

