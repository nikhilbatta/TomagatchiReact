import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';

function Play(props){
//   function handlePlayClick(){
//     props.onPlay();
//   }
  return (
    <div>
       <Bar playLevel={props.playLevel} height={props.height}/>
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