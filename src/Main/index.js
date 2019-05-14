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

    malay_questions = [
        'Saya dapati diri saya sukar ditenteramkan',
        'Saya sedar mulut saya terasa kering',
        'Saya tidak dapat mengalami perasaan positif sama sekali',
        'Saya mengalami kesukaran bernafas (contohnya pernafasan yang laju, tercungap-cungap walaupun tidak melakukan senaman fizikal)',
        'Saya sukar untuk mendapatkan semangat bagi melakukan sesuatu perkara',
        'Saya cenderung untuk bertindak keterlaluan dalam sesuatu keadaan',
        'Saya rasa menggeletar (contohnya pada tangan)',
        'Saya rasa saya menggunakan banyak tenaga dalam keadaan cemas',
        'Saya bimbang keadaan dimana saya mungkin menjadi panik dan melakukan perkara yang membodohkan diri sendiri',
        'Saya rasa saya tidak mempunyai apa-apa untuk diharapkan',
        'Saya dapati diri saya semakin gelisah',
        'Saya rasa sukar untuk relaks',
        'Saya rasa sedih dan murung',
        'Saya tidak dapat menahan sabar dengan perkara yang menghalang saya meneruskan apa yang saya lakukan',
        'Saya rasa hampir-hampir panik/cemas',
        'Saya tidak bersemangat dengan apa jua saya lakukan',
        'Saya rasa tidak begitu berharga sebagai seorang individu',
        'Saya rasa saya mudah tersentuh (contohnya lebih sensitif)',
        'Saya sedar tindakbalas jantung saya walaupun tidak melakukan aktiviti fizikal (contohnya kadar denyuta',
        'Saya berasa takut tanpa sebab yang munasabah',
        'Saya rasa hidup ini tidak bermakna'
    ]

    
    state = {
        choices: [],
        qnNo: -1,
        malay: false
    }

    incrementQn = (malay) => {
        this.setState({qnNo: this.state.qnNo+1})
    }
    
    setMalay = () => {
        this.setState({qnNo: this.state.qnNo+1, malay: true})
    }

    addChoices = (newChoice) => {
        this.setState({
            qnNo: this.state.qnNo+1,
            choices: [
                ...this.state.choices, newChoice
            ]
        })
    }

    toggleLanguage =() => {
        if (this.state.malay){
            this.setState({malay: false})
        } else {
            this.setState({malay: true})
        }
    }

    render () {
        if (this.state.qnNo === -1) {
            return <div className='container' style={{marginTop: "10%"}}>
                <div class="alert alert-light" style={{minHeight: "25vh"}}>
                    <div className=''>
                        <h1>❤️</h1>
                        <h5> Check your wellness today!</h5> 
                        <p className="small lead">Keep track of your mental wellness,
                        <br/>take the survey to find out!
                        <br/>Answer the questions truthfully &nbsp;
                        <i class="far fa-smile-wink"></i></p>
                        <button className='btn btn-block btn-start' onClick={this.incrementQn}>English</button>
                        <button className='btn btn-block btn-start' onClick={()=> this.setMalay()}>Malay</button>
                        <small className="grey"> Select Language To Start Survey </small><br/>
                    </div>
                </div>
            </div>
        } else {
             return <div style={{marginTop: "10%"}}>
                <Question toggleLanguage={this.toggleLanguage} malay={this.state.malay} qnNo={this.state.qnNo} addChoices={this.addChoices} qn={this.questions[this.state.qnNo]} malay_qn={this.malay_questions[this.state.qnNo]} result={this.state.choices} />
            </div>
        }
    }
}

export default Main;