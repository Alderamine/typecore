import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-reducers";
import loadingPageReducers from "./loading-page-reducers";
import typerSettingsReducers from "./typer-settings-reducers";
import presetsModalReducers from "./presets-modal-reducers";
import typerReducer from "./typer-reducer";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    load: loadingPageReducers,
    typerSettings: typerSettingsReducers,
    presets: presetsModalReducers,
    typer: typerReducer,
  },
});

export default store;
