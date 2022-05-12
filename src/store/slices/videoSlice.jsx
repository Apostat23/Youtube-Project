import { createSlice } from '@reduxjs/toolkit';
import { fetchVideo } from '../services/videoService';

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    favouriteList: [],
    videos: null,
    isLoading: false,
    isError: false,
  },
  reducers: {
    setVideo: (state, action) => {
      state.videos = action.payload;
    },
    addFavourite (state, action) {
      console.log(action);
      state.favouriteList.push(action.payload);
    },
  },
  extraReducers: {
    [fetchVideo.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchVideo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.videos = action.payload.items;
    },
    [fetchVideo.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setVideo, addFavourite } = videoSlice.actions;
export default videoSlice.reducer;
