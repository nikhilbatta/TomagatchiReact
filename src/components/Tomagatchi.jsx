import React from 'react';
import Feed from './Feed';
import Play from './Play';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tomagatchi(props) {
  return (
    <div>
      <img src={props.image} alt="Mel00" />
      <div>
        <Feed onFeed={props.onFeed} />
      </div>
      <div>
        <Play onPlay={props.onPlay} />
      </div>
      <p> Hunger Level: {props.hungerLevel}</p>
      <p> Boredom Level: {props.boredomLevel}</p>
    </div>
  );
}
Tomagatchi.propTypes = {
  hungerLevel: PropTypes.number,
  boredomLevel: PropTypes.number,
  onFeed: PropTypes.func,
  onPlay: PropTypes.func,
  image: PropTypes.string
};
export default Tomagatchi;