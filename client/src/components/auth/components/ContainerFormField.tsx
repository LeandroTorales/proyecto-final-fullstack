import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  classname?: any;
}

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 25px;
`;

const ContainerFormField = ({ children, classname }: Props) => {
  return <ContainerStyled className={classname}>{children}</ContainerStyled>;
};

export default ContainerFormField;
