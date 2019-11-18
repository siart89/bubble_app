import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    background:#fff;
    font-size:14px;
  }
  *{
    margin:0;
    padding:0;
  }
`;

const MainWrapper = styled.section`
  max-width:1199px;
  width:100%;
  margin: 0 auto;
`;

const Form = styled.form`
  display:flex;
  align-items:center;
  max-width:40%;
  width:100%;
  margin:20px auto;
`;

const Input = styled.input`
  flex-grow:1;
  padding:5px 7px;
`;

const Button = styled.button`
  width:10%;
  align-self:stretch;
`;
const BubbleWrapper = styled.div`
  max-width:max-content;
  width:100%;
  display:grid;
  grid-template:auto;
  /* grid-row-gap:55px; */
`;

const MyBubble = styled.div.attrs((props) => ({
  topShift: () => {
    if (props.level !== 1) {
      return 10 * (props.level - 1);
    }
    return 0;
  },
}))`
  width:50px;
  height:50px;
  border-radius:100%;
  border:1px solid black;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  grid-column-start:${(props) => props.level};
  grid-column-end: ${(props) => props.level + 1};
  /* grid-row-start:${(props) => props.elem}; */
  /* margin-top:${(props) => props.topShift}px; */
`;

const SmallBtn = styled(MyBubble)`
padding: 0;
width: 15px;
height: 15px;
cursor: pointer;
`;

export {
  Global,
  MainWrapper,
  Form,
  Input,
  Button,
  MyBubble,
  SmallBtn,
  BubbleWrapper,
};
