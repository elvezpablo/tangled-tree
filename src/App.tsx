import React from "react";
import styled from "styled-components";
import { DataButton } from "./components/data-button";
import { Tree } from "./components/tree";

const AppContainer = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
`;
//
const App: React.FC = () => {
  return (
    <AppContainer>
      <div className="menu">
        <DataButton />
      </div>
      <Tree />
    </AppContainer>
  );
};

export default App;
