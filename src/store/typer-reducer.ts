import { createSlice } from "@reduxjs/toolkit";

interface Map {
  [key: string]: string | number | boolean;
}

interface Progress extends Map {
  mistakes: number;
  speed: number;
  wordIndex: number;
  charIndex: number;
}

interface Settings extends Map {
  modeId: string;
  modeName: string;
  words: number;
  time: number;
  punctuation: boolean;
  difficulty: string;
}

export interface TyperState {
  blured: boolean;
  started: boolean;
  progress: Progress;
  settings: Settings;
}

const initialState: TyperState = {
  blured: true,
  started: false,
  progress: {
    mistakes: 0,
    speed: 0,
    wordIndex: 0,
    charIndex: 0,
  },
  settings: {
    modeId: "typerset-1",
    modeName: "Basics",
    time: 30,
    words: 0,
    punctuation: false,
    difficulty: "normal",
  },
};

const typerSlice = createSlice({
  name: "typer",
  initialState,
  reducers: {
    setBlur(state, action: { payload: boolean }) {
      state.blured = action.payload;
    },

    setSettings(
      state,
      action: { payload: { name: string; value: string | boolean | number }[] }
    ) {
      const settings = action.payload;

      state.settings = {
        modeId: "",
        modeName: "",
        time: 0,
        words: 0,
        punctuation: false,
        difficulty: "",
      };

      for (let setting of settings) {
        const { name, value } = setting;
        if (name in state.settings) {
          state.settings[name] = value;
        }
      }
    },
    // setSettings(
    //   state,
    //   action: {
    //     payload: {
    //       modeId: string;
    //       modeName: string;
    //       parameters: TyperParameter[];
    //     };
    //   }
    // ) {
    //   state.settings = action.payload;
    //   state.blured = true;
    // },
    // setParameterValue(
    //   state,
    //   action: {
    //     payload: TyperParameter;
    //   }
    // ) {
    //   const { id, name, value } = action.payload;
    //   const paramIndex = state.settings.parameters.findIndex(
    //     (par) => par.id === id
    //   );

    //   if (paramIndex >= 0) {
    //     state.settings.parameters[paramIndex].value = value;
    //     state.settings.parameters[paramIndex].name = name;
    //   }

    //   if (name === "Words") {
    //     const timeIndex = state.settings.parameters.findIndex(
    //       (par) => par.name === "Time"
    //     );
    //     if (timeIndex >= 0) {
    //       state.settings.parameters[timeIndex].value = -1;
    //     }
    //   }

    //   if (name === "Time") {
    //     const wordsIndex = state.settings.parameters.findIndex(
    //       (par) => par.name === "Words"
    //     );
    //     if (wordsIndex >= 0) {
    //       state.settings.parameters[wordsIndex].value = -1;
    //     }
    //   }
    // },
  },
});

export default typerSlice.reducer;
export const typerActions = typerSlice.actions;
