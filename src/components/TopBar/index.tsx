import { CentralizeContainer, MenuContainer, TopContainer } from "./styles";
import analysisLogo from "../../images/Logo.png";

import { Link, useNavigate } from "react-router-dom";

interface TopBarProps {
  isLogged: boolean;
  page?: string;
}

const TopBar: React.FC<TopBarProps> = ({ isLogged, page }) => {
  let navigate = useNavigate();

  return (
    <>
      <TopContainer>
        <CentralizeContainer>
          <img src={analysisLogo} alt="logo"></img>
          {page === "procurar" ? (
            <MenuContainer isLogged={isLogged}>
              <Link style={{ marginRight: "30px" }} to="/login">
                Logar
              </Link>
              <Link to="/dashboard">Dashboard</Link>
            </MenuContainer>
          ) : page === "dashboard" ? (
            <MenuContainer isLogged={isLogged}>
              <Link style={{ marginRight: "30px" }} to="/procurar">
                Procurar consulta
              </Link>
              <Link to="/logar">Logar</Link>
            </MenuContainer>
          ) : (
            <MenuContainer isLogged={isLogged}>
              <Link style={{ marginRight: "30px" }} to="/procurar">
                Procurar consulta
              </Link>
              <Link to="/dashboard">Dashboard</Link>
            </MenuContainer>
          )}
        </CentralizeContainer>
      </TopContainer>
    </>
  );
};

export default TopBar;
