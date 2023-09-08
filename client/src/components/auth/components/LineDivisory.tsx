import React from "react";
import styled from "styled-components";

const LineDivisoryStyled = styled.div`
  height: 2px;
  background: grey;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

const LineDivisory = () => {
  return <LineDivisoryStyled />;
};

export default LineDivisory;
