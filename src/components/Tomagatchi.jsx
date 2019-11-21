import React from 'react';
// import Feed from './Feed';
// import Play from './Play';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';

function Tomagatchi(props) {
  return (
    <div>
      <img src={props.image} alt="Mel00" />
    </div>
  );
}
Tomagatchi.propTypes = {
  image: PropTypes.string
};
export default Tomagatchi;