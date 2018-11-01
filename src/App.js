import React, { Component } from 'react';
import './App.css';
import CreateGame from './components/CreateGame';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import UserLanding from './components/UserLanding';
import LiveGame from './components/LiveGame';

class App extends Component {
  constructor (props) {
    super (props);

    const CryptoPongHero = window.web3.eth.contract ([
      {
        "constant": false,
        "inputs": [
          {
            "name": "_gameId",
            "type": "uint256"
          }
        ],
        "name": "_confirmGame",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_walletAddress",
            "type": "address"
          },
          {
            "name": "_userName",
            "type": "string"
          }
        ],
        "name": "_createUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_cr",
            "type": "address"
          },
          {
            "name": "_opp",
            "type": "address"
          },
          {
            "name": "_winner",
            "type": "address"
          },
          {
            "name": "_crScore",
            "type": "uint8"
          },
          {
            "name": "_oppScore",
            "type": "uint8"
          },
          {
            "name": "_wager",
            "type": "uint256"
          },
          {
            "name": "_time",
            "type": "uint256"
          }
        ],
        "name": "_finish",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "gamesPlayed",
        "outputs": [
          {
            "name": "creator",
            "type": "address"
          },
          {
            "name": "opponent",
            "type": "address"
          },
          {
            "name": "winner",
            "type": "address"
          },
          {
            "name": "op1Score",
            "type": "uint8"
          },
          {
            "name": "op2Score",
            "type": "uint8"
          },
          {
            "name": "wager",
            "type": "uint256"
          },
          {
            "name": "timeStamp",
            "type": "uint256"
          },
          {
            "name": "complete",
            "type": "bool"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "userIdToAddress",
        "outputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "users",
        "outputs": [
          {
            "name": "id",
            "type": "address"
          },
          {
            "name": "userName",
            "type": "string"
          },
          {
            "name": "wins",
            "type": "uint32"
          },
          {
            "name": "losses",
            "type": "uint32"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]);

    this.state = {
      ContractInstance: CryptoPongHero.at ('0xBE7898cBC2A204a4064744399935bF5e28f00Bba'),
      userName: "",
      creatorWalletAddress: "",
      oppWalletAddress: "",
      winner: "",
      creatorScore: 0,
      opponentScore: 0,
      wager: 2

    }

    this.createUser = this.createUser.bind (this);
    this.callUser = this.callUser.bind (this);
    this.setOppWalletAddress = this.setOppWalletAddress.bind (this);
    this.setWager = this.setWager.bind (this);
    this.callUnconfirmedGame = this.callUnconfirmedGame.bind (this);
  }


  ComponentDidMount() {
    this.setState({
      creatorWalletAddress: window.web3.eth.accounts[0]
    })
  }

  createUser (event)  {
    event.preventDefault();

    const { _createUser } = this.state.ContractInstance;
    const {userName: newState} = this.state;

    _createUser(
      window.web3.eth.accounts[0],
      newState,
      (err, result) =>  {
        console.log("user is being added to blockchain");
      } 
    )
  }

  callUser()  {
    const {users} = this.state.ContractInstance;
    users(
      0,
      (err, result) =>  {
      console.log("cannot call" + JSON.stringify(result));
    });
  }

  callUnconfirmedGame(address) {
    const { playerToGame } = this.state.ContractInstance;

    playerToGame(
      address,
      (err, result) =>  {
        console.log("result of playertoGame mapping" + result);
      });
  }

  setOppWalletAddress(address) {
    this.setState({
      oppWalletAddress: address 
    })
  }

  setWager(int) {
    this.setState({
      wager: int 
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> Crypto Pong Hero Home</h1>
        </header>
        <nav>
          <Link to="leaderboard">LeaderBoard</Link>
          <Link to="/">Home</Link>
          <Link to="Profile">profile</Link>
        </nav>  
          <Router>
            <UserLanding  path="/" myAddress={window.web3.eth.accounts[0]} setOppWalletAddress={this.setOppWalletAddress} setWager={this.setWager} callUnconfirmedGame={this.callUnconfirmedGame}/>
            <LiveGame path="/game" wager={this.state.wager} oppWalletAddress={this.state.oppWalletAddress}/>
          </Router>
          <br />
          <br />
      </div>
    );
  }
}

export default App;



// submitGame={this.submitGame} myAddress={window.web3.eth.accounts[0]}

// 0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f

// setCreatorScore={this.setCreatorScore} setOpponentScore={this.setOpponentScore}