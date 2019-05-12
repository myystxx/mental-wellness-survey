import React from 'react';

function Result(props) {

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
        <br/>
        <h2>Your result <i class="far fa-smile-wink"></i></h2>
        <p>Depression: {depression()} ({depressCompare(depression())})</p>
        <p>Stress: {stress()} ({stressCompare(stress())})</p>
        <p>Anxiety: {anxiety()} ({anxietyCompare(anxiety())})</p>
        <br/>
        <div style={{overflowX: "auto"}}>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Level</th>
      <th scope="col">Depression</th>
      <th scope="col">Anxiety</th>
      <th scope="col">Stress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Normal</th>
      <td>0-5</td>
      <td>0-4</td>
      <td>0-7</td>
    </tr>
    <tr>
      <th scope="row">Mild</th>
      <td>6-7</td>
      <td>5-6</td>
      <td>8-9</td>
    </tr>
    <tr>
      <th scope="row">Moderate</th>
      <td>8-10</td>
      <td>7-8</td>
      <td>10-13</td>
    </tr>
    <tr>
      <th scope="row">Severe</th>
      <td>11-14</td>
      <td>9-10</td>
      <td>14-17</td>
    </tr>
    <tr>
      <th scope="row">Extremely Severe</th>
      <td>15 +</td>
      <td>11 +</td>
      <td>18 +</td>
    </tr>
  </tbody>
</table>
</div>
    </div>
}

export default Result;