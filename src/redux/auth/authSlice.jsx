import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logInUser, logOutUser, updateUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isUpdating: false,
  },

  extraReducers: {
    [registerUser.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },

    [logInUser.fulfilled](state, actions) {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [updateUser.pending](state) {
      state.isUpdating = true;
    },
    [updateUser.fulfilled](state, actions) {
      state.user = actions.payload;
      state.isLoggedIn = true;
      state.isUpdating = false;
    },
    [updateUser.rejected](state) {
      state.isUpdating = false;
    },
  },
});

export const authReducer = authSlice.reducer;
