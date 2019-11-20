import React from 'react';

function Feed(props){
  function handleFeedClick(){
    props.onFeed();
  }
  return (
    <div>
      <button onClick={handleFeedClick}>Feed</button>
    </div>
  );
}
export default Feed;