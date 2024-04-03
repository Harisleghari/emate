import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false
}

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.status = true;
        },
        logout: (state) => {
            state.status = false;
        }
    }
})

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;