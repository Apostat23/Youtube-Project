import { configureStore } from '@reduxjs/toolkit';
import VideoReducer from './slices/videoSlice';
import SessionReducer from './slices/sessionSlice';

export default configureStore({
  reducer: {
    video: VideoReducer,
    session: SessionReducer, 
  },
});

