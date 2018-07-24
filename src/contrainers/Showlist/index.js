import React from 'react';
import ShowlistComponents from '../../components/Showlist'

function Showlist({task, done, handleDone}) {
    return (
        <ShowlistComponents task={task} done={done} handleDone={handleDone}/>
    );
}

export default Showlist;
