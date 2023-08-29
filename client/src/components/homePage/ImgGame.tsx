import React from "react";
import styled from "styled-components";

interface Props {
  altProp: string;
  children?: any;
  img: string;
}

const Img = styled.img`
  width: 300px;
  height: auto;
  @media (max-width: 850px) {
    width: 250px;
  }
`;

const ImgGame = ({ altProp, img }: Props) => {
  return <Img src={img} alt={altProp} />;
};

export default ImgGame;
