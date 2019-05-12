import React from 'react';

function Result(props) {

    // let results = props.result.map(result => {
    //     return <div key={result}>{result}</div>
    // });

    const depressCompare = (score) => {
        if (score>0 && score<=5) {
            return <b>Normal</b>
        } else if (score>5 && score<=7) {
            return <b>Mild</b>
        } else if (score>7 && score<=10) {
            return <b>Moderate</b>
        } else if (score>10 && score<=14) {
            return <b>Severe</b>
        } else {
            return <b>Extremely Severe</b>
        }
    }

    const stressCompare = (score) => {
        if (score>0 && score<=4) {
            return <b>Normal</b>
        } else if (score>4 && score<=6) {
            return <b>Mild</b>
        } else if (score>6 && score<=8) {
            return <b>Moderate</b>
        } else if (score>8 && score<=10) {
            return <b>Severe</b>
        } else {
            return <b>Extremely Severe</b>
        }
    }

    const anxietyCompare = (score) => {
        if (score>0 && score<=7) {
            return <b>Normal</b>
        } else if (score>7 && score<=9) {
            return <b>Mild</b>
        } else if (score>9 && score<=13) {
            return <b>Moderate</b>
        } else if (score>13 && score<=17) {
            return <b>Severe</b>
        } else {
            return <b>Extremely Severe</b>
        }
    }


    const depression = () => {
        let depressScore = [true, true, false, true, false, true, true, true, true, false, true, true, false, true, true, false, false, true, true, true, false]
        let score = 0;
        for (let i=0; i<depressScore.length; i++) {
            if (depressScore[i] && props.result[i]) {
                score = score + props.result[i]
            }
        }
        return score;
    }
    const stress = () => {
        let stressScore = [false, true, true, true, true, false, true, false, true, true, false, false, true, false, true, true, true, false, true, true, true]
        let score = 0;
        for (let i=0; i<stressScore.length; i++) {
            if (stressScore[i] && props.result[i]) {
                score = score + props.result[i]
            }
        }
        return score;
    }
    const anxiety = () => {
        let anxietyScore = [true, false, true, false, true, true, false, true, false, true, true, true, true, true, false, true, true, true, false, false, true]
        let score = 0;
        for (let i=0; i<anxietyScore.length; i++) {
            if (anxietyScore[i] && props.result[i]) {
                score = score + props.result[i]
            }
        }
        return score;
    }

    return <div className='result'>
        <h2>Your result<i class="far fa-smile-wink"></i></h2>
        <p>Depression: {depression()} ({depressCompare(depression())})</p>
        <p>Stress: {stress()} ({stressCompare(stress())})</p>
        <p>Anxiety: {anxiety()} ({anxietyCompare(anxiety())})</p>
    </div>
}

export default Result;