import React from 'react';
import ShowProfile from '../ShowProfile/ShowProfile.react';

const ShowContent = (props) => {

    return (
        <div >
            <h2>Current Request</h2>
            <img src={props.request.imgRef} alt="logo"></img>
            <ShowProfile></ShowProfile>
        </div>
    );

}

export default ShowContent;