import React from "react"

class Tile extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        const tile = this.props.tile;
        let text = ""
        if (tile.explored) {
            if (tile.bombed) {
                text = "U+1F4A3"
            } else {
                text = tile.adjacentBombCount()
            }
        } else if (tile.flagged) {
            text = "U+1F1F2"
        } else {
            text = text
        }

        return(
            <div></div>
        )
    }
}

export default Tile 