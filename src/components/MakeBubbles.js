import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Bubble from './Bubble';


const MakeBubbles = ({ arr, handleAddBubble }) => {
  const [elemNum, setElemNum] = useState(1);
  return (
    arr.map(({ text, level, elem }, ind) => (
      <Bubble
        key={`${text}${ind.toString()}`}
        text={text}
        level={level}
        elem={elem[1]}
        onClick={() => {
          handleAddBubble((level + 1), elem[1], elemNum);
          setElemNum(elemNum + 1);
        }}
      />
    ))
  );
};


MakeBubbles.propTypes = {
  arr: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  handleAddBubble: PropTypes.func.isRequired,
};

export default MakeBubbles;
