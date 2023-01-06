import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Theme } from "../../../data/themes";
import styles from "./TyperSettings.module.scss";

import {
  TyperSettings,
  typerSettingsActions,
} from "../../../store/typer-settings-reducers";

import { typerActions, TyperState } from "../../../store/typer-reducer";

import TyperBasics from "./TyperBasics";
import TyperCode from "./TyperCode";
import TyperModes from "./TyperModes";
import TyperCustom from "./TyperCustom";

function Settings() {
  const dispatch = useDispatch();
  const { text, accentDarkest, accentDarker, container } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const typer = useSelector((state: { typer: TyperState }) => state.typer);
  const sections = useSelector(
    (state: { typerSettings: TyperSettings[] }) => state.typerSettings
  );
  const selectedSection = sections.find((s) => s.isActive);

  function addBlur() {
    dispatch(typerActions.setBlur(true));
  }

  // function setSettings() {}

  useEffect(() => {
    if (!selectedSection) return;
    const data: { name: string; value: string | boolean | number }[] = [
      { name: "modeId", value: selectedSection.id },
      { name: "modeName", value: selectedSection.name },
    ];

    for (let parameter of selectedSection.parameters) {
      const entry = {
        name: parameter.name.toLowerCase(),
        value: parameter.selectedValue,
      };
      data.push(entry);
    }
    dispatch(typerActions.setSettings(data));
  }, [selectedSection, dispatch]);

  function clickHandler(id: string) {
    const timeValue = sections
      .find((section) => section.id === id)
      ?.parameters.find(
        (parameter) => parameter.name === "Time"
      )?.selectedValue;
    dispatch(typerSettingsActions.setActiveSection(id));

    if (!timeValue || timeValue < 0)
      dispatch(
        typerSettingsActions.setValue({
          sectionId: id,
          parameterName: "Time",
          value: 30,
        })
      );

    addBlur();
  }

  function mouseOverHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.color = accentDarker;
  }

  function mouseOutHandler(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.color = accentDarkest;
  }

  return (
    <nav style={{ opacity: typer.started ? "0" : "1" }}>
      <div className={styles.sections} style={{ background: container }}>
        {sections.map((section) => (
          <>
            <button
              className={`${styles.sections__section} ${
                section.isActive ? styles["sections__section--active"] : ""
              }`}
              id={section.id}
              key={section.id}
              onClick={() => clickHandler(section.id)}
              onMouseOver={!section.isActive ? mouseOverHandler : () => {}}
              onMouseOut={!section.isActive ? mouseOutHandler : () => {}}
              style={
                section.isActive ? { color: text } : { color: accentDarkest }
              }
            >
              {section.name}
            </button>
            <div
              className={styles.sections__separator}
              style={{ background: accentDarkest }}
              key={`${section.id}-separator`}
            ></div>
          </>
        ))}
      </div>

      {sections.find((section) => section.name === "Basics")?.isActive && (
        <TyperBasics />
      )}
      {sections.find((section) => section.name === "Code")?.isActive && (
        <TyperCode />
      )}
      {sections.find((section) => section.name === "Modes")?.isActive && (
        <TyperModes />
      )}
      {sections.find((section) => section.name === "Custom")?.isActive && (
        <TyperCustom />
      )}
    </nav>
  );
}

export default Settings;
