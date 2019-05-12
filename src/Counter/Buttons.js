import React from 'react';
import Button from './Button';

class Buttons extends React.Component {

    render () {
        return <div>
           {this.count}
           <Button incrementCount={this.props.incrementCount} number="1" />
           <Button  incrementCount={this.props.incrementCount} number="2" />
           <Button  incrementCount={this.props.incrementCount} number="3" />
        </div>
    }
}

export default Buttons;