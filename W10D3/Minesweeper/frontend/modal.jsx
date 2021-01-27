import React from 'react'

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <main>
                <h1>GAME OVER</h1>
                <button type="button" onClick={this.showModal}>
                    Open
                </button>
            </main>
        );
    }
}
}


export default Modal