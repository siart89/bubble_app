import React from 'react';
import PropTypes from 'prop-types';
import { MyBubble, SmallBtn } from './styles';


const Bubble = ({
  text,
  onClick,
  level,
  elem,
}) => (
  <>
    <MyBubble level={level} elem={elem}>
      {text}
      <SmallBtn onClick={onClick}>+</SmallBtn>
    </MyBubble>
  </>
);

Bubble.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  level: PropTypes.number.isRequired,
  elem: PropTypes.number.isRequired,
};

export default Bubble;
