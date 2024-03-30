import { createSlice } from '@reduxjs/toolkit';

const stopwatchSlice = createSlice({
  name: "stopwatch",
  initialState: { 
    time: 0,
    isRunning: false
  },

  reducers: {
    START_TIMER: (state) => {
      state.isRunning = true;
    }, 
    PAUSE_TIME: (state) => {
      state.isRunning = false;
    },
    RESET_TIMER: (state) => {
      state.time = 0;
      state.isRunning = false;
    },
    INCREMENT_TIME: (state) => {
      state.time += 1;
    }
  },
});

export const { START_TIMER, PAUSE_TIMER, RESET_TIMER, INCREMENT_TIME } = stopwatchSlice.actions;


export default stopwatchSlice.reducer;