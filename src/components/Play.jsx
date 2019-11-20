import React from 'react';
import PropTypes from 'prop-types';

function Play(props){
//   function handlePlayClick(){
//     props.onPlay();
//   }
  return (
    <div>
        <p>{props.playLevel}</p>
      <button onClick={props.onPlay}>Play</button>
    </div>
  );
}
Play.propTypes = {
    onPlay: PropTypes.func,
    playLevel: PropTypes.number
}
export default Play;