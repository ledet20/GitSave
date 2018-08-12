import React from 'react';


export const DisplayRepo = (props) => {
    console.log(props);
    return (
        <div>
            <p> {props.title} </p>
            <p> {props.url} </p>
        </div>
    )
}