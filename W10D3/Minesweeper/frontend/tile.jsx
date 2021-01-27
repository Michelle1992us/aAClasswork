import React from "react"


class Tile extends React.Component{
    constructor(props) {
        super(props)
    }

    handleClick(e) {
        let flagged = e.altKey ? true : false 
        this.props.updateGame(this.props.tile, flagged)
    }


    render(){
        const tile = this.props.tile;
        let text = "T"
        let className
        if (tile.explored) {
            if (tile.bombed) {
                className = "bombed"
                text = "💣"
            } else {
                className = "explored"
                text = tile.adjacentBombCount()
            }
        } else if (tile.flagged) {
            className = "flagged"
            text = "&#128163"
        } else {
            className = "unexplored"
            text = text
        }
        return(
            <div className="tile" onClick={this.handleClick}>{text}</div>
        )
    }
}

export default Tile 