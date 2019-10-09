import React from 'react';
import PropTypes from 'prop-types';
import './button.css';




function Button({ superheroRef, name, play, image }) {
  return (
    <>
      <button className="shbutts" style={{ backgroundImage: `url(${image})` }} onClick={() => play(name)}></button>
      <audio ref={superheroRef} />
    </>
  );
}

Button.propTypes = {
  superheroRef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  play: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired
};

export default Button;
