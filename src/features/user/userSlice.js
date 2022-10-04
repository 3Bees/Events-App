import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import UserService from './userService';

// First, create the thunk
export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const userService = new UserService();
    const response = await userService.getUser();
    return response;
  }
)


// Then, handle actions in your reducers:
const userSlice = createSlice({
  name: 'user',
  initialState: { profile: null, error: false},
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getUser.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder
    .addCase(getUser.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
      }
});
export default userSlice.reducer;

