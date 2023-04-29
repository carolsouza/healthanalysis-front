import React, { useEffect, useState } from "react";
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
import LoadingBackground from "../../components/Loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const [listUFs, setListUFs] = useState([]);
  const [listCities, setListCities] = useState([]);
  const [userValues, setUserValues] = useState<UserProps>({
    nome: "",
    senha: "",
    UF: "",
    dataNascimento: "",
    cidade: "",
    genero: "",
    email: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(userValues);
    e.preventDefault();
    setIsLoading(true);

    api
      .post("/users", {
        ...userValues,
      })
      .then((response) => {
        const { data } = response;
        if (data) {
          const userInfos = {
            email: data.email,
            nome: data.nome,
          };
          localStorage.setItem("app-token", data.token);
          localStorage.setItem("user", JSON.stringify(userInfos));
          setValidationError("");
          navigate("/home");
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 400) {
          setValidationError(error.response.data);
        }
        setIsLoading(false);
      });
  };

  function handleState(uf) {
    console.log("SELECIONADO", uf);

    setUserValues({ ...userValues, UF: uf.target.value });

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

  function handleRadios(e) {
    setUserValues({ ...userValues, genero: e.target.value });
  }

  useEffect(() => {
    const usuario = localStorage.getItem("user");

    if (usuario) {
      navigate("/home");
    }

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
      <TopBar isLogged={false} />
      <LoadingBackground isLoading={isLoading}></LoadingBackground>
      <ContentContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormSubtitle>Faça seu cadastro para começarmos!</FormSubtitle>

            <FormRow>
              <FormDiv divWidth="100%">
                <FormLabel>Seu nome completo</FormLabel>
                <input
                  name="nome"
                  required
                  onChange={(e) =>
                    setUserValues({ ...userValues, nome: e.target.value })
                  }
                />
              </FormDiv>
            </FormRow>
            <FormRow>
              <FormDiv divWidth="100%">
                <FormLabel>E-mail</FormLabel>
                <input
                  name="email"
                  required
                  onChange={(e) =>
                    setUserValues({ ...userValues, email: e.target.value })
                  }
                />
              </FormDiv>
            </FormRow>
            <FormRow>
              <FormDiv divWidth="100%">
                <FormLabel>Senha</FormLabel>
                <input
                  name="senha"
                  type="password"
                  required
                  onChange={(e) =>
                    setUserValues({ ...userValues, senha: e.target.value })
                  }
                />
              </FormDiv>
            </FormRow>
            <FormRow>
              <FormDiv divWidth="200px">
                <FormLabel>Data de Nascimento</FormLabel>
                <input
                  type="date"
                  name="dataNascimento"
                  required
                  onChange={(e) =>
                    setUserValues({
                      ...userValues,
                      dataNascimento: e.target.value,
                    })
                  }
                />
              </FormDiv>
              <FormDiv divWidth="180px">
                <FormLabel>Estado</FormLabel>
                <select
                  name="UF"
                  className="select-input"
                  onChange={handleState}
                  required
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
                <select
                  name="cidade"
                  className="select-input"
                  onChange={(e) =>
                    setUserValues({ ...userValues, cidade: e.target.value })
                  }
                  required
                >
                  <option value="">Selecione...</option>
                  {listCities.map((city: CityProps) => {
                    return (
                      <option key={city.id} value={city.nome}>
                        {city.nome}
                      </option>
                    );
                  })}
                </select>
              </FormDiv>
            </FormRow>
            <FormRow>
              <FormDiv divWidth="350px">
                <FormLabel>Sexo</FormLabel>
                <FormRow>
                  <input
                    type="radio"
                    id="female"
                    name="genero"
                    value="F"
                    onChange={handleRadios}
                  />
                  <FormLabel htmlFor="female">Feminino</FormLabel>
                  <input
                    type="radio"
                    id="male"
                    name="genero"
                    value="M"
                    onChange={handleRadios}
                  />
                  <FormLabel htmlFor="male">Masculino</FormLabel>
                  <input
                    type="radio"
                    id="other"
                    name="genero"
                    value="O"
                    onChange={handleRadios}
                  />
                  <FormLabel htmlFor="other">Outro</FormLabel>
                </FormRow>
              </FormDiv>
            </FormRow>
            <ButtonDiv>
              <InvalidUserText>{validationError}</InvalidUserText>
              <ActionBtn type="submit">Vamos começar!</ActionBtn>

              <BtnLegend>
                Já possui uma conta? <Link to="/login">Logar-se</Link>
              </BtnLegend>
            </ButtonDiv>
          </form>
        </FormContainer>
      </ContentContainer>
    </>
  );
}

export default UserForm;
