import styled from "styled-components";

interface OpenDivProps {
  isOpen: boolean;
}

interface ModalProps {
  isOpen: boolean;
}

export const OpacityBg = styled.div<OpenDivProps>`
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: 1s;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
  cursor: pointer;
`;

export const Modal = styled.div<ModalProps>`
  position: absolute;
  top: ${(props) => (props.isOpen ? "50%" : "-70%")};
  // display: ${(props) => (props.isOpen ? "flex" : "none")};
  width: 100%;
  min-width: 400px;
  max-width: 1000px;
  left: 50%;
  background-color: #fff;
  box-shadow: 4px 4px 8px #777777;
  max-height: 600px;
  min-height: 200px;
  height: auto;
  overflow-y: auto;
  padding: 10px;
  transition: all 1s ease;
  border-radius: 5px;
  border: 1px solid #181818;
  z-index: 100;
  transform: translate(-50%, -50%);
  color: #000;

  span {
    font-size: 12px;
    margin: 10px 0px;
    display: block;
  }
`;

export const BtnClose = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  font-size: 26px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

    p {
      width: 100%;
      text-align: center;
    }
  }
`;

export const SpecialityName = styled.h2`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 0px;
  }
`;

export const ConsultaDate = styled.p`
  width: 200px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const QuestionDiv = styled.h5`
  font-weight: bold;
  color: #000;
`;

export const AwnserDiv = styled.p`
  color: #000;
  padding: 5px;
`;

export const CancelDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BtnCancel = styled.button`
  background-color: #990000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 30%;
`;

export const InvalidText = styled.p`
  color: red;
  font-weight: bold;
  padding: 5px;
`;
