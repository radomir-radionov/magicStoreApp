import { SignInModal, SignUpModal } from "./Modals";

interface IModalTypes {
  SIGN_IN_MODAL: string;
  SIGN_UP_MODAL: string;
}

export const MODAL_TYPES: IModalTypes = {
  SIGN_IN_MODAL: "SIGN_IN_MODAL",
  SIGN_UP_MODAL: "SIGN_UP_MODAL",
};

export const MODALS_MAPPING = {
  [MODAL_TYPES.SIGN_IN_MODAL]: SignInModal,
  [MODAL_TYPES.SIGN_UP_MODAL]: SignUpModal,
};

export type TModalType = string;

export interface IModalInfo {
  [key: string]: any;
}

export interface IModalSelectorData {
  modalInfo: {
    [key: string]: IModalInfo;
  };
  modalTypeArray: TModalType[];
}
