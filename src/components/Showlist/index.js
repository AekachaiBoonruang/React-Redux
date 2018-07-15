import React from 'react';

function Showlist(props) {
    const {task} = props;
    const taskList = task.map((task, i) =>
        <li key={i} id={i}><input type="checkbox"  id={i} onClick={props.handleDone} value={i} />{console.log(props.done)}
        {props.done ? "Done : " +task : task}</li>
    );

    return (
        <div>
            <p> Task List :</p>
            <p>{taskList}</p>

        </div>
    );
}

export default Showlist;
