import React, { useState, useEffect } from 'react';
import {
  Form,
  Input,
  Button,
  BubbleWrapper,
} from './styles';
import Bubble from './Bubble';


const Main = () => {
  const [inpValue, setInpValue] = useState('');
  const [bubbles, setBubbles] = useState([]);
  const [elemNum, setElemNum] = useState(1);

  useEffect(() => {
    console.log(bubbles);
  }, [bubbles]);


  const handleAddBubble = (n, parent, child) => {
    if (inpValue) {
      const level = {
        text: inpValue,
        level: n,
        elem: [parent, child],
      };
      setBubbles([...bubbles, level]);
      setInpValue('');
    }
  };

  const BubblesCreator = (arr) => (
    arr.map(({ text, level, elem }, ind, arry) => {
      return (
        <Bubble
          key={`${text}${ind.toString()}`}
          text={text}
          level={level}
          elem={elem[1]}
          onClick={() => handleAddBubble((level + 1), elem[1], elem[1] + 1)}
        />
      )
    }
  ))

  return (
    <>
      <Form onSubmit={(e) => {
        e.preventDefault();
        handleAddBubble(1, 0, elemNum);
        setElemNum(elemNum + 1);
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
