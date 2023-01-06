import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { TyperState, typerActions } from "../../../store/typer-reducer";

import { Theme } from "../../../data/themes";
import styles from "./TyperField.module.scss";

import TyperWords from "./TyperWords";

function TyperField() {
  const dispatch = useDispatch();
  const { accent, text } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const typer = useSelector((state: { typer: TyperState }) => state.typer);

  function removeBlur() {
    dispatch(typerActions.setBlur(false));
  }

  return (
    <div className={styles.typer} onClick={removeBlur}>
      <div
        className={`${styles.typer__container} ${
          typer.blured ? styles.blured : ""
        }`}
      >
        <TyperWords />
      </div>
      {typer.blured && (
        <button style={{ color: text }}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.54584 3.84131L10.6158 20.8113L13.1258 13.4213L20.5158 10.9113L3.54584 3.84131Z"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.5458 13.8413L19.5458 19.8413"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Click to start
        </button>
      )}
    </div>
  );
}

export default TyperField;
