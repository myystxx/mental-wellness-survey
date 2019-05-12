import React from 'react';
import Result from './Result';

class Question extends React.Component {
    
    render () {
        while ((this.props.qnNo+1) < 20) {

            let completion = (this.props.qnNo+1) /20 * 100

            return <div className='container'>
            <br/>
            <div class="progress">
                <div class="progress-bar bg-warning" role="progressbar" style={{width: "" + completion + "%"}}> </div>
            </div>
                <div style={{minHeight: "25vh"}}>
                <br/>
                <h5>{this.props.qn}</h5><br/>
                </div>
                <div class="alert alert-warning alert-dismissible fade show" role="alert">
                    <p>0: Not applicable</p>
                    <p>1: Applied to me to <i>some degree</i>, or <i>some of the time</i></p>
                    <p>2: Applied to me to a <i>considerable degree</i>, or a <i>good part of the time</i></p>
                    <p>3: Applied to me <i>very much</i>, or <i>most of the time</i></p>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick={()=>this.props.addChoices(0)} type="button" class="btn btn-info">0</button>
                    <button onClick={()=>this.props.addChoices(1)} type="button" class="btn btn-info">1</button>
                    <button onClick={()=>this.props.addChoices(2)} type="button" class="btn btn-info">2</button>
                    <button onClick={()=>this.props.addChoices(3)} type="button" class="btn btn-info">3</button> 
                </div>
            </div>
        }
        return <div>
            <Result result={this.props.result} qnNo={this.props.qnNo}/>
        </div>
    }  
}

export default Question;
