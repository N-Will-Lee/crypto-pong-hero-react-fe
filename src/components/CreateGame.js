import React, { Component } from 'react';
import { Router, Link } from "@reach/router";
import LiveGame from './LiveGame';

class CreateGame extends Component {
    constructor (props) {
        super (props);
    
        this.state = {
            myWalletAddress: this.props.myAddress,
            oppWalletAddress: "",
            wager: 0
        }
    }

    render() {
        return(
            <form className="newGame">
                <p> Create a new Game!</p>
                <p>
                    <label>My Wallet Address: {this.props.myAddress}</label>
                    <br/>
                    <label htmlFor="opponent">Opponent Wallet Address: </label>
                    <input type="text" name="opponent" onChange={event => this.props.setOppWalletAddress(event.target.value)} />
                    <br />
                    <label htmlFor="wager">Wager Amount (eth): </label>
                    <input type="text" name="wager" onChange={event => this.props.setWager(event.target.value)}/>
                </p>
                <p>
                    <Link to="/game">Start Game</Link>
                </p>
            </form>
        )
    }
}

export default CreateGame

// onChange={event => this.props.changeGameParams(oppWalletAddress, event.target.value)}/>

{/* <input type="text" name="opponent" value={this.state.oppWalletAddress} onChange={event => this.setState({oppWalletAddress: event.target.value})} /> */}