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
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "owner",
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
      ContractInstance: CryptoPongHero.at ('0x1375130b4e05af77cf6e3c76f379bd3ed2204803'),
      userName: "",
      oppWalletAddress: "0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f",
      wager: 2,
      creatorWalletAddress: ""
    }

    this.createUser = this.createUser.bind (this);
    this.callUser = this.callUser.bind (this);
    // this.submitGame = this.submitGame.bind (this);
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
            <UserLanding  path="/" myAddress={window.web3.eth.accounts[0]}/>
            <LiveGame path="/game" wager={this.state.wager} oppWalletAddress={this.state.oppWalletAddress} submitGame={this.submitGame}/>
          </Router>
          <br />
          <br />
      </div>
    );
  }
}

export default App;



// submitGame={this.submitGame} myAddress={window.web3.eth.accounts[0]}