import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginApi, logoutApi } from './loginService';

export const sessionLogin = createAsyncThunk(
  'session/sessionLogin',
  async ({username, password }) => {
    const response = await loginApi(username, password);
    console.log(response);
    return response;
  }
);

export const sessionLogout = createAsyncThunk(
  'session/sessionLogout',
  async () => {
    const response = await logoutApi();
    return response;
  }
);