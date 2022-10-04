import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import EventsService from './eventsService';

// First, create the thunk
export const getEvents = createAsyncThunk(
  'events/getEvents',
  async () => {
    const eventsService = new EventsService();
    const response = await eventsService.getEvents();
    return response;
  }
)
export const getEvent = createAsyncThunk(
  'events/getEvent',
  async (event) => {
    const eventsService = new EventsService();
    const response = await eventsService.getEvent(event);
    return response;
  }
)
export const getEventSession = createAsyncThunk(
  'events/getEventSession',
  async (sessionObject) => {
    const eventsService = new EventsService();
    const response = await eventsService.getEventSession(sessionObject);
    return response;
  }
)
export const assignSpeaker = createAsyncThunk(
  'events/assignSpeaker',
  async (speaker) => {
    return speaker;
  }
)


// Then, handle actions in your reducers:
const eventsSlice = createSlice({
  name: 'events',
  initialState: { list: [], event: null, error: false, session: null, speaker: null},
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(getEvents.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
    builder
    .addCase(getEvents.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.list = [];
    });
    builder
    .addCase(getEvent.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getEvent.fulfilled, (state, action) => {
      state.loading = false;
      state.event = action.payload;
    });
    builder
    .addCase(getEvent.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.event = null;
    });
    builder
    .addCase(getEventSession.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(getEventSession.fulfilled, (state, action) => {
      state.loading = false;
      state.session = action.payload;
    });
    builder
    .addCase(getEventSession.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.session = null;
    });
    builder
    .addCase(assignSpeaker.pending, (state) => {
      state.errorMessage = "";
      state.loading = true;
      state.error = false;
    });
    builder
    .addCase(assignSpeaker.fulfilled, (state, action) => {
      state.loading = false;
      state.speaker = action.payload;
    });
    builder
    .addCase(assignSpeaker.rejected, (state) => {
      state.error = true;
      state.loading = false;
      state.speaker = null;
    });
      }
});
export default eventsSlice.reducer;

