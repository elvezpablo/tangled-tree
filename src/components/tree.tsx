import React from "react";
import styled from "styled-components";

const TreeContainer = styled.svg`
  background-color: rgba(0, 0, 0, 0.2);
`;

const Tree: React.FC = props => {
  const height = "100%";

  return (
    <TreeContainer width={height} height={height}>
      {props.children}
    </TreeContainer>
  );
};

export { Tree };
