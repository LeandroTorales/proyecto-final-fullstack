import styled from "styled-components";
import ProfileUser from "../../components/profile/ProfileUser";
import ProfileUserInfo from "../../components/profile/ProfileUserInfo";

const ContainerMainProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-height: 100vh;
  padding-top: 56px;
`;

const ContainerUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 60vh;
  background: white;
  color: black;
  width: 97%;
  @media (max-width: 1039px) {
    align-content: flex-start;
  }
`;

const Profile = () => {
  return (
    <ContainerMainProfile>
      <ContainerUserInfo>
        <ProfileUser></ProfileUser>
        <ProfileUserInfo></ProfileUserInfo>
      </ContainerUserInfo>
    </ContainerMainProfile>
  );
};

export default Profile;
