import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #FF9B25;
    --grafite: #202020;
    --cinza: rgb(53, 53, 53, 0.2);
    --black: #181818;
    --green: #29B985
  }
  ::-webkit-scrollbar { 
    display: none; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: var(--orange);
  }
  body,
  input,
  button,
  textarea {
    font-family: "Montserrat", sans-serif;
  }
`;

//Forms global styles
interface FormDivProps {
  divWidth?: string;
}

export const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  top: 0;
`;

export const FormContainer = styled.div<FormDivProps>`
  width: 90%;
  max-width: ${(props) => props.divWidth || "800px"};
  height: auto;
  max-height: 1000px;
  padding: 50px;
  background-color: var(--cinza);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const FormLabel = styled.label`
  color: #fff;
  margin-right: 10px;
`;

export const FormSubtitle = styled.h3`
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;

export const FormDiv = styled.div<FormDivProps>`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  width: ${(props) => props.divWidth};

  input,
  .select-input {
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin: 5px 0px;

    option {
      padding: 5px;
      border-radius: 0;
    }
  }

  input[type="radio"] {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  @media (max-width: 544px) {
    width: 100%;
    margin-right: 0px;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  flex-wrap: wrap;

  div:last-child {
    margin-right: 0px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ActionBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 40%;
  font-weight: bold;
  background-color: var(--green);
  text-align: center;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 10px;
  cursor: pointer;

  @media (max-width: 544px) {
    width: 100%;
  }
`;

export const BtnLegend = styled.p`
  color: #fff;
  text-align: center;
`;

export const InvalidUserText = styled.p`
  color: red;
  font-weight: bold;
  width: 100%;
  text-align: center;
  padding: 5px;
`;
