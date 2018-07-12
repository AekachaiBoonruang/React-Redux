import React from 'react';

function Showlist(props) {


    const {task} = props
    const taskList = task.map((task, index) =>
        <li key={index}><input type="checkbox" />{task}</li>
    );

    return (
        <div>
            <p> Task List :</p>
            <p>{taskList}</p>
        </div>
    );
}

export default Showlist;
