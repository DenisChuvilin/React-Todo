import React from "react";

const MyMessage = (props) => {
    console.log(props)
    return (
        <div>
<h1>{props.myGreeting} </h1>
        </div>
    )
}

export {MyMessage};