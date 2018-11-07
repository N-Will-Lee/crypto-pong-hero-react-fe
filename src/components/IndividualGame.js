import React from 'react';
import { Button } from 'reactstrap';



const IndividualGame = (props) => {
    
    // let myAddress = props.creatorWalletAddress.substring(0,5);
    let myAddress = props.opponentWalletAddress.substring(0,5);
    // console.log(myAddress);

    // let oppAddress = props.opponentWalletAddress.substring(0,5);
    let oppAddress = props.creatorWalletAddress.substring(0,5);
    // console.log(oppAddress);

    let winnerAddress = props.winner.substring(0,5);
    function winnerName()   {
        if(winnerAddress === myAddress) {
            return "Me";
        }
        if(winnerAddress === oppAddress) {
            return "Opponent";
        }
    }

    // console.log(winner);

    // let crScore = Number(JSON.stringify(props.creatorScore).substring(1,JSON.stringify(props.creatorScore).length - 1));
    let oppScore = Number(JSON.stringify(props.creatorScore).substring(1,JSON.stringify(props.creatorScore).length - 1));

    // console.log(crScore);
    
    
    // let oppScore = Number(JSON.stringify(props.opponentScore).substring(1,JSON.stringify(props.opponentScore).length - 1));
    let crScore = Number(JSON.stringify(props.opponentScore).substring(1,JSON.stringify(props.opponentScore).length - 1));
    // console.log("props.opponentScore.length ", JSON.stringify(props.opponentScore).length)
    // console.log(oppScore);

    let weiWager = Number(JSON.stringify(props.wager).substring(1, JSON.stringify(props.wager).length-1));
    let wager = window.web3.fromWei(weiWager, 'ether');
    // console.log("wager hopefully decimal is: ",wager);

    let time = Number(JSON.stringify(props.time).substring(1,11));
    // console.log(time);

    let date = props.timeConverter(time);

    let confirmed = JSON.stringify(props.confirmed);
    // console.log(confirmed);

    // let gameId = Number(JSON.stringify(props.gameId).substring(1,JSON.stringify(props.gameId).length - 1))
    let gameId = Number(JSON.stringify(props.gameId))

    function handleGameConfirmation()  {
        props.handleConfirmGame(gameId)
        // console.log("gameId going into app.js function is: ", gameId)
        // console.log("stringify props.gameId coming into function is: ", JSON.stringify(props.gameId))
    }


    return(

        // <tr>
        //     <th scope="row">1</th>
        //     <td>Mark</td>
        //     <td>Otto</td>
        //     <td>@mdo</td>
        // </tr>
        <tr>
            <th> {myAddress}</th>
            <td> {oppAddress}</td>
            <td> {winnerName()}</td>
            <td> {crScore}</td>
            <td> {oppScore}</td>
            <td> {wager}</td>
            <td> {date}</td>
            <td>  <Button color="success" type="button" onClick={handleGameConfirmation}>Confirm</Button>{' '}</td>
            {/* <button type="button" onClick={handleGameConfirmation}>confirm</button></td> */}
        </tr>

    )
}









export default IndividualGame

