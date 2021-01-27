import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

class Roots extends React.Component {
    constructor(props) {
        super(props);
        this.getTabs = new Tabs([{'one': 'I am the first'}, {'two': 'I am the second'}, {'three': 'I am the third'}])
        console.log(this.getTabs)
    }


    render (){
        return(
            <div>
                <Clock/>
            </div>
        )
    }
}

export default Roots;