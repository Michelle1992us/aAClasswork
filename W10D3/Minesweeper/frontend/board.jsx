import React from 'react'
import Tile from "./tile"


class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        const grid = this.props.board.grid;
        const rows = grid.map((row, row_index) => {
           return (<div className='row' key={row_index}>
                {
                    row.map((tile, tile_index) => {
                    return  <Tile tile={tile} updateGame={this.props.updateGame} key={tile_index} />

                    })
                }
            </div>
            )
        });
        return( //always have a return in a render function
            <div className="board">
                {rows}
            </div>
        )
    };
}


export default Board