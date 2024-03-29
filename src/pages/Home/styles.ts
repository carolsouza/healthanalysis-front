import styled from "styled-components";

interface OpenDivProps {
  isOpen: boolean;
}

interface EmptyResultsProps {
  isEmpty: boolean;
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  top: 0;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const PatientName = styled.h1`
  padding: 10px;
  color: #fff;
  border-bottom: 1px solid #181818;
  width: 50%;
  text-align: center;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CardDate = styled.p`
  margin-right: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 4px 4px 8px #888888;
  margin-top: 20px;
`;

export const CardTicket = styled.h4`
  display: inline;
  margin-right: 5px;
`;

export const LinkLogOut = styled.a`
  color: #fff;
  position: fixed;
  top: 0;
  right: 0;
  text-align: end;
  padding: 20px;
  text-decoration: none;
  font-weight: bold;
  z-index: 1;
`;

export const OptionsTab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TabButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 10px 20px;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const VerMaisButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  width: 100%;
  text-align: end;
`;

export const ConsultasContainer = styled.div<OpenDivProps>`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
`;

export const FichaContainer = styled.div<OpenDivProps>`
  display: ${(props) => (props.isOpen ? "none" : "flex")};
  flex-direction: column;
  width: 50%;
  min-width: 500px;
  height: auto;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  padding: 30px;
  box-shadow: 4px 4px 8px #888888;
  margin-top: 10px;

  h2 {
    text-align: center;
  }
`;

export const QuestionDiv = styled.h5`
  font-weight: bold;
  color: #000;
  border-bottom: 1px solid #000;
`;

export const AwnserDiv = styled.p`
  color: #000;
  padding: 5px;
`;

export const EmptyResultsDiv = styled.div<EmptyResultsProps>`
  display: ${(props) => (props.isEmpty ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const LabelRedirect = styled.p`
  color: #fff;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
`;

export const LegendRedirect = styled.p`
  color: #fff;
  font-size: 0.7rem;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  margin-top: -5px;
`;
