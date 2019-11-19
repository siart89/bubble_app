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
  justify-content:center;
  max-width:40%;
  width:100%;
  margin:20px auto;
`;

const Input = styled.input`
  flex-basis:150px;
  padding:5px 7px;
`;

const Button = styled.button`
  width:10%;
  align-self:stretch;
`;
const BubbleWrapper = styled.div`
  max-width:max-content;
  width:100%;
`;

const MyBubble = styled.div`
  width:65px;
  height:65px;
  font-size:12px;
  overflow:hidden;
  border-radius:100%;
  border:1px solid black;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`;

const SmallBtn = styled(MyBubble)`
padding: 0;
width: 15px;
height: 15px;
cursor: pointer;
`;

const UlMain = styled.ul`
  padding: 10px 0 10px 50px;
  list-style:none;
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
  UlMain,
};
