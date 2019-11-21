import React from 'react';


function Bar(props){
    
    var level = String(props.level) + 'px';
    console.log(level)
    var bar = {
        width: "50px",
        maxHeight: "400px",
        height: level,
        background: "blue"
    }
    

    return (
        <div>
            <div style={bar}>
                
            </div>
            <p>{props.level}</p>
        </div>
    )
}



export default Bar;