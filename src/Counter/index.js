import React from 'react';

import Buttons from './Buttons';

class Counter extends React.Component {

    state = {
        count: 0
    }
    
    incrementCount = (number) => { // arrow function
        this.setState({count: this.state.count+number})
    }

    renderButton = () => {
        return <button onClick={this.incrementCount}>Increment</button>
    }

    render () {
        return <div>
            Counter: {this.state.count} <br/>
            <Buttons count={this.state.count} incrementCount={this.incrementCount} />
        </div>
    }
}

export default Counter;