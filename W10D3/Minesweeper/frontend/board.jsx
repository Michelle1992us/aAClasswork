import React from 'react'
import * as Minesweeper from "./minesweeper"

class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const board = this.props.board.grid;
        board.map()
    }
}


export default Board