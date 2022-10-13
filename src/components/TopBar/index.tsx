import { CentralizeContainer, TopContainer } from "./styles";
import analysisLogo from "../../images/Logo.png";

import { useNavigate } from 'react-router-dom';

const TopBar: React.FC = () => {

  let navigate = useNavigate()

  function clearTK() {

    console.log('ué')
    localStorage.removeItem('app-token')
    localStorage.removeItem('user')

    navigate('/login')
  }

  return (
    <>
      <TopContainer>
        <CentralizeContainer>
          <img src={analysisLogo} alt="logo" ></img>
          {/* <a href="/login" onClick={clearTK}>
            Log Out
          </a> */}
        </CentralizeContainer>
      </TopContainer>
    </>
  );
};

export default TopBar;
