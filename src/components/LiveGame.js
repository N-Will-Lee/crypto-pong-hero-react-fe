import React, { Component } from 'react';


class LiveGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
        showMyButton: false,
        showOppButton: false,
        showSubmit: false,
        myScore: 0,
        opponentScore: 0,

    }
    this.handleMyScore = this.handleMyScore.bind(this);
    this.handleOppScore = this.handleOppScore.bind(this);
    this.handleMeWinner = this.handleMeWinner.bind(this);
    this.handleOppWinner = this.handleOppWinner.bind(this);

  }

  handleMyScore(event) {
    this.props.setCreatorScore(event.target.value);
    this.setState({
      myScore: event.target.value
    })
    if (event.target.value === "21")  {
      this.setState({
        showMyButton: true
      })
    }
    if (event.target.value !== "21")  {
      this.setState({
        showMyButton: false,
        showSubmit: false
      })
    }
  }

  handleOppScore(event) {
    console.log("event: ", event)
    console.log("event.target: ", event.target)
    this.props.setOppScore(event.target.value);
    this.setState({
      opponentScore: event.target.value
    })
    if (event.target.value === "21")  {
      this.setState({
        showOppButton: true
      })
    }
    if (event.target.value !== "21")  {
      this.setState({
        showOppButton: false,
        showSubmit: false
      })
    }
  }


  handleMeWinner(event) {
    event.preventDefault();
    this.props.declareCreatorWinner();
      if (this.isAddress(this.props.myAddress)) {
      this.setState({
        showSubmit: true
      })
    }
  }

  handleOppWinner(event) {
    event.preventDefault();
    this.props.declareOpponentWinner();
    if (this.isAddress(this.props.oppWalletAddress)) {
      this.setState({
        showSubmit: true
      })
    }
  }

  //not a great check - misses most things... web3.utils.isAddress('address') is supposed to work great but couldn't get web3 package installed
  isAddress(address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/ || /^(0x)?[0-9A-F]{40}$/) {
        // If it's all small caps or all all caps, return true
        return true;
    } 
  };

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
            <label htmlFor="homeScore">My Score:  </label>
            <input type="text" name="homeScore" value={this.state.myScore} onChange={this.handleMyScore}/>
            <br />
            <label htmlFor="oppScore">Opponent Score:  </label>
            <input type="text" name="oppScore" value={this.state.opponentScore} onChange={this.handleOppScore}/>
            <br/>
            <label htmlFor="winner">winner: {this.props.winner} </label>
            <br/>
            {this.state.showMyButton ? <button type="button" onClick={this.handleMeWinner}>Home Team won!</button> : null}
            {this.state.showOppButton ? <button type="button" onClick={this.handleOppWinner}>Away Team won!</button> : null}
            <br/>

            {this.state.showSubmit ? <input type="submit" name="submit" value="Submit Results" /> : null}
        </form>
      </div> 
    )
  }
}


export default LiveGame