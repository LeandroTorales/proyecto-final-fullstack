import React from "react";
import styled from "styled-components";

interface Props {
  reactICon: any;
  txt: string;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  svg {
    font-size: 2rem;
    color: white;
  }
`;

const Shortcuts = ({ reactICon, txt }: Props) => {
  return (
    <>
      <Container>
        {reactICon}
        <p>{txt}</p>
      </Container>
    </>
  );
};

export default Shortcuts;
