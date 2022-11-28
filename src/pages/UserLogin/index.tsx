import React, { useState } from "react";

import { Formik, ErrorMessage, Field, Form, FormikHelpers } from "formik";
import * as yup from "yup";

import api from "../../services/api";

import TopBar from "../../components/TopBar";
import {
  ActionBtn,
  BtnLegend,
  ButtonDiv,
  ContentContainer,
  FormContainer,
  FormDiv,
  FormLabel,
  FormRow,
  FormSubtitle,
} from "../../styles/global";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface UserLoginProps {
  senha: string;
  email: string;
}

function UserLogin() {
  const [validationError, setValidationError] = useState<string>("");

  let navigate = useNavigate();

  const initialValues: UserLoginProps = {
    senha: "",
    email: "",
  };

  const validations = yup.object().shape({
    email: yup
      .string()
      .email()
      .min(5, "Digite um e-mail válido")
      .max(50)
      .required("E-mail necessário!"),
    senha: yup
      .string()
      .min(3, "Digite uma senha válida")
      .max(50)
      .required("Senha necessária!"),
  });

  const handleSubmit = async (
    values: UserLoginProps,
    { setSubmitting }: FormikHelpers<UserLoginProps>
  ) => {
    setSubmitting(false);

    api
      .post("/auth", {
        ...values,
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          const userInfos = {
            email: data.users.email,
            nome: data.users.nome,
          };
          localStorage.setItem("app-token", data.token);
          localStorage.setItem("user", JSON.stringify(userInfos));
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 400) {
          setValidationError("Usuário ou senha inválidos!");
        }
      });

    navigate("/home");
  };

  return (
    <>
      <TopBar />
      <ContentContainer>
        <FormContainer divWidth="500px">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <Form>
              <FormSubtitle>
                Entre em sua conta para visualizar suas consultas
              </FormSubtitle>

              <FormRow>
                <FormDiv divWidth="100%">
                  <FormLabel>E-mail</FormLabel>
                  <Field name="email" required />
                </FormDiv>
              </FormRow>
              <FormRow>
                <FormDiv divWidth="100%">
                  <FormLabel>Senha</FormLabel>
                  <Field name="senha" type="password" required />
                </FormDiv>
              </FormRow>

              <ButtonDiv>
                <ActionBtn type="submit">Entrar</ActionBtn>

                <BtnLegend>
                  Não possui uma conta?{" "}
                  <Link to="/cadastrar">Cadastrar-se</Link>
                </BtnLegend>
              </ButtonDiv>
            </Form>
          </Formik>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default UserLogin;
