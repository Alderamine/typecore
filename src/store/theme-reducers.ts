import { createSlice } from "@reduxjs/toolkit";
import themes from "../data/themes";

const initialState = {
    ...themes[0],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, provider) {
    },
    addTheme(state, provider) {}
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
