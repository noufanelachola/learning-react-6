import React , {useState} from "react";

function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "#cccccc"
    };

    return <div style={styles} className="box" onClick={() => props.handleClick(props.id)}></div>
    

}

export default Box;
