import styled from "styled-components";

interface UserContentProps {
  hasData: boolean;
}

export const ContainerTitle = styled.h4`
  color: #fff;
  width: 100%;
  text-align: center;
`;

export const SearchInput = styled.input``;

export const UserContent = styled.div<UserContentProps>`
  display: ${(props) => (props.hasData ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  color: #000;
`;

export const SearchArea = styled.div`
  display: flex;
  width: 100%;
  padding: 5px;
  align-items: center;
`;
export const SearchButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  height: 41px;
  background-color: var(--green);
  text-align: center;
  color: #fff;
  font-size: 1rem;
  margin-left: -5px;
  cursor: pointer;
`;

export const ConsultaContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const FichaContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
`;

export const InputLegend = styled.p`
  font-size: 0.8rem;
  color: #fff;
`;

export const QuestionsTitle = styled.h3`
  text-align: center;
  width: 100%;
  margin-bottom: 15px;
`;

export const ConsultaDate = styled.p`
  margin-bottom: 15px;
`;
