import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import bookSlice from "../features/bookSlice";
import Participantslice from '../features/participantSlice';
const store = configureStore({
  reducer: {
    auth: authSlice,
    book: bookSlice,
    participant : Participantslice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
