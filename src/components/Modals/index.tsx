import { BtnClose, Modal, OpacityBg } from "./styles";
import { IoMdClose } from "react-icons/io";
import { ConsultasProps } from "../../interfaces/consultas";

interface ModalsProps {
  isOpen: boolean;
  closeModal: any;
  triagem: ConsultasProps | undefined;
}

const Modals: React.FC<ModalsProps> = ({ isOpen, closeModal, triagem }) => {
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
      </Modal>
    </>
  );
};

export default Modals;
