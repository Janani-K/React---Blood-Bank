import React from 'react';



const ShowCity = (props) => {
   
    console.log("---CHILD RENDER CALLED---")
    return (
        <div >
            <h4>{props.city}</h4>
        </div>
    );

}

export default ShowCity;