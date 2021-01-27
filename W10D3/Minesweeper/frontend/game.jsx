import React from "react"
import * as Minesweeper from "../minesweeper"
import Board from "./board"
import Modal from './modal'

class Game extends React.Component{
    constructor(props){
        super(props)
        const board = new Minesweeper.Board(9, 15) //grid size, num of bombs
        this.state = {board: board}
        this.updateGame = this.updateGame.bind(this)
    }

    updateGame(tile, flagged) {
        if (flagged) {
            tile.toggleFlag()
        } else {
            tile.explore()
        }
        this.setState({ board: this.state.board })
    }

    render() {
        if (this.state.board.lost || this.state.board.won){
            this.showModal()
        }
        return (
            <Board board={this.state.board} updateGame={this.updateGame}/>
        )
    }
}


export default Game 