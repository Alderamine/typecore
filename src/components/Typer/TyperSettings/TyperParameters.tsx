import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  TyperSettings,
  typerSettingsActions,
} from "../../../store/typer-settings-reducers";
import { Preset } from "../../../store/presets-modal-reducers";

import styles from "./TyperSettings.module.scss";
import { Theme } from "../../../data/themes";

function TyperParameters(props: { name: string; extraSpace?: boolean }) {
  const dispatch = useDispatch();
  const { accent } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const sections = useSelector(
    (state: { typerSettings: TyperSettings[] }) => state.typerSettings
  );
  const presets = useSelector((state: { presets: Preset[] }) => state.presets);

  useEffect(() => {
    const data = presets
      .filter((p) => p.selected)
      .map((p) => {
        return { name: p.name, id: p.id };
      });
    dispatch(typerSettingsActions.setPresets(data));
  }, [presets, dispatch]);

  const section = sections.find((section) => section.isActive);
  const parameter = section?.parameters.find((par) => par.name === props.name);

  if (!section || !parameter) return <></>;

  function clickHandler(value: string, name: string) {
    if (!section) return;

    dispatch(
      typerSettingsActions.setValue({
        sectionId: section.id,
        parameterName: name,
        value,
      })
    );
  }

  return (
    <>
      {props.name === "Punctuation" ? (
        <button
          className={`${styles.parameters__button} ${
            parameter.selectedValue ? styles.active : ""
          }`}
          onClick={clickHandler.bind(true, "", "Punctuation")}
          style={{ color: accent }}
        >
          punctuation
        </button>
      ) : props.name === "Presets" ? (
        <div
          className={
            props.extraSpace
              ? styles["parameters__group--space"]
              : styles.parameters__group
          }
        >
          {parameter.values.map((val: any) => (
            <button
              className={`${styles.parameters__button} ${
                parameter.selectedValue === val.id ? styles.active : ""
              }`}
              key={val.id}
              style={{ color: accent }}
              onClick={clickHandler.bind(true, val.id, parameter.name)}
            >
              {val.name}
            </button>
          ))}
        </div>
      ) : (
        <div
          className={
            props.extraSpace
              ? styles["parameters__group--space"]
              : styles.parameters__group
          }
        >
          {parameter.values.map((val: any) => (
            <button
              className={`${styles.parameters__button} ${
                parameter.selectedValue === val ? styles.active : ""
              }`}
              key={val}
              style={{ color: accent }}
              onClick={clickHandler.bind(true, val, parameter.name)}
            >
              {val}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default TyperParameters;
