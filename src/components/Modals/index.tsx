import {
  AwnserDiv,
  BtnCancel,
  BtnClose,
  CancelDiv,
  ConsultaDate,
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

interface ModalsProps {
  isOpen: boolean;
  closeModal: any;
  consulta: ConsultasProps | undefined;
}

const Modals: React.FC<ModalsProps> = ({ isOpen, closeModal, consulta }) => {
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
        </ModalHeader>
        <ModalContent>
          <QuestionDiv>Teve dor de cabeça?</QuestionDiv>
          <AwnserDiv>{consulta?.dor_cabeca ? "Sim" : "Não"}</AwnserDiv>
          <QuestionDiv>Sentiu febre?</QuestionDiv>
          <AwnserDiv>{consulta?.febre ? "Sim" : "Não"}</AwnserDiv>
          <QuestionDiv>Teve nausea?</QuestionDiv>
          <AwnserDiv>{consulta?.nausea ? "Sim" : "Não"}</AwnserDiv>
          <QuestionDiv>
            Alguma informação que acredite ser relevante que não tenha sido
            mencionada?
          </QuestionDiv>
          <AwnserDiv>{consulta?.campo_extra}</AwnserDiv>
        </ModalContent>
        <CancelDiv>
          <BtnCancel>Cancelar Consulta</BtnCancel>
        </CancelDiv>
      </Modal>
    </>
  );
};

export default Modals;
