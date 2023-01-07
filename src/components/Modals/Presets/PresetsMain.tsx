import React, { MouseEventHandler, useState } from "react";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { presetsActions } from "../../../store/presets-modal-reducers";
import { Preset } from "../../../store/presets-modal-reducers";

import { Theme } from "../../../data/themes";
import styles from "./Presets.module.scss";

function PresetsMain(props: { onClose: Function; onChangeTab: Function }) {
  const presets = useSelector((state: { presets: Preset[] }) => state.presets);
  const dispatch = useDispatch();
  const { accent, text, accentDarker, container } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const [displaySelected, setDisplaySelected] = useState(false);

  function toggleDisplaySelectedMode() {
    setDisplaySelected((prevSelected) => !prevSelected);
  }

  function clickHandler(id: string) {
    if (displaySelected) {
      dispatch(presetsActions.updateSelected(id));
      return;
    }

    props.onChangeTab(id);
  }

  function closeHandler() {
    props.onClose();
  }

  return ReactDOM.createPortal(
    <div className={styles.presets} style={{ background: container }}>
      <div className={styles.presets__head}>
        <h2 style={{ color: accentDarker }}>Presets</h2>
        <button onClick={closeHandler}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6.5L6 18.5"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6.5L18 18.5"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.presets__list}>
        {presets.map((p) => {
          return (
            <button
              className={styles.presets__button}
              onClick={clickHandler.bind(null, p.id)}
              style={{
                color: text,
                borderColor:
                  displaySelected && !p.selected ? accentDarker : accent,
                borderStyle: displaySelected && p.selected ? "dashed" : "solid",
              }}
              key={p.id}
            >
              {p.name}
            </button>
          );
        })}

        {!displaySelected && (
          <button
            className={styles.presets__button}
            style={{ color: text }}
            onClick={props.onChangeTab as MouseEventHandler}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1444 5.98242V19.9824"
                stroke={accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.14441 12.9824H19.1444"
                stroke={accent}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Add preset
          </button>
        )}
      </div>

      <div className={styles.presets__select}>
        <button
          className={styles["presets__button--select"]}
          style={{ color: accent }}
          onClick={toggleDisplaySelectedMode}
        >
          {displaySelected ? "Hide displayed" : "Select displayed"}
        </button>
        <p className={styles.presets__par} style={{ color: accentDarker }}>
          *You can select up to 3 presets to display on the main screen
        </p>
      </div>
    </div>,
    document.getElementById("modal_root") as HTMLDivElement
  );
}

export default PresetsMain;
