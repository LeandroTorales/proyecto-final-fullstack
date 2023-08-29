import styled from "styled-components";
import { ContainerImgGames, ContainerTextPresentation } from "./Styles";
import ImgGame from "./ImgGame";

const ContainerMain = styled.div`
  height: 100vh;
  padding-top: 56px;
  background-color: aqua;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-image: url("https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?q=h_1194,w_2121,x_0,y_0");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  border-bottom: 1px solid black;

  .container--mainGames {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    color: white;
    gap: 20px;
  }

  @media (max-width: 850px) {
    div {
      flex-direction: column;
      gap: 5px;
    }
    div > div {
      width: 100%;
      height: 30%;
    }

    .container--mainGames {
      width: 100%;
      height: 70%;
      gap: 80px;
    }
  }
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(9px);
  background-color: #0000007d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SectionPresentation = () => {
  return (
    <ContainerMain className="container">
      <BackgroundFilter>
        <ContainerTextPresentation>
          <div className="container--division">
            <h2>Bienvenido a nuestra tienda de videojuegos</h2>
            <h2>Encontrarás los mejores precios</h2>
            <h2>Para todas las consolas del mercado</h2>
          </div>
        </ContainerTextPresentation>
        <div className="container--mainGames">
          <h2>INMENSA VARIEDAD DE VIDEOJUEGOS</h2>
          <ContainerImgGames>
            <ImgGame
              altProp="Juego 1 presentación"
              img="https://newlevel.com.ar/wp-content/uploads/2022/10/Red-Dead-Redemption-2-600x600.png"
            />
            <ImgGame
              altProp="Juego 2 presentación"
              img="https://newlevel.com.ar/wp-content/uploads/2022/07/FIFA-23-PS5.png"
            />
            <ImgGame
              altProp="Juego 3 presentación"
              img="https://newlevel.com.ar/wp-content/uploads/2022/04/Elden-Ring-PS4.png"
            />
          </ContainerImgGames>
        </div>
      </BackgroundFilter>
    </ContainerMain>
  );
};

export default SectionPresentation;
