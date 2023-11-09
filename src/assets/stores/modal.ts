import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        index: null,
        showModal: false,
    },
    reducers: {
        setModal: (state, action) => {
            state.index = action.payload.index;
            state.showModal = action.payload.showModal;
        }
    }
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;