import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "router";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <AppContainer>
          <Navigation />
        </AppContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
`;
