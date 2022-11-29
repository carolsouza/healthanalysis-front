import React, { useState, useEffect } from "react";
import TopBar from "../../components/TopBar";
import Modals from "../../components/Modals";
// import { ContentContainer } from "../../styles/global";
import {
  CardContainer,
  ContentContainer,
  CardTicket,
  CardHeader,
  CardDate,
  PatientName,
  LinkLogOut,
  OptionsTab,
  TabButton,
  ConsultasContainer,
  FichaContainer,
  VerMaisButton,
  QuestionDiv,
  AwnserDiv,
  LabelRedirect,
  LegendRedirect,
  EmptyResultsDiv,
  QuestionsContainer,
} from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import moment from "moment";
import { ConsultasProps } from "../../interfaces/consultas";
import { AnameseProps } from "../../interfaces/anamneses";
import { ActionBtn } from "../../styles/global";
import { InvalidText } from "../../components/Modals/styles";

interface UserProps {
  name: string;
  email: string;
}

function Home() {
  const [user, setUser] = useState<UserProps>();
  const isLogged =
    localStorage.getItem("user") || localStorage.setItem("user", "-1");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [consultas, setConsultas] = useState<ConsultasProps[]>([]);

  const [ficha, setFicha] = useState<AnameseProps | null>(null);
  const [consultasIsOpen, setConsultasIsOpen] = useState<boolean>(true);

  const [selectedTriagem, setSelectedTriagem] = useState<ConsultasProps>();

  let navigate = useNavigate();

  function handleTriagem(id: number) {
    console.log(id);
    const selected = consultas.find(
      (consulta: ConsultasProps) => id === consulta.id
    );

    if (selected) {
      setSelectedTriagem(selected);
    }

    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function clearTK() {
    console.log("ué");
    localStorage.removeItem("app-token");
    localStorage.removeItem("user");

    navigate("/login");
  }

  useEffect(() => {
    console.log(user);

    const usuario = localStorage.getItem("user");
    let infos = { nome: "", email: "" };
    console.log(usuario);

    if (usuario) {
      infos = JSON.parse(usuario);
      setUser({ name: infos.nome || "-1", email: infos.email });
    } else {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (user) {
      api
        .get("/consultas-email", { params: { email: user.email } })
        .then((res) => {
          setConsultas(res.data);
        });

      api.get("/anamnese", { params: { email: user.email } }).then((res) => {
        console.log(res);
        setFicha(res.data.length === 0 ? null : res.data[0]);
      });
    }
  }, [user]);

  useEffect(() => {
    if (isLogged === "-1") {
      return navigate("/login");
    }
  }, [isLogged]);

  return (
    <>
      <TopBar isLogged={true} />
      <Modals
        isOpen={modalIsOpen}
        closeModal={closeModal}
        consulta={selectedTriagem}
      />
      <LinkLogOut href="/login" onClick={clearTK}>
        Log Out
      </LinkLogOut>
      <ContentContainer>
        <PatientName>{user?.name}</PatientName>
        <OptionsTab>
          <TabButton onClick={() => setConsultasIsOpen(true)}>
            Consultas
          </TabButton>
          <TabButton onClick={() => setConsultasIsOpen(false)}>Ficha</TabButton>
        </OptionsTab>
        <ConsultasContainer isOpen={consultasIsOpen}>
          {consultas.length === 0 ? (
            <EmptyResultsDiv isEmpty={consultas.length === 0}>
              <LabelRedirect>Você não possui consultas.</LabelRedirect>
              <ActionBtn>Marcar consulta</ActionBtn>
              <LegendRedirect>
                *Você será redirecionado para o aplicativo Health Records
              </LegendRedirect>
            </EmptyResultsDiv>
          ) : (
            consultas.map((consulta) => {
              return (
                <CardContainer
                  key={consulta.id}
                  onClick={() => handleTriagem(consulta.id)}
                >
                  <CardHeader>
                    <CardTicket>#{consulta.id} - </CardTicket>
                    <CardDate>
                      {`${moment(consulta.data_consulta).format(
                        "DD-MM-YYYY"
                      )} - ${moment(consulta.horario).format("HH:mm")}`}
                    </CardDate>
                    {!consulta.status && <InvalidText>Cancelada</InvalidText>}
                  </CardHeader>
                  <hr></hr>
                  <h3>{consulta.especialidade}</h3>
                  <VerMaisButton>Clique para ver mais</VerMaisButton>
                </CardContainer>
              );
            })
          )}
        </ConsultasContainer>
        <FichaContainer isOpen={consultasIsOpen}>
          {ficha === null ? (
            <EmptyResultsDiv isEmpty={!ficha}>
              <LabelRedirect>Você não possui uma ficha.</LabelRedirect>
              <ActionBtn>Cadastrar ficha</ActionBtn>
              <LegendRedirect>
                *Você será redirecionado para o aplicativo Health Records
              </LegendRedirect>
            </EmptyResultsDiv>
          ) : (
            <QuestionsContainer>
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
          )}
        </FichaContainer>
      </ContentContainer>
    </>
  );
}

export default Home;
