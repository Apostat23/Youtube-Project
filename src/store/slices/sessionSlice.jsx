import { createSlice } from '@reduxjs/toolkit'
import { sessionLogin, sessionLogout } from '../services/sessionService'

const initialState = {
  isLoading: false,
  isError: false,
  user: null,
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {},
  extraReducers: {
    [sessionLogin.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [sessionLogin.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = action.payload;
    },
    [sessionLogin.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [sessionLogout.pending]: (state, action) => { 
      state.isLoading = true;
      state.isError = false;
    },
    [sessionLogout.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.user = null;
    },
    [sessionLogout.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const {} = sessionSlice.actions

export default sessionSlice.reducer