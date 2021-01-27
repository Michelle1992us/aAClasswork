import React from "react"

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        }
        console.log(props[0].one)
    }


    render() {
        return(
            <div>    
                <h1>It works!</h1>
                {<div className="tab">
                    <h1>{props[0].key}</h1>
                    <body>
                        {props[0].value}
                    </body>
                </div>}
            </div>
        )
    }
}

export default Tabs;