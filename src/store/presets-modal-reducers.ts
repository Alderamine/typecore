import { createSlice } from "@reduxjs/toolkit";

export interface Preset {
  id: string;
  name: string;
  text: string;
  parameters: string[];
  selected: boolean;
}

const initialState: Preset[] = [
  {
    id: "p-1",
    name: "my preset",
    text: "lorem ipsum",
    parameters: [],
    selected: true,
  },
  {
    id: "p-2",
    name: "my preset2",
    text: "lorem ipsum",
    parameters: [],
    selected: true,
  },
  {
    id: "p-3",
    name: "my preset3",
    text: "lorem ipsum",
    parameters: [],
    selected: true,
  },
  {
    id: "p-4",
    name: "my preset4",
    text: "lorem ipsum",
    parameters: [],
    selected: false,
  },
];

const presetsSlice = createSlice({
  name: "presets",
  initialState,
  reducers: {
    addPreset(state, action: { payload: Preset }) {
      state.push(action.payload);
    },
    deletePreset(state, action: { payload: string }) {
      const id = action.payload;

      const delIndex = state.findIndex((p) => p.id === id);
      if (delIndex >= 0) {
        state = state.splice(delIndex, 1);
      }
    },
    changePreset(state, action: { payload: Preset }) {
      const newPreset = action.payload;
      const presetIndex = state.findIndex((p) => p.id === newPreset.id);

      if (presetIndex >= 0) {
        state[presetIndex] = newPreset;
      }
    },
    updateSelected(state, action: { payload: string }) {
      let id = action.payload;
      let ids = state.filter((p) => p.selected).map((p) => p.id);

      const idIndex = ids.findIndex((i) => i === id);

      if (idIndex < 0) {
        ids.push(id);
      } else {
        ids.splice(idIndex, 1);
      }

      if (ids.length === 4) {
        ids.splice(0, 1);
      }

      for (let preset of state) {
        preset.selected = false;
      }

      for (let i of ids) {
        const selectedIndex = state.findIndex((p) => p.id === i);

        if (selectedIndex >= 0) {
          state[selectedIndex].selected = true;
        }
      }
    },
  },
});

export default presetsSlice.reducer;
export const presetsActions = presetsSlice.actions;
