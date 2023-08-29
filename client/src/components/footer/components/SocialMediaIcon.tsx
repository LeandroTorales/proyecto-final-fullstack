import React from "react";
import styled from "styled-components";

interface Props {
  icon: any;
  to: string;
}

const Anchor = styled.a`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  background-color: #646464;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  -o-border-radius: 50%;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
    color: rgb(255, 255, 255);
  }
`;

const SocialMediaIcon = ({ icon, to }: Props) => {
  return (
    <>
      <Anchor href={to} target="blank">
        {icon}
      </Anchor>
    </>
  );
};

export default SocialMediaIcon;
