import React from 'react';
import PropTypes from 'prop-types';
function Feed(props){
//   function handleFeedClick(){
//     props.onFeed();
//   }
  return (
    <div>
        <p>{props.hungerLevel}</p>
      <button onClick={props.onFeed}>Feed</button>
    </div>
  );
}
Feed.propTypes = {
    onFeed: PropTypes.func,
    hungerLevel: PropTypes.number
}
export default Feed;