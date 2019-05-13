import React from 'react';
import Result from './Result';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

class Question extends React.Component {

    state = {choice: null}

    onHover = (choice) => {
        if (!this.props.malay){
            switch(choice){
                case 0: 
                    return <div>Not applicable<br/><br/></div>
                case 1: 
                    return <div>Applied to me to <i>some degree</i>, or <i>some of the time</i><br/><br/></div>
                case 2:
                    return <div>Applied to me to a <i>considerable degree</i>, or a <i>good part of the time</i><br/><br/></div>
                case 3: 
                    return <div>Applied to me <i>very much</i>, or <i>most of the time</i><br/><br/></div>
                default:
                    return <></>
            } 
        } else {
            switch(choice){
                case 0: 
                    return <div><i>Tidak langsung</i> menggambarkan keadaan saya<br/><br/></div>
                case 1: 
                    return <div><i>Sedikit atau jarang-jarang</i> menggambarkan keadaan saya<br/><br/></div>
                case 2:
                    return <div><i>Banyak</i> atau <i>kerapkali</i> menggambarkan keaadan saya<br/><br/></div>
                case 3: 
                    return <div><i>Sangat banya</i> atau <i>sangat kerap</i> menggambarkan keadaan saya<br/><br/></div>
                default:
                    return <></>
            } 
        }
    }

    renderHelper =() => {
        if (this.props.malay){
            return <>
            <BrowserView>
                {this.onHover(this.state.choice)}
            </BrowserView>
            <MobileView>
                <small>
                    <div class="alert alert-light" role="alert">
                        <div>0: <i>Tidak langsung</i> menggambarkan keadaan saya</div>
                        <div>1: <i>Sedikit atau jarang-jarang</i> menggambarkan keadaan saya</div>
                        <div>2: <i>Banyak</i> atau <i>kerapkali</i> menggambarkan keaadan saya</div>
                        <div>3: <i>Sangat banya</i> atau <i>sangat kerap</i> menggambarkan keadaan saya</div>
                    </div>
                </small>
            </MobileView>
            </>
        } else {        
            return <>
                <BrowserView>
                    {this.onHover(this.state.choice)}
                </BrowserView>
                <MobileView>
                    <small>
                        <div class="alert alert-light" role="alert">
                            <div>0: Not applicable</div>
                            <div>1: Applied to me to <i>some degree</i>, or <i>some of the time</i></div>
                            <div>2: Applied to me to a <i>considerable degree</i>, or a <i>good part of the time</i></div>
                            <div>3: Applied to me <i>very much</i>, or <i>most of the time</i></div>
                        </div>
                    </small>
                </MobileView>
                </>
        }
    }

    renderQn = () => {
        if (this.props.malay) {
            return this.props.malay_qn
        } else {
            return this.props.qn
        }
    }

    renderToggle = () => {
        if (this.props.malay){
            return <small className="btn btn-sm btn-info" onClick={this.props.toggleLanguage}>toggle language</small>
        } else {
            return <small className="btn btn-sm btn-info" onClick={this.props.toggleLanguage}>togol bahasa</small>
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
                <div class="alert alert-warning" align="left" style={{minHeight: "25vh"}}>
                    <br/>
                    <h3>{this.renderQn()}</h3><br/>
                </div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onMouseOver={()=>this.setState({choice: 0})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(0)} type="button" class="btn btn-option btn-light">0</button>
                    <button onMouseOver={()=>this.setState({choice: 1})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(1)} type="button" class="btn btn-option btn-light">1</button>
                    <button onMouseOver={()=>this.setState({choice: 2})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(2)} type="button" class="btn btn-option btn-light">2</button>
                    <button onMouseOver={()=>this.setState({choice: 3})} onMouseOut={()=>this.setState({choice:null})} onClick={()=>this.props.addChoices(3)} type="button" class="btn btn-option btn-light">3</button> 
                </div>
                <br/><br/>
                {this.renderHelper()}
                <div align="center">
                {this.renderToggle()}
                </div>
                <br/> <br/> 
                <br/> 
            </div>
        }
        return <div>
            <Result malay={this.props.malay} result={this.props.result} qnNo={this.props.qnNo}/>
        </div>
    }  
}

export default Question;
