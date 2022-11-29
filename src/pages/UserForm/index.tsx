import React, { useEffect, useState } from "react";

import { Formik, ErrorMessage, Field, Form, FormikHelpers } from "formik";
import * as yup from "yup";

import api from "../../services/api";
import { useNavigate } from "react-router-dom";

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
  InvalidUserText,
} from "../../styles/global";
import axios from "axios";
import { Link } from "react-router-dom";

interface UserProps {
  nome: string;
  senha: string;
  UF: string;
  dataNascimento: string;
  cidade: string;
  genero: string;
  email: string;
}

interface UFProps {
  id: number;
  sigla: string;
  nome: string;
  regiao: {
    id: number;
    sigla: string;
    nome: string;
  };
}

interface CityProps {
  id: number;
  nome: string;
}

function UserForm() {
  const [validationError, setValidationError] = useState<string>("");
  // const [uf, setUF] = useState("");
  const [listUFs, setListUFs] = useState([]);
  const [listCities, setListCities] = useState([]);

  let navigate = useNavigate();

  const initialValues: UserProps = {
    nome: "",
    senha: "",
    UF: "",
    dataNascimento: "",
    cidade: "",
    genero: "",
    email: "",
  };

  const validations = yup.object().shape({
    nome: yup
      .string()
      .min(5, "Usuários precisam ter pelo menos 5 dígitos")
      .max(12)
      .required("Usuário necessário!"),
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
    values: UserProps,
    { setSubmitting }: FormikHelpers<UserProps>
  ) => {
    console.log(values);
    setSubmitting(false);

    // api
    //   .post("/users", {
    //     ...values,
    //   })
    //   .then((response) => {
    //     const { data } = response;
    //     if (data) {
    //       localStorage.setItem("app-token", data.token);
    //       localStorage.setItem("user", values.email);
    //       setValidationError("");
    //       navigate("/home");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     if (error.response.status === 401 || error.response.status === 400) {
    //       setValidationError(error.response.data);
    //     }
    //   });
  };

  function handleState(uf) {
    console.log("SELECIONADO", uf);
    if (uf) {
      const populatedCities = axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf.target.value}/municipios`
      );
      populatedCities.then((res) => {
        setListCities(res.data);
      });
    } else {
      console.log("nenhum estado selecionado");
    }
  }

  useEffect(() => {
    const ufList = axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );

    ufList.then((res) => {
      console.log(res);
      setListUFs(res.data);
    });
  }, []);

  return (
    <>
      <TopBar />
      <ContentContainer>
        <FormContainer>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validations}
          >
            <Form>
              <FormSubtitle>
                Faça seu cadastro para começarmos a fazer a ficha da sua
                consulta
              </FormSubtitle>

              <FormRow>
                <FormDiv divWidth="100%">
                  <FormLabel>Seu nome completo</FormLabel>
                  <Field name="nome" required />
                  <ErrorMessage
                    component="span"
                    name="user"
                    className="login-error"
                  />
                </FormDiv>
              </FormRow>
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
              <FormRow>
                <FormDiv divWidth="200px">
                  <FormLabel>Data de Nascimento</FormLabel>
                  <Field type="date" name="dataNascimento" required />
                </FormDiv>
                <FormDiv divWidth="180px">
                  <FormLabel>Estado</FormLabel>
                  <select
                    name="UF"
                    className="select-input"
                    onChange={handleState}
                  >
                    <option value="">Selecione...</option>
                    {listUFs.map((uf: UFProps) => {
                      return (
                        <option key={uf.id} value={uf.sigla}>
                          {uf.nome}
                        </option>
                      );
                    })}
                  </select>
                </FormDiv>
                <FormDiv divWidth="180px">
                  <FormLabel>Cidade</FormLabel>
                  <Field as="select" name="cidade" className="select-input">
                    <option value="">Selecione...</option>
                    {listCities.map((city: CityProps) => {
                      return (
                        <option key={city.id} value={city.nome}>
                          {city.nome}
                        </option>
                      );
                    })}
                  </Field>
                </FormDiv>
              </FormRow>
              <FormRow>
                <FormDiv divWidth="350px">
                  <FormLabel>Sexo</FormLabel>
                  <FormRow>
                    <Field type="radio" id="female" name="genero" value="F" />
                    <FormLabel htmlFor="female">Feminino</FormLabel>
                    <Field type="radio" id="male" name="genero" value="M" />
                    <FormLabel htmlFor="male">Masculino</FormLabel>
                    <Field type="radio" id="other" name="genero" value="O" />
                    <FormLabel htmlFor="other">Outro</FormLabel>
                  </FormRow>
                </FormDiv>
              </FormRow>
              <ButtonDiv>
                <InvalidUserText>{validationError}</InvalidUserText>
                <ActionBtn type="submit">Vamos começar!</ActionBtn>
                <BtnLegend>
                  Você será redirecionado para o aplicativo Health Records
                </BtnLegend>

                <BtnLegend>
                  Já possui uma conta? <Link to="/login">Logar-se</Link>
                </BtnLegend>
              </ButtonDiv>
            </Form>
          </Formik>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default UserForm;
