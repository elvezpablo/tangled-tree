import React from "react";
import styled from "styled-components";

interface SimpleNodeProps {
  x?: number;
  y?: number;
  name?: string;
}

const handleClick = (e: any) => {
  console.log("click");
};

const Background = styled.rect`
  fill: #d8d8d8;
  :hover {
    fill: #aa0000;
    cursor: pointer;
  }
`;

const SimpleNode: React.FC<SimpleNodeProps> = ({
  name = "the dude",
  x = 100,
  y = 100
}) => {
  return (
    <g id="NameNode" transform={`translate(${x}, ${y})`} onClick={handleClick}>
      <Background width="80" height="20" />
      <text
        fontFamily="Helvetica"
        fontSize="10"
        fontWeight="normal"
        fill="#000000"
        pointerEvents="none"
      >
        <tspan x="40" y="14" textAnchor="middle">
          {name}
        </tspan>
      </text>
    </g>
  );
};

export { SimpleNode };
