import React from 'react';
import PropTypes from 'prop-types';


function Play(props){
//   function handlePlayClick(){
//     props.onPlay();
//   }
  return (
    <div>
       
      <button onClick={props.onPlay}>Play</button>
    </div>
  );
}
Play.propTypes = {
  height: PropTypes.string,
  onPlay: PropTypes.func,
  playLevel: PropTypes.number
};
export default Play;