import React from 'react';
import PropTypes from 'prop-types';
import { MyBubble, SmallBtn } from './styles';


const Bubble = ({
  text,
  onClick,
}) => (

  <MyBubble>
    {text}
    <SmallBtn onClick={onClick}>+</SmallBtn>
  </MyBubble>

);

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Bubble;
