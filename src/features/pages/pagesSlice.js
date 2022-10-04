import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import PagesService from './pagesService';

// First, create the thunk
export const getAboutUsPage = createAsyncThunk(
  'events/getAboutUsPage',
  async () => {
    const pagesService = new PagesService();
    const response = await pagesService.getAboutUsPage();
    return response;
  }
)
export const getTermsAndConditionsPage = createAsyncThunk(
  'events/getTermsAndConditionsPage',
  async () => {
    const pagesService = new PagesService();
    const response = await pagesService.getTermsAndConditionsPage();
    return response;
  }
)
export const getHelpPage = createAsyncThunk(
  'events/getHelpPage',
  async () => {
    const pagesService = new PagesService();
    const response = await pagesService.getHelpPage();
    return response;
  }
)
export const getHomePage = createAsyncThunk(
  'events/getHomePage',
  async () => {
    const pagesService = new PagesService();
    const response = await pagesService.getHomePage();
    return response;
  }
)
export const getHomeVideo = createAsyncThunk(
  'events/getHomeVideo',
  async (videoId) => {
    const pagesService = new PagesService();
    const response = await pagesService.getHomeVideo(videoId);
    return response;
  }
)
export const getResourceInfo = createAsyncThunk(
  'events/getResourceInfo',
  async (slug) => {
    const pagesService = new PagesService();
    const response = await pagesService.getResourceInfo(slug);
    return response;
  }
)
export const getLoggedOutImages = createAsyncThunk(
  'events/getLoggedOutImages',
  async () => {
    const pagesService = new PagesService();
    const response = await pagesService.getLoggedOutImages();
    return response;
  }
)


// Then, handle actions in your reducers:
const pagesSlice = createSlice({
  name: 'pages',
  initialState: { aboutUs: null, termsAndConditions: null, help:null, home: null, error: false,video: '', resource: null, images: []},
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getAboutUsPage.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getAboutUsPage.fulfilled, (state, action) => {
      state.loading = false;
      state.aboutUs = action.payload;
    });
    builder
    .addCase(getAboutUsPage.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.aboutUs = null;
    });
    builder
    .addCase(getTermsAndConditionsPage.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getTermsAndConditionsPage.fulfilled, (state, action) => {
      state.loading = false;
      state.termsAndConditions = action.payload;
    });
    builder
    .addCase(getTermsAndConditionsPage.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.termsAndConditions = null;
    });
    builder
    .addCase(getHelpPage.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getHelpPage.fulfilled, (state, action) => {
      state.loading = false;
      state.help = action.payload;
    });
    builder
    .addCase(getHelpPage.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.help = null;
    });
    builder
    .addCase(getHomePage.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getHomePage.fulfilled, (state, action) => {
      state.loading = false;
      state.home = action.payload;
    });
    builder
    .addCase(getHomePage.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.home = null;
    });
    builder
    .addCase(getHomeVideo.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getHomeVideo.fulfilled, (state, action) => {
      state.loading = false;
      state.video = action.payload;
    });
    builder
    .addCase(getHomeVideo.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.video = '';
    });
    builder
    .addCase(getResourceInfo.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getResourceInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.resource = action.payload;
    });
    builder
    .addCase(getResourceInfo.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.resource = null;
    });
    builder
    .addCase(getLoggedOutImages.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getLoggedOutImages.fulfilled, (state, action) => {
      state.loading = false;
      state.images = action.payload;
    });
    builder
    .addCase(getLoggedOutImages.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.images = [];
    });
      }
});
export default pagesSlice.reducer;

