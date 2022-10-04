import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../store';
import AuthService from './authService';

// First, create the thunk
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (credentials) => {
    const authService = new AuthService();
    const response = await authService.signUp(credentials);
    return response;
  }
)
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (userProfile) => {
    const authService = new AuthService();
    const response = await authService.updateUserProfile(userProfile);
    return response;
  }
)
export const updateAccount = createAsyncThunk(
  'auth/updateAccount',
  async (userProfile) => {
    const authService = new AuthService();
    const response = await authService.updateAccount(userProfile);
    return response;
  }
)
export const verifyAccount = createAsyncThunk(
  'auth/verifyAccount',
  async (verificationCode) => {
    const authService = new AuthService();
    const response = await authService.verifyAccount(verificationCode);
    return response;
  }
)
export const remindAdminToVerifyEmail = createAsyncThunk(
  'auth/remindAdminToVerifyEmail',
  async (verificationCode) => {
    const authService = new AuthService();
    const response = await authService.verifyAccount(verificationCode);
    return response;
  }
)
export const resendVerificationCode = createAsyncThunk(
  'auth/resendVerificationCode',
  async () => {
    const authService = new AuthService();
    const response = await authService.resendVerificationCode();
    return response;
  }
)
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials) => {
    const authService = new AuthService();
    const response = await authService.signIn(credentials);
    return response;
  }
)
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (credentials ) => {
    const authService = new AuthService();
    const user = await authService.resetPassword(credentials);
    return user;
  }
)
export const logOut = createAsyncThunk(
  'auth/logOut',
  async () => {
    const authService = new AuthService();
    await authService.signOut();
    return null;
  }
)
export const saveToken = createAsyncThunk(
  'auth/saveToken',
   () => {
    const authService = new AuthService();
    const token = authService.getToken() || '';
    return token;
  }
)
export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email) => {
    const authService = new AuthService();
    const shouldChangePassword = await authService.forgotPassword(email);
    return shouldChangePassword;
  }
)
export const forgotPasswordSubmit = createAsyncThunk(
  'auth/forgotPasswordSubmit',
  async (profile) => {
    const authService = new AuthService();
    const wasPasswordChangedSuccessfully = await authService.forgotPasswordSubmit(profile);
    return wasPasswordChangedSuccessfully;
  }
)
export const getAuthToken  = createAsyncThunk(
  'auth/getAuthToken',
  async () => {
    const authService = new AuthService();
    const token = await authService.getToken();
    return token;
  }
)
export const clearAccountPendingVerification = createAsyncThunk(
  'auth/clearAccountPendingVerification',
  async () => {
    return false;
  }
)
export const clearScreenToGoTo = createAsyncThunk(
  'auth/clearScreenToGoTo',
  async () => {
    return '';
  }
)
export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    const authService = new AuthService();
    const response = await authService.getUser();
    return response;
  })
export const clearUser = createAsyncThunk(
  'user/clearUser',
  async () => {
    const authService = new AuthService();
    const response = await authService.clearUser();
    return response;
  })
  export const verifyAccountEmailChange = createAsyncThunk(
    'auth/verifyAccountEmailChange',
    async (verificationCode) => {
      const authService = new AuthService();
      const response = await authService.verifyAccountEmailChange(verificationCode);
      return response;
    }
  )
// Then, handle actions in your reducers:
const authSlice = createSlice({
  name: 'auth',
  initialState: {profile: null, token: null, shoulUpdateAccount: false,shouldVerifyAccount: false, accountPendingVerification: false, shouldResetPassword: false, loading: false, error: false, shouldChangePassword: false, wasPasswordChangedSuccessfully: false, screenToGoTo: ''},
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(logIn.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.screenToGoTo = action.payload.screenToGoTo;
      state.loading = false;
      state.error = action.payload.error;
      state.profile = action.payload.profile;
    });
    builder
    .addCase(logIn.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.token = null;
    });
    builder
    .addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.shoulUpdateAccount=false;
    });
    builder
    .addCase(signUp.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
      state.shoulUpdateAccount=action.payload.shoulUpdateAccount;
      state.profile = action.payload.profile;
    });
    builder
    .addCase(signUp.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.shoulUpdateAccount=false;
      state.token = null;
      state.profile = null;
    });
    builder
    .addCase(updateUserProfile.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.shouldVerifyAccount=false;
    });
    builder
    .addCase(updateUserProfile.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
      state.shouldVerifyAccount=action.payload.shouldVerifyAccount;
    });
    builder
    .addCase(updateUserProfile.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.shouldVerifyAccount=false;
    });
    builder
    .addCase(updateAccount.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(updateAccount.fulfilled, (state, action) => {
      state.profile = action.payload.user;
      state.loading = false;
      state.error = false;
    });
    builder
    .addCase(updateAccount.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder
    .addCase(verifyAccount.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.accountPendingVerification=false;
    });
    builder
    .addCase(verifyAccount.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
      state.accountPendingVerification=action.payload.accountPendingVerificationOnSignUp;
      state.profile = action.payload.profile;
    });
    builder
    .addCase(verifyAccount.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.accountPendingVerification=false;
      state.profile = null;
    });
    builder
    .addCase(resendVerificationCode.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(resendVerificationCode.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
    });
    builder
    .addCase(resendVerificationCode.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder
    .addCase(remindAdminToVerifyEmail.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(remindAdminToVerifyEmail.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
    });
    builder
    .addCase(remindAdminToVerifyEmail.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
    builder
    .addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(resetPassword.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.shouldResetPassword = action.payload.shouldResetPassword;
      state.loading = false;
      state.error = false;
    });
    builder
    .addCase(resetPassword.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder
    .addCase(logOut.fulfilled, (state) => {
      state.token = null;
      state.profile = null;
    });
    builder
    .addCase(saveToken.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder
    .addCase(forgotPassword.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.shouldChangePassword = false;
    });
    builder
    .addCase(forgotPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.shouldChangePassword = action.payload;
    });
    builder
    .addCase(forgotPassword.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.shouldChangePassword = false;
    });
    builder
    .addCase(forgotPasswordSubmit.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.wasPasswordChangedSuccessfully = false;
    });
    builder
    .addCase(forgotPasswordSubmit.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.wasPasswordChangedSuccessfully = action.payload;
      state.shouldChangePassword = false;
    });
    builder
    .addCase(forgotPasswordSubmit.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.wasPasswordChangedSuccessfully = false;
    });
    builder
    .addCase(getAuthToken.pending, (state) => {
      state.token = null;
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getAuthToken.fulfilled, (state, action) => {
      state.token = action.payload;
      state.loading = false;
      state.error = false;
    });
    builder
    .addCase(getAuthToken.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.token = null;
    });
    builder
    .addCase(clearAccountPendingVerification.fulfilled, (state, action) => {
      state.accountPendingVerification = action.payload;
    });
    builder
    .addCase(clearScreenToGoTo.fulfilled, (state, action) => {
      state.screenToGoTo = action.payload;
    });
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
    builder
    .addCase(clearUser.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = null;
      state.accountPendingVerification = false;
      state.shouldVerifyAccount=false;
      state.shoulUpdateAccount=false;
    });
    builder
    .addCase(verifyAccountEmailChange.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(verifyAccountEmailChange.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.profile = action.payload.profile;
    });
    builder
    .addCase(verifyAccountEmailChange.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  }
});
export default authSlice.reducer;

