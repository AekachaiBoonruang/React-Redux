import React from 'react';

function Showlist(props) {
    const {task} = props;
    const taskList = task.map((task) =>
        <li key={task.id} ><input type="checkbox"  onClick={() => props.handleDone(task.id)} />{console.log(props.done)}
        {task.value}</li>
    );

    return (
        <div>
            <p> Task List :</p>
            <p>{taskList}</p>

        </div>
    );
}

export default Showlist;
