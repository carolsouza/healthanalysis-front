import styled from "styled-components";

interface MenuContainerProps {
  isLogged: boolean;
}

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: var(--orange);
  width: 100vw;
  height: auto;
`;

export const CentralizeContainer = styled.div`
  display: flex;
  width: 95%;
  margin-top: 5px;
  height: 60px;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 780px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;

    img {
      width: 140px;
      text-align: center;
      border: 1px solid #red;
    }
  }
`;

export const MenuContainer = styled.div<MenuContainerProps>`
  display: ${(props) => (props.isLogged ? "none" : "flex")};
  justify-content: end;
  align-items: center;
  font-weight: bold;
  width: 300px;

  @media (max-width: 780px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
