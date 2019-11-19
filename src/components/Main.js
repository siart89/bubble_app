import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  BubbleWrapper,
  UlMain,
} from './styles';
import Bubble from './Bubble';


const Main = () => {
  const [inpValue, setInpValue] = useState('');
  const [bubbles, setBubbles] = useState([]);
  // eslint-disable-next-line global-require
  const uniqid = require('uniqid');

  // add new Element
  const handleAddBubble = (elem, level) => {
    if (inpValue) {
      elem.push({
        text: inpValue,
        level: level + 1,
        id: uniqid(),
        elem: [],
      });
      setBubbles(bubbles.slice());
      setInpValue('');
    }
  };

  // Render elements
  const BubblesCreator = (arr) => (
    <UlMain>
      {arr.map(({
        text,
        level,
        elem,
        id,
      }) => (
        <li key={id} level={level} className="main">
          <Bubble
            text={text}
            level={level}
            onClick={() => handleAddBubble(elem, level)}
          />
          {elem && BubblesCreator(elem)}
        </li>
      ))}
    </UlMain>
  );

  const handleSetValueOnSubmit = (e) => {
    e.preventDefault();
    if (inpValue) {
      setBubbles([...bubbles, {
        text: inpValue,
        level: 1,
        id: uniqid(),
        elem: [],
      }]);
      setInpValue('');
    }
  };
  return (
    <>
      <Form onSubmit={handleSetValueOnSubmit}>
        <Input
          type="text"
          value={inpValue}
          onChange={(e) => {
            if (e.target.value.length < 7) {
              setInpValue(e.currentTarget.value);
            }
          }}
        />
        <Button
          type="submit"
        >
          Add
        </Button>
      </Form>
      <BubbleWrapper>
        {BubblesCreator(bubbles)}
      </BubbleWrapper>

    </>
  );
};

export default Main;
