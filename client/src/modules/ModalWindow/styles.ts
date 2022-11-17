import styled from "styled-components";
import { colors } from "styles";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${colors.MODAL_BACKGROUND_OPACITY};
`;

export const Portal = styled.div``;
