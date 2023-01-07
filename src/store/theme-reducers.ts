import { createSlice } from "@reduxjs/toolkit";
import themes from "../data/themes";

const initialState = {
  ...themes[0],
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action: { payload: string }) {
      const newTheme = themes.find((t) => t.id === action.payload);

      if (!newTheme) return;

      state.colors = newTheme.colors;
      state.id = newTheme.id;
      state.name = newTheme.name;
      state.tags = newTheme.tags;
    },
    addTheme(state, provider) {},
  },
});

export default themeSlice.reducer;
export const themeActions = themeSlice.actions;
