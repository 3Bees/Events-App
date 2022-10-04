import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/userSlice';
import eventsReducer from './features/events/eventsSlice';
import pagesReducer from './features/pages/pagesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    events: eventsReducer,
    pages: pagesReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

export default store;