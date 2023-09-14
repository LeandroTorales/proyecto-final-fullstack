import styled from "styled-components";
import Shortcuts from "./components/Shortcuts";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import SocialMediaIcon from "./components/SocialMediaIcon";

const ContainerMainFooter = styled.div`
  width: 100%;
  height: 350px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 20px 50px;
  flex-direction: column;
  justify-content: space-between;

  .wrapper {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .wrapper--shortcuts {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 50%;
    height: 100%;
    gap: 30px;
  }

  .wrapper--about {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    gap: 20px;
  }

  @media (max-width: 850px) {
    height: 600px;
    flex-direction: column;
    justify-content: space-evenly;
    .wrapper--about {
      width: 100%;
      height: 50%;
    }

    .wrapper--shortcuts {
      width: 100%;
      height: 50%;
    }
    .wrapper {
      flex-direction: column;
    }
  }
`;

const WrapperSocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Footer = () => {
  const date = new Date();

  return (
    <>
      <ContainerMainFooter>
        <div className="wrapper">
          <div className="wrapper--shortcuts">
            <Shortcuts reactICon={<FaLocationArrow />} txt={"Calle Falsa 123"} />
            <Shortcuts reactICon={<BsFillTelephoneFill />} txt={"+54 011 12345678"} />
            <Shortcuts reactICon={<AiTwotoneMail />} txt={"Leandrotorales1234@gmail.com"} />
          </div>
          <div className="wrapper--about">
            <div>
              <h2>Acerca de:</h2>
              <p>Esta página es un proyecto full stack, de caracter educativo.</p>
            </div>
            <WrapperSocialMedia>
              <SocialMediaIcon icon={<AiFillGithub />} to="https://github.com/LeandroTorales" />
              <SocialMediaIcon icon={<AiFillInstagram />} to="https://instagram.com/leandro.fd_" />
            </WrapperSocialMedia>
          </div>
        </div>
        <div>
          <p>
            Copyright {date.getFullYear()} ©GameMarket <br />
            Página hecha por Leandro Federico Torales
          </p>
        </div>
      </ContainerMainFooter>
    </>
  );
};

export default Footer;
