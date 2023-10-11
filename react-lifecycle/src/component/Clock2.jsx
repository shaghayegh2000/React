import { useEffect } from "react";

const Clock2 = ({ date, color }) => {

    useEffect(()=>{
        console.log("Clock2.jsx - Mount useEffect()");
        return () => {
            console.log("Clock2.jsx - Unmount useEffect()");
        }
    } , []);

    useEffect(()=>{
        console.log("Clock2.jsx - Update useEffect()");
    } , [color , date]);

    const style = {
        color: color ? "tomato" : "black",
    };

    return (
        <>
            <p style={style}>Time : {date.toLocaleTimeString()}</p>
        </>
    )
}

export default Clock2;