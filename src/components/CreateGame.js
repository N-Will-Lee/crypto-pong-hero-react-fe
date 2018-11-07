import React, { Component } from 'react';
import { Link } from "@reach/router";
import { Form, FormGroup, Label, Input, Button, Row, Col} from 'reactstrap';

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
            <div className="createGames">
                <br/>
                <h3>Start A New Game!</h3>
                <br/>
                {/* <Form>
                    <Row>
                        <Col sm={{ size: 6, order: 2, offset: 3 }}>
                            <FormGroup> */}
                                {/* <label htmlFor="opponent">Opponent Wallet Address: </label>
                                <input type="text" name="opponent" onChange={event => this.props.setOppWalletAddress(event.target.value)} /> */}
                                <Label for="opponent">Opponent Wallet Address</Label>
                                <Input  id="opponent-input" name="opponent" placeholder="Example: 0x93ec3eebdd0ee8d4a0144316da27eca11a25fbee" onChange={event => this.props.setOppWalletAddress(event.target.value)} />
                            {/* </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 6, order: 2, offset: 3 }}>
                            <FormGroup> */}
                                {/* <label htmlFor="wager">Wager Amount (eth): </label>
                                <input type="text" name="wager" onChange={event => this.props.setWager(event.target.value)}/> */}
                                <Label for="wager">Wager Amount (eth)</Label>
                                <Input id="wager-input"  name="wager" placeholder="Ex: 0.03" onChange={event => this.props.setWager(event.target.value)} />
                            {/* </FormGroup>
                        </Col>
                    </Row>
                </Form> */}
                {/* <Button primary><Link id="link" to="/game">Start Game</Link></Button> */}
                <Link id={"link"} to="/game">Start Game</Link>
                <br/>
                <br/>
                <br/>
            </div>


            // <form className="createGame">
            //     <p> Create a new Game!</p>
            //     <p>
            //         <label>My Wallet Address: {this.props.myAddress}</label>
            //         <br/>
            //         <label htmlFor="opponent">Opponent Wallet Address: </label>
            //         <input type="text" name="opponent" onChange={event => this.props.setOppWalletAddress(event.target.value)} />
            //         <br />
            //         <label htmlFor="wager">Wager Amount (eth): </label>
            //         <input type="text" name="wager" onChange={event => this.props.setWager(event.target.value)}/>
            //     </p>
            //     <p>
            //         <Link to="/game">Start Game</Link>
            //     </p>
            // </form>
        )
    }
}

export default CreateGame