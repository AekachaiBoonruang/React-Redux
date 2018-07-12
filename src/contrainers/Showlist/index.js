import React from 'react';
import ShowlistComponents from '../../components/Showlist'

function Showlist(props) {
    return (
        <ShowlistComponents task={props.task} />
    );
}

export default Showlist;
