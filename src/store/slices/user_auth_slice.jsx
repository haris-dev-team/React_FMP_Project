import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  auth_check_loading: true,
  user_auth: false,
  user_ID: "",
  user_data: [],
  user_Data: [],
  donter: "",
};

const user_auth_slice = createSlice({
  name: "user-auth",
  initialState: initial_state,
  reducers: {
    set_user_auth: (state, actions) => {
      const { payload } = actions;
      state.user_auth = payload.auth;
      //   state.user_data = payload.data;
      state.auth_check_loading = false;
      state.user_ID = payload.user;
      state.user_data = payload.user_Data;
      state.user_Data = payload.data;
      state.form_Donate_Setup = payload.user_Donation;
    },
    form_Setup: (state, { payload }) => {
      state.donter = payload.donater;
    },
  },
});

export const { set_user_auth, form_Setup } = user_auth_slice.actions;
export default user_auth_slice.reducer;
