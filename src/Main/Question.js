import React from 'react';
import Result from './Result';

class Question extends React.Component {

    state = {choice: null}

    onHover = (choice) => {
        switch(choice){
            case 0: 
                return <div>Not applicable</div>
            case 1: 
                return <div>Applied to me to <i>some degree</i>, or <i>some of the time</i></div>
            case 2:
                return <div>Applied to me to a <i>considerable degree</i>, or a <i>good part of the time</i></div>
            case 3: 
                return <div>Applied to me <i>very much</i>, or <i>most of the time</i></div>
            default:
                return <></>
        } 
    }
    
    render () {
        while ((this.props.qnNo+1) < 20) {

            let completion = (this.props.qnNo+1) /20 * 100

            return <div className='container'>
            <br/>
            <div class="progress">
                <div class="progress-bar bg-bar" role="progressbar" style={{width: "" + completion + "%"}}> </div>
            </div>
            <br/>
                <div class="alert alert-warning alert-dismissible fade show center-div" style={{minHeight: "25vh"}}>
                <br/>
                <h3>{this.props.qn}</h3><br/>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onMouseOver={()=>this.setState({choice: 0})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(0)} type="button" class="btn btn-option btn-light">0</button>
                    <button onMouseOver={()=>this.setState({choice: 1})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(1)} type="button" class="btn btn-option btn-light">1</button>
                    <button onMouseOver={()=>this.setState({choice: 2})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(2)} type="button" class="btn btn-option btn-light">2</button>
                    <button onMouseOver={()=>this.setState({choice: 3})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(3)} type="button" class="btn btn-option btn-light">3</button> 
                </div>
                <br/><br/><br/>
                {this.onHover(this.state.choice)}
                <br/> <br/> 
                <br/> 
            </div>
        }
        return <div>
            <Result result={this.props.result} qnNo={this.props.qnNo}/>
        </div>
    }  
}

export default Question;
