import React from 'react';

function Question(props) {
    let completion = (props.qnNo+1) /20 * 100
    return <div className='container'>
    <br/>
    <div class="progress">
        <div class="progress-bar bg-warning" role="progressbar" style={{width: ""+ completion + "%"}}> </div>
    </div>
        <h2>{props.qn}</h2><br/>
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={()=>props.addChoices(0)} type="button" class="btn btn-info">0</button>
            <button onClick={()=>props.addChoices(1)} type="button" class="btn btn-info">1</button>
            <button onClick={()=>props.addChoices(2)} type="button" class="btn btn-info">2</button>
            <button onClick={()=>props.addChoices(2)} type="button" class="btn btn-info">3</button> 
        </div>
        {/* <select
        onChange={(e)=>props.addChoices(e.target.value)}
        className="form-control" >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select> */}
    </div>
}

export default Question;