import { createSlice } from "@reduxjs/toolkit";

type Value = string | number | boolean;

export interface Parameter {
  id: string;
  name: string;
  values: Value[] | Object[];
  selectedValue: Value;
}

export interface TyperSettings {
  id: string;
  name: string;
  isActive: boolean;
  parameters: Parameter[];
}

const basicsSettings: TyperSettings = {
  id: "typerset-1",
  name: "Basics",
  isActive: true,
  parameters: [
    {
      id: "basics-1",
      name: "Time",
      values: [15, 30, 60, 120],
      selectedValue: 30,
    },
    {
      id: "basics-2",
      name: "Words",
      values: [15, 30, 60, 120],
      selectedValue: -1,
    },
    {
      id: "basics-3",
      name: "Punctuation",
      values: [true, false],
      selectedValue: false,
    },
    {
      id: "basics-4",
      name: "Difficulty",
      values: ["easy", "normal", "hard"],
      selectedValue: "normal",
    },
  ],
};

const codeSettings: TyperSettings = {
  id: "typerset-2",
  name: "Code",
  isActive: false,
  parameters: [
    {
      id: "code-1",
      name: "Time",
      values: [15, 30, 60, 120],
      selectedValue: 30,
    },
    {
      id: "code-2",
      name: "Languages",
      values: ["c#", "python", "js"],
      selectedValue: "js",
    },
  ],
};

const modesSettings: TyperSettings = {
  id: "typerset-3",
  name: "Modes",
  isActive: false,
  parameters: [
    {
      id: "modes-1",
      name: "Time",
      values: [15, 30, 60, 120],
      selectedValue: 30,
    },
    {
      id: "modes-2",
      name: "Modes",
      values: ["arrows", "\\(*_*)\\", "9019", "CAPS", "random words"],
      selectedValue: "arrows",
    },
  ],
};

const customSettings: TyperSettings = {
  id: "typerset-4",
  name: "Custom",
  isActive: false,
  parameters: [
    {
      id: "custom-1",
      name: "Time",
      values: [15, 30, 60, 120],
      selectedValue: 30,
    },
    {
      id: "custom-2",
      name: "Presets",
      values: [{ name: "Preset 1", id: "preset-1" }],
      selectedValue: "preset-1",
    },
  ],
};

const initialState = [
  basicsSettings,
  codeSettings,
  modesSettings,
  customSettings,
];

const typerSettings = createSlice({
  name: "typerSettings",
  initialState,
  reducers: {
    setActiveSection(state, action: { payload: string }) {
      for (let section of state) {
        section.isActive = false;
      }

      const section = state.find((section) => section.id === action.payload);
      if (section) {
        section.isActive = true;
      }
    },
    setValue(
      state,
      action: {
        payload: {
          sectionId: string;
          parameterName: string;
          value: Value;
        };
      }
    ) {
      const { sectionId, parameterName, value } = action.payload;

      const sectionIndex = state.findIndex((s) => s.id === sectionId);
      if (sectionIndex == null || sectionIndex < 0) return;

      const parameterIndex = state[sectionIndex].parameters.findIndex(
        (par) => par.name === parameterName
      );
      if (parameterIndex == null || parameterIndex < 0) return;

      const parameter = state[sectionIndex].parameters[parameterIndex];

      if (parameter.name === "Words" || parameter.name === "Time") {
        for (let section of state) {
          const parWordIndex = section.parameters.findIndex(
            (p) => p.name === "Words"
          );

          const parTimeIndex = section.parameters.findIndex(
            (p) => p.name === "Time"
          );

          if (parWordIndex >= 0 && parameter.name === "Words") {
            section.parameters[parWordIndex].selectedValue = value;
          }

          if (parTimeIndex >= 0 && parameter.name === "Words") {
            section.parameters[parTimeIndex].selectedValue = -1;
          }

          if (parTimeIndex >= 0 && parameter.name === "Time") {
            section.parameters[parTimeIndex].selectedValue = value;
          }

          if (parWordIndex >= 0 && parameter.name === "Time") {
            section.parameters[parWordIndex].selectedValue = -1;
          }
        }
      } else if (parameter.name === "Punctuation") {
        state[sectionIndex].parameters[parameterIndex].selectedValue =
          !state[sectionIndex].parameters[parameterIndex].selectedValue;
      } else {
        state[sectionIndex].parameters[parameterIndex].selectedValue = value;
      }
    },
    setPresets(state, action: { payload: Object[] }) {
      const settingsId = state.findIndex((s) => s.name === "Custom");
      const parameterId = state[settingsId]?.parameters.findIndex(
        (p) => p.name === "Presets"
      );

      if (parameterId < 0) return;

      state[settingsId].parameters[parameterId].values = action.payload;
    },
  },
});

export default typerSettings.reducer;
export const typerSettingsActions = typerSettings.actions;
