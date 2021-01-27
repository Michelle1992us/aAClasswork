import React from 'react'


class Board extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        
        const board = this.props.board.grid;
        const rows = board.map((row, row_index) => {
           return (<div className='row' key={row_index}>
                {
                    row.map((tile, tile_index) => {
                    return  <Tile tile={tile} updateGame={this.updateGame} key={tile_index} />

                    })
                }
            </div>
            )
        });
        return(
            <div className="board">
                {rows}
            </div>
        )
    };
}


export default Board