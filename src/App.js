import React, { Component } from 'react';
import './App.css';
import { Router, Link } from "@reach/router";
import UserLanding from './components/UserLanding';
import LiveGame from './components/LiveGame';

class App extends Component {
  constructor (props) {
    super (props);

    const CryptoPongHero = window.web3.eth.contract ([
      {
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "address"
          }
        ],
        "name": "playerGameCount",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
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
        "name": "gameToAwayPlayer",
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
        "constant": true,
        "inputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "gameToHomePlayer",
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
        "inputs": [],
        "name": "_getTotalGameNumber",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
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
      }
    ]);

    this.state = {
      ContractInstance: CryptoPongHero.at ('0x99f820D7D64B80BeB761140A91B4DB04f65547bA'),
      userName: "",
      creatorWalletAddress: window.web3.eth.accounts[0],
      oppWalletAddress: "",
      winner: "",
      creatorScore: 0,
      oppScore: 0,
      wager: 2,
      allGames: [],
      gameCount: 0

    }

    this.createUser = this.createUser.bind (this);
    this.callUser = this.callUser.bind (this);
    this.setOppWalletAddress = this.setOppWalletAddress.bind (this);
    this.setWager = this.setWager.bind (this);
    this.getTotalGameNumber = this.getTotalGameNumber.bind (this);
    this.submitGame = this.submitGame.bind (this);
    this.setOppScore = this.setOppScore.bind (this);
    this.setCreatorScore = this.setCreatorScore.bind (this);
    this.declareCreatorWinner = this.declareCreatorWinner.bind (this);
    this.declareOpponentWinner = this.declareOpponentWinner.bind (this);
    this.getPlayerGameCount = this.getPlayerGameCount.bind (this);
    this.getGameinformation = this.getGameinformation.bind (this);
    this.getAllGamesOfAddress = this.getAllGamesOfAddress.bind (this);
    this.handleTotalGameNumber = this.handleTotalGameNumber.bind(this);
  }


  //works
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

  //works
  callUser()  {
    const {users} = this.state.ContractInstance;
    users(
      0,
      (err, result) =>  {
      console.log("user 0 information: " + JSON.stringify(result));
    });
  }

//works
  submitGame(event)  {
    event.preventDefault();
    const { _finish } = this.state.ContractInstance;
    _finish(
      this.state.creatorWalletAddress,
      this.state.oppWalletAddress,
      this.state.winner,
      this.state.creatorScore,
      this.state.oppScore,
      this.state.wager,
      1541029968,
      {
        gas: 3000000,
        from: window.web3.eth.accounts[0],
        value: window.web3.toWei (this.state.wager, 'ether')
      },
      (err, result) =>  {
        console.log("game is being submitted to the blockchain" + JSON.stringify(result));
      }
    );
  }
  
  //works
  getTotalGameNumber() {
    const { _getTotalGameNumber } = this.state.ContractInstance;

    return new Promise((resolve, reject) => {
      _getTotalGameNumber(
      (err, result) =>  {
        if (err) return reject(err);
        console.log("Total Game Number is: " + JSON.stringify(result));
        resolve(result);
      });
    });
  }

  handleTotalGameNumber() {
    this.getTotalGameNumber()
    .then(count => {
      let newCount = parseInt(JSON.stringify(count)[1])
      this.setState({gameCount: newCount});
    })
  }

  //works - make sure address has loaded
  getPlayerGameCount() {
    const { playerGameCount } = this.state.ContractInstance;

    playerGameCount(
      this.state.creatorWalletAddress,
      (err, result) =>  {
        console.log("player game count is:" + JSON.stringify(result));
      });
  }

  //works
  getGameinformation(int) {
    const { gamesPlayed } = this.state.ContractInstance;

    gamesPlayed(
      int,
      (err, result) =>  {
        console.log("game information for game " + int + " is: " + JSON.stringify(result));
        return result;
      });
  }


  //Front end functions for consolidating data to app.js

  getAllGamesOfAddress(address) {
    this.handleTotalGameNumber();
    let numberOfGames = this.state.gameCount;
    let gamesWithAddress = [];
    console.log("number of games total: " + numberOfGames);
    for (let i=0; i<numberOfGames; i++) {
      let tempGameInfo = this.getGameinformation(i)
      console.log(tempGameInfo);
      if((tempGameInfo[0] || tempGameInfo[1]) === address)  {
        gamesWithAddress.push(tempGameInfo);
      }
    }
    return gamesWithAddress;
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
  setOppScore(int) {
    this.setState({
      oppScore: int 
    })
  }
  setCreatorScore(int)  {
    this.setState({
      creatorScore: int 
    })
  }
  declareCreatorWinner()  {
    this.setState({
      winner: window.web3.eth.accounts[0]
    })
  }
  declareOpponentWinner()  {
    this.setState({
      winner: this.state.oppWalletAddress
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
            <UserLanding  path="/"  
                          myAddress={this.state.creatorWalletAddress}
                          setOppWalletAddress={this.setOppWalletAddress} 
                          setWager={this.setWager} 
                          getAllGamesOfAddress={this.getAllGamesOfAddress}
                        />
            <LiveGame path="/game"  
                      wager={this.state.wager} 
                      oppWalletAddress={this.state.oppWalletAddress} 
                      myAddress={this.state.creatorWalletAddress} 
                      submitGame={this.submitGame} 
                      setOppScore={this.setOppScore} 
                      setCreatorScore={this.setCreatorScore} 
                      declareCreatorWinner={this.declareCreatorWinner} 
                      declareOpponentWinner={this.declareOpponentWinner} 
                      winner={this.state.winner}
                    />
          </Router>
          <br />
          <br />
          <button type="button" onClick={this.getPlayerGameCount}>get player game count</button>
          {/* <button type="button" onClick={this.getGameinformation}>get game information for game 0</button> */}
          <button type="button" onClick={this.handleTotalGameNumber}>calling handleTotalGameNumber</button>
      </div>
    );
  }
}

export default App;



// submitGame={this.submitGame} myAddress={window.web3.eth.accounts[0]}

// 0x5ed8cee6b63b1c6afce3ad7c92f4fd7e1b8fad9f

// setCreatorScore={this.setCreatorScore} setOpponentScore={this.setOpponentScore}