import React, { Component } from 'react';


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
            <form className="newGame" onSubmit={this.handleSubmit}>
                <p> Create a new Game!</p>
                <label>My Wallet Address: {this.state.myWalletAddress}</label>
                <br/>
                <label htmlFor="opponent">Opponent Wallet Address: </label>
                <input type="text" name="opponent" value={this.state.oppWalletAddress} onChange={event => this.setState({oppWalletAddress: event.target.value})}/>
                <br />
                <label htmlFor="wager">Wager Amount (eth): </label>
                <input type="text" name="wager" value={this.state.wager} onChange={event => this.setState({wager: event.target.value})}/>
                <br />
                <input type="submit" name="submit" value="Start Game" />
            </form>
        )
    }
}

export default CreateGame