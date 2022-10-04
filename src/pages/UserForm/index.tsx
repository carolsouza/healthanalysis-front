import React from "react";
import TopBar from "../../components/TopBar";
import {
  ActionBtn,
  BtnLegend,
  ButtonDiv,
  ContentContainer,
  FormContainer,
  FormDiv,
  FormInputs,
  FormLabel,
  FormRadioInputs,
  FormRow,
  FormSelectInputs,
  FormSubtitle,
} from "./styles";

function UserForm() {
  return (
    <>
      <TopBar />
      <ContentContainer>
        <FormContainer>
          <FormSubtitle>
            Faça seu cadastro para começarmos a triagem da sua consulta
          </FormSubtitle>

          <FormRow>
            <FormDiv divWidth="100%">
              <FormLabel>Seu nome completo</FormLabel>
              <FormInputs />
            </FormDiv>
          </FormRow>
          <FormRow>
            <FormDiv divWidth="100%">
              <FormLabel>E-mail</FormLabel>
              <FormInputs />
            </FormDiv>
          </FormRow>
          <FormRow>
            <FormDiv divWidth="200px">
              <FormLabel>Data de Nascimento</FormLabel>
              <FormInputs />
            </FormDiv>
            <FormDiv divWidth="180px">
              <FormLabel>Estado</FormLabel>
              <FormSelectInputs>
                <option value="teste">teste</option>
              </FormSelectInputs>
            </FormDiv>
            <FormDiv divWidth="180px">
              <FormLabel>Cidade</FormLabel>
              <FormSelectInputs>
                <option value="teste">teste</option>
              </FormSelectInputs>
            </FormDiv>
          </FormRow>
          <FormRow>
            <FormDiv divWidth="350px">
              <FormLabel>Sexo</FormLabel>
              <FormRow>
                <FormRadioInputs type="radio" id="female" name="gender"/>
                <FormLabel htmlFor="female" >Feminino</FormLabel>
                <FormRadioInputs type="radio" id="male" name="gender"/>
                <FormLabel htmlFor="male" >Masculino</FormLabel>
                <FormRadioInputs type="radio" id="other" name="gender"/>
                <FormLabel htmlFor="other">Outro</FormLabel>
              </FormRow>
            </FormDiv>
          </FormRow>
          <ButtonDiv>
            <ActionBtn>Vamos começar!</ActionBtn>
            <BtnLegend>Você será redirecionado para o aplicativo Health Records</BtnLegend>
          </ButtonDiv>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default UserForm;
