import {
  AddGameModal,
  EditGameModal,
  SignInModal,
  SignUpModal,
} from "./Modals";

interface IModalTypes {
  SIGN_IN_MODAL: string;
  SIGN_UP_MODAL: string;
  ADD_GAME_MODAL: string;
  EDIT_GAME_MODAL: string;
}

export const MODAL_TYPES: IModalTypes = {
  SIGN_IN_MODAL: "SIGN_IN_MODAL",
  SIGN_UP_MODAL: "SIGN_UP_MODAL",
  ADD_GAME_MODAL: "ADD_GAME_MODAL",
  EDIT_GAME_MODAL: "EDIT_GAME_MODAL",
};

export const MODALS_MAPPING = {
  [MODAL_TYPES.SIGN_IN_MODAL]: SignInModal,
  [MODAL_TYPES.SIGN_UP_MODAL]: SignUpModal,
  [MODAL_TYPES.ADD_GAME_MODAL]: AddGameModal,
  [MODAL_TYPES.EDIT_GAME_MODAL]: EditGameModal,
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
