import React from 'react';

function Play(props){
  function handlePlayClick(){
    props.onPlay();
  }
  return (
    <div>
      <button onClick={handlePlayClick}>Play</button>
    </div>
  );
}
export default Play;