import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import { AnameseProps } from "../../interfaces/anamneses";
import { ConsultasProps } from "../../interfaces/consultas";
import api from "../../services/api";
import {
  ContentContainer,
  FormContainer,
  InvalidUserText,
} from "../../styles/global";
import { AwnserDiv, QuestionDiv, QuestionsContainer } from "../Home/styles";
import {
  ConsultaDate,
  ContainerTitle,
  FichaContent,
  InputLegend,
  QuestionsTitle,
  SearchArea,
  SearchButton,
  UserContent,
} from "./styles";
import LoadingBackground from "../../components/Loading";

import moment from "moment";

interface UserProps {
  email: string;
  name: string;
}

function SearchResults() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [consulta, setConsulta] = useState<ConsultasProps>({
    id: -1,
    especialidade: "",
    data_consulta: new Date(),
    horario: new Date(),
    dor_cabeca: false,
    febre: false,
    nausea: false,
    campo_extra: "",
    status: true,
  });
  const [ficha, setFicha] = useState<AnameseProps>();
  const [error, setError] = useState("");
  const [user, setUser] = useState<UserProps>({ email: "", name: "" });

  async function handleSearch() {
    console.log(searchTerm);

    const ids = searchTerm.split("@");
    console.log(ids);

    setConsulta({ ...consulta, id: -1 });

    setIsLoading(true);

    await api
      .get("/consultas", { params: { id: ids[0], userId: ids[1] } })
      .then(async (res) => {
        setConsulta(res.data.consulta);
        setUser({ email: res.data.email, name: "" });

        await getAnamnese(res.data.email);
        await getUser(ids[1]);
        setError("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err.response?.data) setError(err.response.data);
        setIsLoading(false);
        return;
      });

    console.log(user);
  }

  async function getAnamnese(email: string) {
    await api
      .get("/anamnese", { params: { email: email } })
      .then((res) => {
        console.log(res.data);
        setFicha(res.data[0]);
      })
      .catch((err) => {
        setError(err.response.data);
      });
  }

  async function getUser(id) {
    await api
      .get(`/users/${id}`)
      .then((res) => setUser({ email: res.data.email, name: res.data.nome }))
      .catch((err) => {
        setError(err.response.data);
      });
  }

  useEffect(() => {}, []);

  return (
    <>
      <TopBar isLogged={false} page="procurar" />
      <LoadingBackground isLoading={isLoading}></LoadingBackground>
      <ContentContainer flexDirection={"column"}>
        <FormContainer divWidth="500px" divMargin="20px">
          <ContainerTitle>Pesquise a consulta de um paciente</ContainerTitle>
          <SearchArea>
            <input
              name="search"
              type="text"
              placeholder="Ex.: 12@123"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton onClick={handleSearch}>Buscar</SearchButton>
          </SearchArea>
          <InvalidUserText>{error}</InvalidUserText>
          <InputLegend>
            Em caso de dúvidas verificar o e-mail informativo
          </InputLegend>
        </FormContainer>
        <UserContent hasData={consulta?.id !== -1 ? true : false}>
          <QuestionsContainer>
            <h2>{user?.name}</h2>
            <h3>{consulta?.especialidade}</h3>
            <ConsultaDate>
              {moment(consulta?.data_consulta).format("DD-MM-YYYY HH:mm")}
            </ConsultaDate>
            <QuestionDiv>Teve dor de cabeça?</QuestionDiv>
            <AwnserDiv>{consulta?.dor_cabeca ? "Sim" : "Não"}</AwnserDiv>
            <QuestionDiv>Sentiu febre?</QuestionDiv>
            <AwnserDiv>{consulta?.febre ? "Sim" : "Não"}</AwnserDiv>
            <QuestionDiv>Teve náusea?</QuestionDiv>
            <AwnserDiv>{consulta?.nausea ? "Sim" : "Não"}</AwnserDiv>
            <QuestionDiv>
              Alguma informação que acredite ser relevante que não tenha sido
              mencionada?
            </QuestionDiv>
            <AwnserDiv>{consulta?.campo_extra}</AwnserDiv>
          </QuestionsContainer>
          <FichaContent>
            <QuestionsContainer>
              <QuestionsTitle>Anamnese</QuestionsTitle>
              <QuestionDiv>Possui diabetes na família?</QuestionDiv>
              <AwnserDiv>{ficha?.diabetes ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Antecedentes oncológicos?</QuestionDiv>
              <AwnserDiv>{ficha?.oncologico ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Antecedentes cardíacos?</QuestionDiv>
              <AwnserDiv>{ficha?.cardiaco ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Você é tabagista(fumante)?</QuestionDiv>
              <AwnserDiv>{ficha?.tabagista ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>
                Você é etilista (vício em bebidas alcoólicas)?
              </QuestionDiv>
              <AwnserDiv>{ficha?.etilista ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Realiza exercícios físicos?</QuestionDiv>
              <AwnserDiv>{ficha?.exercio_fisico ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Já foi infectado pela COVID?</QuestionDiv>
              <AwnserDiv>{ficha?.covid ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Faz uso de medicação? </QuestionDiv>
              <AwnserDiv>{ficha?.uso_medicacao ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>Data do último exame realizado?</QuestionDiv>
              <AwnserDiv>
                {moment(ficha?.exame_period_ultim).format("DD-MM-YYYY")}
              </AwnserDiv>
              <QuestionDiv>Possui alergia a alguma medicação?</QuestionDiv>
              <AwnserDiv>{ficha?.alergia_med ? "Sim" : "Não"}</AwnserDiv>
              <QuestionDiv>
                Caso possua alergia a alguma medicação, as descreva, por
                gentileza.
              </QuestionDiv>
              <AwnserDiv>{ficha?.alergia_med_nome}</AwnserDiv>
              <QuestionDiv>
                Como você define o funcionamento do seu intestino?
              </QuestionDiv>
              <AwnserDiv>{ficha?.funcionamento_intestino}</AwnserDiv>
              <QuestionDiv>Caso de hipertensão na família?</QuestionDiv>
              <AwnserDiv>{ficha?.hipertensao ? "Sim" : "Não"}</AwnserDiv>
            </QuestionsContainer>
          </FichaContent>
        </UserContent>
      </ContentContainer>
    </>
  );
}

export default SearchResults;
