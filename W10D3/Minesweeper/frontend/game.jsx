import React from "react"
import * as Minesweeper from "../minesweeper"
import Board from "./board"

class Game extends React.Component{
    constructor(props){
        super(props)
        const board = new Minesweeper.Board(9, 15) //grid size, num of bombs
        this.state = {board: board}
        this.updateGame = this.updateGame.bind(this)
        this.restartGame = this.restartGame.bind(this)

    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag()
        } else {
            tile.explore()
        }
        this.setState({ board: this.state.board })
    }

    restartGame() {
        const board = new Minesweeper.Board(9, 15) 
        this.setState({board: board})
    }

    render() {
        let modal
        if (this.state.board.lost() || this.state.board.won()) {
            let message = this.state.board.won() ? "You won!" : "Try again, loser!"
            modal = 
                <div className="modal-screen">
                    {message}
                <button type="button" onClick={this.restartGame}>
                        Let's play again!
                </button>
                </div> 
            } 
        
        return (
            <>
                {modal}
                <Board board={this.state.board} updateGame={this.updateGame}/>
            </>
        )
    }
}


export default Game 