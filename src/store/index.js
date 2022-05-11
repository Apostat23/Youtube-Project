import { configureStore } from '@reduxjs/toolkit';
import VideoReducer from './slices/videoSlice';

export default configureStore({
  reducer: {
    video: VideoReducer,
  },
});

