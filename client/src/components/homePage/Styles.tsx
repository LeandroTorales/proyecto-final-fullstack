import styled from "styled-components";

export const ContainerTextPresentation = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 10px 25px;
  gap: 5px;
  .container--division {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    height: 100%;
    width: 100%;
  }
  h2 {
    font-size: clamp(20px, 4vw, 40px);
  }
  @media (max-width: 850px) {
    .container--division {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ContainerImgGames = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  :nth-child(1) {
    position: relative;
    left: 180px;
  }
  :nth-child(2) {
    position: relative;
  }
  :nth-child(3) {
    position: relative;
    right: 180px;
  }
  @media (max-width: 850px) {
    :nth-child(1) {
      position: relative;
      top: 200px;
      left: 75px;
    }
    :nth-child(2) {
      position: relative;
    }
    :nth-child(3) {
      position: relative;
      bottom: 200px;
      right: 75px;
    }
  }
`;
