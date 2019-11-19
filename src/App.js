import React from 'react';
import { MainWrapper, Global } from './components/styles';
import Main from './components/Main';


function App() {
  return (
    <>
      <Global />
      <MainWrapper>
        <Main />
      </MainWrapper>
    </>
  );
}

export default App;
