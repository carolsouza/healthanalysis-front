import { CentralizeContainer, TopContainer } from "./styles";
import analysisLogo from "../../images/Logo.png";

import { useNavigate } from "react-router-dom";

const TopBar: React.FC = () => {
  let navigate = useNavigate();

  return (
    <>
      <TopContainer>
        <CentralizeContainer>
          <img src={analysisLogo} alt="logo"></img>
        </CentralizeContainer>
      </TopContainer>
    </>
  );
};

export default TopBar;
