import React from 'react';
import ShowlistComponents from '../../components/Showlist'


function Showlist(props) {
    return (
        <ShowlistComponents task={props.task} done={props.done} handleDone={props.handleDone}/>
    );
}

export default Showlist;
