import React from 'react';



const PlayerRank = (props) => {
    
    // let myAddress = props.creatorWalletAddress.substring(0,5);
    // let myAddress = props.myAddress.substring(0,5);
    // console.log(myAddress);

    // let oppAddress = props.opponentWalletAddress;

    // function getOpponentAddress()  {
    //     let oppAddress = props.opponentWalletAddress;
    //     // console.log("incomming opponentWalletAddress: ", props.opponentWalletAddress)
    //     if(props.myAddress === props.opponentWalletAddress)   {
    //         oppAddress = props.creatorWalletAddress;
    //     }
    //     return oppAddress.substring(0,5);
    // }

    // let winnerAddress = props.winner.substring(0,5);
    // function winnerName()   {
    //     if(winnerAddress === myAddress) {
    //         return "Me";
    //     }
    //     if(winnerAddress === getOpponentAddress()) {
    //         return "Opponent";
    //     }
    // }

    // let crScore = Number(JSON.stringify(props.creatorScore).substring(1,JSON.stringify(props.creatorScore).length - 1));
    // console.log(crScore);
    
    
    // let oppScore = Number(JSON.stringify(props.opponentScore).substring(1,JSON.stringify(props.opponentScore).length - 1));
    // console.log("props.opponentScore.length ", JSON.stringify(props.opponentScore).length)
    // console.log(oppScore);

    // let weiWager = Number(JSON.stringify(props.wager).substring(1, JSON.stringify(props.wager).length-1));
    // let wager = window.web3.fromWei(weiWager, 'ether');

    // let time = Number(JSON.stringify(props.time).substring(1,11));
    // console.log(time);

    // let date = props.timeConverter(time);

    // let confirmed = JSON.stringify(props.confirmed);
    // console.log(confirmed);

    // let gameId = Number(JSON.stringify(props.gameId).substring(1,JSON.stringify(props.gameId).length - 1))

    console.log("key is: ", props.key)
    let rank = props.i + 1;
    return(
        <tr>
            
            <td>{rank}</td>
            <td>{props.user[0]}</td>
            <td>{props.user[1]}</td>
            <td>{props.user[2]}</td>
            <td>{props.user[3]}</td>
            <td>{props.user[4]}</td>
        </tr>

    )
}









export default PlayerRank

