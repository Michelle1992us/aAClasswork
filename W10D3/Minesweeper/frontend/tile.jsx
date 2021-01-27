import React from "react"


class Tile extends React.Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        let flagged = e.altKey ? true : false 
        this.props.updateGame(this.props.tile, flagged)
    }


    render(){
        const tile = this.props.tile;
        let text 
        let className
        if (tile.explored) {
            if (tile.bombed) {
                className = "bombed"
               // text = "💣"
              text =  '\u2622'
               
            } else {
                className = "explored"
                text = tile.adjacentBombCount()
            }
        } else if (tile.flagged) {
            className = "flagged"
            text = "🇲🇰"

        } else {
            className = "unexplored"
            text = text
        }
        className = `tile ${className}`
        return(

            <div className={className} onClick={this.handleClick}>{text}</div>
        )
    }
}

export default Tile 