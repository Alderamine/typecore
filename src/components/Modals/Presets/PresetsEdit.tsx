import React, { useRef } from "react";
import ReactDOM from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { presetsActions, Preset } from "../../../store/presets-modal-reducers";

import { Theme } from "../../../data/themes";
import styles from "./Presets.module.scss";

function PresetsEdit(props: { goBack: Function; preset: string }) {
  const dispatch = useDispatch();

  const { accent, accentDarker, container, text } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const preset = useSelector(
    (state: { presets: Preset[] }) => state.presets
  ).find((p) => p.id === props.preset);

  const nameInput = useRef<HTMLInputElement>(null);
  const textInput = useRef<HTMLTextAreaElement>(null);

  function goBackHandler() {
    props.goBack();
  }

  function saveHandler() {
    if (preset) {
      dispatch(
        presetsActions.changePreset({
          id: props.preset,
          name: nameInput.current ? nameInput.current.value : "",
          text: textInput.current ? textInput.current.value : "",
          selected: false,
          parameters: [],
        })
      );
      goBackHandler();
      return;
    }

    dispatch(
      presetsActions.addPreset({
        id: Math.random().toString(),
        name: nameInput.current ? nameInput.current.value : "",
        text: textInput.current ? textInput.current.value : "",
        selected: false,
        parameters: [],
      })
    );

    goBackHandler();
  }

  function deleteHandler() {
    dispatch(presetsActions.deletePreset(props.preset));
    goBackHandler();
  }

  return ReactDOM.createPortal(
    <div className={styles.presets} style={{ background: container }}>
      <div
        className={`${styles.presets__head} ${styles["presets__head--arrow"]}`}
      >
        <button onClick={goBackHandler}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12.5L5 12.5"
              stroke={accentDarker}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19.5L5 12.5L12 5.5"
              stroke={accentDarker}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h2 style={{ color: accentDarker }}>Edit preset</h2>

        <button className={styles.presets__delete} onClick={deleteHandler}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.91693 6.41406H5.91693H21.9169"
              stroke={accentDarker}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.9169 6.41406V20.4141C19.9169 20.9445 19.7062 21.4532 19.3311 21.8283C18.9561 22.2033 18.4474 22.4141 17.9169 22.4141H7.91693C7.3865 22.4141 6.87779 22.2033 6.50272 21.8283C6.12764 21.4532 5.91693 20.9445 5.91693 20.4141V6.41406M8.91693 6.41406V4.41406C8.91693 3.88363 9.12765 3.37492 9.50272 2.99985C9.87779 2.62478 10.3865 2.41406 10.9169 2.41406H14.9169C15.4474 2.41406 15.9561 2.62478 16.3311 2.99985C16.7062 3.37492 16.9169 3.88363 16.9169 4.41406V6.41406"
              stroke={accentDarker}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className={styles.presets__form}>
        <div className={styles.presets__group}>
          <div className={styles.presets__label}>
            <label htmlFor="" style={{ color: accent }}>
              Name
            </label>
          </div>

          <input
            type="text"
            style={{ borderColor: accentDarker, color: text }}
            ref={nameInput}
            defaultValue={preset ? preset.name : ""}
          />
        </div>

        <div className={styles.presets__group}>
          <div className={styles.presets__label}>
            <label htmlFor="" style={{ color: accent }}>
              Text
            </label>

            <button className={styles.presets__upload}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                  stroke={accent}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.1666 6.66667L9.99998 2.5L5.83331 6.66667"
                  stroke={accent}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 2.5V12.5"
                  stroke={accent}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <textarea
            style={{ borderColor: accentDarker, color: text }}
            ref={textInput}
            defaultValue={preset ? preset.text : ""}
          ></textarea>
        </div>

        {/* <div className={styles.presets__group}>
          <div className={styles.presets__label}>
            <label htmlFor="">Mode</label>
          </div>

          <input type="text" />
        </div> */}
      </div>

      <button
        className={styles.presets__save}
        style={{ color: accent, borderColor: accentDarker }}
        onClick={saveHandler}
      >
        Save
      </button>
    </div>,
    document.getElementById("modal_root") as HTMLDivElement
  );
}

export default PresetsEdit;
