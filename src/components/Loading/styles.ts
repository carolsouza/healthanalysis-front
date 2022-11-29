import styled from "styled-components";

interface OpacityBG {
  isOpen: boolean;
}

export const OpacityBg = styled.div<OpacityBG>`
  visibility: ${(props) => (props.isOpen ? "hidden" : "visible")};
  opacity: ${(props) => (props.isOpen ? 0 : 1)};
  transition: 1s;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;z
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  span {
    color: #fff;
    text-align: center;
    display: block;
    font-weight: bold;
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;
