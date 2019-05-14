import React from 'react';
const axios = require('axios')

class Result extends React.Component {

    state = {email: ""} 

    sendResult = () => {
        // axios.get('/',)
        axios.get('https://joni-author-api.herokuapp.com/thoughtfull', {
            // axios.get('http://localhost:3001/thoughtfull', {
                params: {
                    depressScore: this.depression(),
                    stressScore: this.stress(),
                    anxietyScore: this.anxiety(),
                    email: this.state.email
                }
        }) 
    }

    depressCompare = (score) => {
        if (this.props.malay) {
            if (score>0 && score<=5) {
                return <b>Normal</b>
            } else if (score>5 && score<=7) {
                return <b>Ringan</b>
            } else if (score>7 && score<=10) {
                return <b>Sederhana</b>
            } else if (score>10 && score<=14) {
                return <b>Teruk</b>
            } else {
                return <b>Sangat Teruk</b>
            }
        } else {
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
    }

    stressCompare = (score) => {
        if (this.props.malay){
            if (score>0 && score<=4) {
                return <b>Normal</b>
            } else if (score>4 && score<=6) {
                return <b>Ringan</b>
            } else if (score>6 && score<=8) {
                return <b>Sederhana</b>
            } else if (score>8 && score<=10) {
                return <b>Teruk</b>
            } else {
                return <b>Sangat Teruk</b>
            }
        } else {
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
    }

    anxietyCompare = (score) => {
        if (this.props.malay) {
            if (score>0 && score<=7) {
                return <b>Normal</b>
            } else if (score>7 && score<=9) {
                return <b>Ringan</b>
            } else if (score>9 && score<=13) {
                return <b>Sederhana</b>
            } else if (score>13 && score<=17) {
                return <b>Teruk</b>
            } else {
                return <b>Sangat Teruk</b>
            }
        } else {
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
       
    }


    depression = () => {
        let depressScore = [true, true, false, true, false, true, true, true, true, false, true, true, false, true, true, false, false, true, true, true, false]
        let score = 0;
        for (let i=0; i<depressScore.length; i++) {
            if (!depressScore[i] && this.props.result[i]) {
                score = score + this.props.result[i]
            }
        }
        return score;
    }
    stress = () => {
        let stressScore = [false, true, true, true, true, false, true, false, true, true, false, false, true, false, true, true, true, false, true, true, true]
        let score = 0;
        for (let i=0; i<stressScore.length; i++) {
            if (!stressScore[i] && this.props.result[i]) {
                score = score + this.props.result[i]
            }
        }
        return score;
    }
    anxiety = () => {
        let anxietyScore = [true, false, true, false, true, true, false, true, false, true, true, true, true, true, false, true, true, true, false, false, true]
        let score = 0;
        for (let i=0; i<anxietyScore.length; i++) {
            if (!anxietyScore[i] && this.props.result[i]) {
                score = score + this.props.result[i]
            }
        }
        return score;
    }

    render() {

    if (this.props.malay) {
        return <div className='result'>
        <br/>
        <h2>Keputusan anda <i class="far fa-smile-wink"></i></h2>
        <p>Kemurungan: {this.depression()} ({this.depressCompare(this.depression())})</p>
        <p>Stres: {this.stress()} ({this.stressCompare(this.stress())})</p>
        <p>Anzieti: {this.anxiety()} ({this.anxietyCompare(this.anxiety())})</p>
        <br/>
        <div style={{overflowX: "auto"}}>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Tahap</th>
      <th scope="col">Kemurungan</th>
      <th scope="col">Anzieti</th>
      <th scope="col">Stres</th>
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
      <th scope="row">Ringan</th>
      <td>6-7</td>
      <td>5-6</td>
      <td>8-9</td>
    </tr>
    <tr>
      <th scope="row">Sederhana</th>
      <td>8-10</td>
      <td>7-8</td>
      <td>10-13</td>
    </tr>
    <tr>
      <th scope="row">Teruk</th>
      <td>11-14</td>
      <td>9-10</td>
      <td>14-17</td>
    </tr>
    <tr>
      <th scope="row">Sangat Teruk</th>
      <td>15 +</td>
      <td>11 +</td>
      <td>18 +</td>
    </tr>
  </tbody>
</table>
</div>
<br/> <br/>
    <div class="form-group" align="center">
    <input value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} style={{maxWidth: "50%"}}type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <button className="btn btn-info btn-md" onClick={this.sendResult}> E-mel saya hasil saya </button>
    <br/> <br/>
    <a className="btn btn-sm btn-light" href="mailto: hello@thoughtfull.world">Apa-apa soalan? Jangan ragu untuk menjatuhkan kami e-mel!</a><br/><br/>
    </div>
    } else {
        return <div className='result'>
        <br/>
        <h2>Your result <i class="far fa-smile-wink"></i></h2>
        <p>Depression: {this.depression()} ({this.depressCompare(this.depression())})</p>
        <p>Stress: {this.stress()} ({this.stressCompare(this.stress())})</p>
        <p>Anxiety: {this.anxiety()} ({this.anxietyCompare(this.anxiety())})</p>
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
    <br/> <br/>
    <div class="form-group" align="center">
    <input value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} style={{maxWidth: "50%"}}type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <button className="btn btn-info btn-md" onClick={this.sendResult}> Email Me My Result </button>
    <br/> <br/>
    <a className="btn btn-sm btn-light" href="mailto: hello@thoughtfull.world">Any Questions? Feel free to drop us an email!</a><br/><br/>
    </div>
    }

}    
    
}

export default Result;