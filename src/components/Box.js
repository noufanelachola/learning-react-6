import React , {useState} from "react";

function Box(props) {

    const [on , setOn] = useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "#cccccc"
    }

    return <div style={styles} className="box" onClick={toggle}></div>
    
    function toggle() {
        setOn(prevOn => !prevOn);
    }
}

export default Box;
