import React, { Component } from 'react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class LiveGame extends Component {
    constructor (props) {
        super (props);
        
        // const CryptoPongHero = window.web3.eth.contract ([
        //   {
        //     "constant": false,
        //     "inputs": [
        //       {
        //         "name": "_gameId",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "_confirmGame",
        //     "outputs": [],
        //     "payable": true,
        //     "stateMutability": "payable",
        //     "type": "function"
        //   },
        //   {
        //     "constant": false,
        //     "inputs": [
        //       {
        //         "name": "_walletAddress",
        //         "type": "address"
        //       },
        //       {
        //         "name": "_userName",
        //         "type": "string"
        //       }
        //     ],
        //     "name": "_createUser",
        //     "outputs": [],
        //     "payable": false,
        //     "stateMutability": "nonpayable",
        //     "type": "function"
        //   },
        //   {
        //     "constant": false,
        //     "inputs": [
        //       {
        //         "name": "_cr",
        //         "type": "address"
        //       },
        //       {
        //         "name": "_opp",
        //         "type": "address"
        //       },
        //       {
        //         "name": "_winner",
        //         "type": "address"
        //       },
        //       {
        //         "name": "_crScore",
        //         "type": "uint8"
        //       },
        //       {
        //         "name": "_oppScore",
        //         "type": "uint8"
        //       },
        //       {
        //         "name": "_wager",
        //         "type": "uint256"
        //       },
        //       {
        //         "name": "_time",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "_finish",
        //     "outputs": [],
        //     "payable": true,
        //     "stateMutability": "payable",
        //     "type": "function"
        //   },
        //   {
        //     "constant": true,
        //     "inputs": [
        //       {
        //         "name": "",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "gamesPlayed",
        //     "outputs": [
        //       {
        //         "name": "creator",
        //         "type": "address"
        //       },
        //       {
        //         "name": "opponent",
        //         "type": "address"
        //       },
        //       {
        //         "name": "winner",
        //         "type": "address"
        //       },
        //       {
        //         "name": "op1Score",
        //         "type": "uint8"
        //       },
        //       {
        //         "name": "op2Score",
        //         "type": "uint8"
        //       },
        //       {
        //         "name": "wager",
        //         "type": "uint256"
        //       },
        //       {
        //         "name": "timeStamp",
        //         "type": "uint256"
        //       },
        //       {
        //         "name": "complete",
        //         "type": "bool"
        //       }
        //     ],
        //     "payable": false,
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "constant": true,
        //     "inputs": [
        //       {
        //         "name": "",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "userIdToAddress",
        //     "outputs": [
        //       {
        //         "name": "",
        //         "type": "address"
        //       }
        //     ],
        //     "payable": false,
        //     "stateMutability": "view",
        //     "type": "function"
        //   },
        //   {
        //     "constant": true,
        //     "inputs": [
        //       {
        //         "name": "",
        //         "type": "uint256"
        //       }
        //     ],
        //     "name": "users",
        //     "outputs": [
        //       {
        //         "name": "id",
        //         "type": "address"
        //       },
        //       {
        //         "name": "userName",
        //         "type": "string"
        //       },
        //       {
        //         "name": "wins",
        //         "type": "uint32"
        //       },
        //       {
        //         "name": "losses",
        //         "type": "uint32"
        //       }
        //     ],
        //     "payable": false,
        //     "stateMutability": "view",
        //     "type": "function"
        //   }
        // ]);
      
        this.state = {
            // ContractInstance: CryptoPongHero.at ('0xBE7898cBC2A204a4064744399935bF5e28f00Bba'),
            // creatorScore: 0,
            // oppScore: 0,
            // wager: this.props.wager,
            // winner: ""
        }
        // this.submitGame = this.submitGame.bind (this);
        // this.declareCreatorWinner = this.declareCreatorWinner.bind (this);
        // this.declareOpponentWinner = this.declareOpponentWinner.bind (this);
      }

    // submitGame(event)  {
    //   event.preventDefault();
    //   const { _finish } = this.state.ContractInstance;
    //   _finish(
    //     this.props.myAddress,
    //     this.props.oppWalletAddress,
    //     this.state.winner,
    //     this.state.creatorScore,
    //     this.state.oppScore,
    //     this.state.wager,
    //     1541029968,
    //     {
    //       gas: 3000000,
    //       from: window.web3.eth.accounts[0],
    //       value: window.web3.toWei (this.state.wager, 'ether')
    //     },
    //     (err, result) =>  {
    //       console.log("game is being submitted to the blockchain" + JSON.stringify(result));
    //     }
    //   );
    // }

    // declareCreatorWinner()  {
    //   this.setState({
    //     winner: window.web3.eth.accounts[0]
    //   })
    // }
    // declareOpponentWinner()  {
    //   this.setState({
    //     winner: this.props.oppWalletAddress
    //   });
    // }

    render() {
        return(
          <div>
            <form className="newGame" onSubmit={this.props.submitGame}>
                <p> Create a new Game!</p>
                <label>My Wallet Address: {this.props.myAddress}</label>
                <br/>
                <label htmlFor="opponent">Opponent Wallet Address: {this.props.oppWalletAddress}</label>
                <br />
                <label htmlFor="wager">Wager Amount (eth): {this.props.wager}</label>
                <br />
                <label htmlFor="homeScore">Home Score:  </label>
                <input type="text" name="homeScore" onChange={event => this.props.setCreatorScore(event.target.value)}/>
                <br />
                <label htmlFor="oppScore">Opponent Score:  </label>
                <input type="text" name="oppScore" onChange={event => this.props.setOppScore(event.target.value)}/>
                <br/>
                <label htmlFor="winner">winner: {this.props.winner} </label>
                <br/>
                <button type="button" onClick={this.props.declareCreatorWinner}>Home Team won!</button>
                <button type="button" onClick={this.props.declareOpponentWinner}>Away Team won!</button>
                <br/>
    
                <input type="submit" name="submit" value="Submit Results" />
            </form>
          </div> 
        )
    }
}

{/* <input type="text" name="wager" onChange={event => this.props.setWager(event.target.value)}/> */}

export default LiveGame



{/* <input type="text" name="oppScore" value={this.state.oppScore} onChange={event => this.setState({oppScore: event.target.value})}/> */}

{/* <input type="text" name="homeScore" value={this.state.creatorScore} onChange={event => this.setState({creatorScore: event.target.value})}/> */}





