import styled from "styled-components";

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
  }
`;
