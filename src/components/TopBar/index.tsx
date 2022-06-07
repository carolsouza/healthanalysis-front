import { CentralizeContainer, TopContainer } from "./styles";
import analysisLogo from "../../images/Logo.png";

const TopBar: React.FC = () => {
  return (
    <>
      <TopContainer>
        <CentralizeContainer>
          <img src={analysisLogo} alt="logo" ></img>
        </CentralizeContainer>
      </TopContainer>
    </>
  );
};

export default TopBar;
