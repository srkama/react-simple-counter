import React from 'react';

const counterAction = (props) => {
    return (
        <button onClick={props.clicked}>{props.title}</button>
    )
}


export default counterAction;