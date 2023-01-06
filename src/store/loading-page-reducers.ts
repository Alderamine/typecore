import { createSlice } from "@reduxjs/toolkit";

export interface LoadState {
  loaded: boolean;
  loadType: "FIRST_LOAD" | "LOAD";
  animationFinished: boolean;
}

const initialState: LoadState = {
  loaded: false,
  loadType: "LOAD",
  animationFinished: false,
};

const loadingState = createSlice({
  name: "load",
  initialState,
  reducers: {
    startLoad(
      state,
      { payload }: { payload: { loadType: "FIRST_LOAD" | "LOAD" } }
    ) {
      state.loaded = false;
      state.animationFinished = false;
      state.loadType = payload.loadType;
      },
      
      finishAnimation(state) {
          state.animationFinished = true;
      },

      finishLoad(state) {
          state.loaded = true;
      }
  },
});

export default loadingState.reducer;
export const loadActions = loadingState.actions;
