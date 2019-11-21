import React from 'react';
import PropTypes from 'prop-types';



function Bar(props){
    
    var playLevelCopy = String(props.playLevel) + 'px';
    
    console.log(playLevelCopy)
    var bar = {
        width: "50px",
        maxHeight: "400px",
        height: playLevelCopy,
        background: "blue"
    }
    

    return (
        <div>
            <div style={bar}>
                <p>{props.playLevel}</p>
            </div>
        </div>
    )
}
Bar.propTypes = {
    height: PropTypes.string,
};


export default Bar;