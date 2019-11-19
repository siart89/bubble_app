import React, { useState, useEffect } from 'react';
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


  useEffect(() => {
    console.log(bubbles);
  }, [bubbles]);
  // рабочая
  const handleAddBubble = (elem, level) => {
    elem.push({
      text: inpValue,
      level: level + 1,
      id: uniqid(),
      elem: [],
    });
    setBubbles(bubbles.slice());
    setInpValue('');
  };

  // это рабочая
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
            text={text.toString()}
            level={level}
            onClick={() => handleAddBubble(elem, level)}
          />
          {elem && BubblesCreator(elem)}
        </li>
      ))}
    </UlMain>
  );

  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault();
        setBubbles([...bubbles, {
          text: inpValue,
          level: 1,
          id: uniqid(),
          elem: [],
        }]);
        setInpValue('');
      }}
      >
        <Input
          type="text"
          value={inpValue}
          onChange={(e) => setInpValue(e.currentTarget.value)}
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
