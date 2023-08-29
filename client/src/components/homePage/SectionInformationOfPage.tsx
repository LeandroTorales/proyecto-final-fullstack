import styled from "styled-components";
import imgTop1 from "../../images/pngTop1.png";
import shakeHands from "../../images/shackeHands.png";

const ContainerMainInformationPage = styled.div`
  min-height: calc(100vh - 56px);
  padding: 100px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 700;
    @media (max-width: 850px) {
      font-size: 1.9rem;
    }
  }
`;

const WrapperInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  gap: 40px;
  flex-wrap: wrap;
  height: 95%;
  font-size: 2.5rem;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    height: 200px;
  }

  @media (max-width: 850px) {
    flex-direction: column;
    font-size: 1.3rem;
    div {
      width: 400px;
    }
    padding: 10px 10px;
  }
`;

const ImgInformationPage = styled.img`
  width: 150px;
  @media (max-width: 850px) {
    width: 130px;
  }
`;

const SectionInformationOfPage = () => {
  return (
    <>
      <ContainerMainInformationPage>
        <h2>¿Quienes somos?</h2>
        <WrapperInformation>
          <div>
            <ImgInformationPage
              src="https://cdn.pixabay.com/photo/2018/09/05/06/19/gamer-zone-3655575_960_720.png"
              alt="Imagen Gamer Zone"
            />
            <span>Lideres en el sector</span>
          </div>
          <div>
            <ImgInformationPage src={imgTop1} alt="Imagen Gamer Zone" />
            <span>Apasionados por los videojuegos</span>
          </div>
          <div>
            <ImgInformationPage src={shakeHands} alt="Imagen Gamer Zone" />
            <span>En constante búsqueda del mejor precio</span>
          </div>
        </WrapperInformation>
      </ContainerMainInformationPage>
    </>
  );
};

export default SectionInformationOfPage;
