import React from 'react';
import './Main.css';
import Question from './Question';
import Result from './Result';


class Main extends React.Component {

    questions= [
        'I found it hard to wind down',
        'I was aware of dryness of my mouth',
        'I couldn’t seem to experience any positive feeling at all',
        'I experienced breathing difficulty (eg, excessively rapid breathing, breathlessness in the absence of physical exertion)',
        'I found it difficult to work up the initiative to do things',
        'I tended to over-react to situations',
        'I experienced trembling (eg, in the hands)',
        'I felt that I was using a lot of nervous energy',
        'I was worried about situations in which I might panic and make a fool of myself',
        'I felt that I had nothing to look forward to',
        'I found myself getting agitated',
        'I found it difficult to relax',
        'I felt down-hearted and blue',
        'I was intolerant of anything that kept me from getting on with what I was doing',
        'I felt I was close to panic',
        'I was unable to become enthusiastic about anything',
        'I felt I wasn’t worth much as a person',
        'I felt that I was rather touchy (eg extra sensitive)',
        'I was aware of the action of my heart in the absence of physical exertion (eg, sense of heart rate increase, heart missing a beat)',
        'I felt scared without any good reason',
        'I felt that life was meaningless'
    ];

    
    state = {
        choices: [],
        qnNo: -1
    }

    incrementQn = () => {
        this.setState({qnNo: this.state.qnNo+1})
    }

    addChoices = (newChoice) => {
        this.setState({
            qnNo: this.state.qnNo+1,
            choices: [
                ...this.state.choices, newChoice
            ]
        })
    }

    render () {
        if (this.state.qnNo === -1) {
            return <div className='container'>
            <div className='intro'>
                <h2 class="fas fa-heartbeat"> Check your wellness today!</h2>
                <h2 class="fas fa-heartbeat"> </h2><br/>
                <p><i>keep track of your mental wellness,
                <br/>take the survey to find out!
                <br/>Answer the questions truthfully
                <i class="far fa-smile-wink"></i></i></p>
            </div>
            <br></br>
            <button className='btn btn-muted' onClick={this.incrementQn}>Start Survey</button>
            </div>
        } else {
             return <div style={{marginTop: "10%"}}>
                <Question qnNo={this.state.qnNo} addChoices={this.addChoices} qn={this.questions[this.state.qnNo]} result={this.state.choices} />
            </div>
        }
    }
}

export default Main;