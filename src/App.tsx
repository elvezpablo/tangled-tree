import React from "react";
import styled from "styled-components";
import { DataButton } from "./components/data-button";
import { Menu } from "./components/menu";
import { Tree } from "./components/tree";
import { SimpleNode } from "./components/node";

const AppContainer = styled.div`
  background-color: #282c34;
  height: 100%;
  display: flex;
`;

//
const App: React.FC = () => {
  return (
    <AppContainer>
      <Menu>
        <DataButton />
      </Menu>
      <Tree>
        <SimpleNode name="Ufeig Clubfoot" />
      </Tree>
    </AppContainer>
  );
};

export default App;
