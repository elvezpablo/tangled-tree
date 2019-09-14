import React from "react";
import styled from "styled-components";
const SteinStore = require("stein-js-client");
// import SteinStore from "stein-js-client";

const storeUrl = "https://api.steinhq.com/v1/storages/5d7bbefc95caec04c53f7057";

const store = new SteinStore(storeUrl);

const ButtonStyle = styled.button`
  background-color: red;
  color: whitesmoke;
  padding: 6px;
`;

const getData = () => {
  console.log("data");
  store.read("characters").then((data: any) => {
    console.log(data);
  });
};

const DataButton: React.FC = () => {
  return <ButtonStyle onClick={getData}>Data</ButtonStyle>;
};

export { DataButton };
