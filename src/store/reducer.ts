import {combineReducers} from '@reduxjs/toolkit';
import userSlice from '../slices/userSlice';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
