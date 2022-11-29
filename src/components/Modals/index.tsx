import {
  AwnserDiv,
  BtnCancel,
  BtnClose,
  CancelDiv,
  ConsultaDate,
  InvalidText,
  Modal,
  ModalContent,
  ModalHeader,
  OpacityBg,
  QuestionDiv,
  SpecialityName,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { ConsultasProps } from "../../interfaces/consultas";
import moment from "moment";
import api from "../../services/api";
import { useState } from "react";

interface ModalsProps {
  isOpen: boolean;
  closeModal: any;
  consulta: ConsultasProps | undefined;
}

const Modals: React.FC<ModalsProps> = ({ isOpen, closeModal, consulta }) => {
  const [message, setMessage] = useState("");
  const [consultaStatus, setConsultaStatus] = useState(consulta?.status);

  async function handleCancel() {
    api.patch(`/consultas/${consulta?.id}`).then((res) => {
      console.log(res);

      setMessage("Consulta cancelada!");
      setConsultaStatus(false);
    });
  }

  return (
    <>
      <OpacityBg
        isOpen={isOpen}
        onClick={() => {
          closeModal();
        }}
      ></OpacityBg>
      <Modal isOpen={isOpen}>
        <BtnClose
          onClick={() => {
            closeModal();
          }}
        >
          {" "}
          <IoMdClose />
        </BtnClose>
        <ModalHeader>
          <SpecialityName>{consulta?.especialidade}</SpecialityName>
          <ConsultaDate>
            {moment(consulta?.data_consulta).format("DD-MM-YYYY HH:mm")}
          </ConsultaDate>
          {!consultaStatus && <InvalidText>Cancelada</InvalidText>}
        </ModalHeader>
        <ModalContent>
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
        </ModalContent>
        {consultaStatus ? (
          <CancelDiv>
            <BtnCancel onClick={handleCancel}>Cancelar Consulta</BtnCancel>
          </CancelDiv>
        ) : (
          <InvalidText>{message}</InvalidText>
        )}
      </Modal>
    </>
  );
};

export default Modals;
