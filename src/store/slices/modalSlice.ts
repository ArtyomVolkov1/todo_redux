import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ModalState {
  isOpened: boolean;
  type: string;
  todoId: string | number | null;
}

const initialState: ModalState = {
  isOpened: false,
  type: 'default',
  todoId: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpened = true;
      state.type = payload.type;
      state.todoId = payload.todoId;
    },
    closeModal: (state) => {
      state.isOpened = false;
      state.type = '';
      state.todoId = null;
    },
  },
});

export const getModalType = (state: RootState) => state.modal.type;
export const getTodoId= (state: RootState) => state.modal.todoId;

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
