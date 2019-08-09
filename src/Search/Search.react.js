import React from 'react';

const clear = (msg) => {
    console.log("Clear invoked");
     return () => {
        console.log("Inner function is called"+msg);
     }
}

const Search = () => {

    return (
        <div >
            <button className="fa fa-search" onClick={(event) => {console.log(event)}}>Search</button>
            <button className="fa fa-crosshairs" onClick={clear("Ramesh")}>Clear</button>
        </div>
    );

}

export default Search;