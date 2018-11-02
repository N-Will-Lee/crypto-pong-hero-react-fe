import React, { Component } from 'react';


const LiveGame = (props) => {

  return(
    <div>
      <form className="newGame" onSubmit={props.submitGame}>
          <p> Create a new Game!</p>
          <label>My Wallet Address: {props.myAddress}</label>
          <br/>
          <label htmlFor="opponent">Opponent Wallet Address: {props.oppWalletAddress}</label>
          <br />
          <label htmlFor="wager">Wager Amount (eth): {props.wager}</label>
          <br />
          <label htmlFor="homeScore">Home Score:  </label>
          <input type="text" name="homeScore" onChange={event => props.setCreatorScore(event.target.value)}/>
          <br />
          <label htmlFor="oppScore">Opponent Score:  </label>
          <input type="text" name="oppScore" onChange={event => props.setOppScore(event.target.value)}/>
          <br/>
          <label htmlFor="winner">winner: {props.winner} </label>
          <br/>
          <button type="button" onClick={props.declareCreatorWinner}>Home Team won!</button>
          <button type="button" onClick={props.declareOpponentWinner}>Away Team won!</button>
          <br/>

          <input type="submit" name="submit" value="Submit Results" />
      </form>
    </div> 
  )
}


export default LiveGame