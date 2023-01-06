import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { TyperState } from "../../../store/typer-reducer";

import words from "../../../data/words";

import { Theme } from "../../../data/themes";
import styles from "./TyperField.module.scss";

function TyperWords() {
  const typer = useSelector((state: { typer: TyperState }) => state.typer);
  const { accent } = useSelector((state: { theme: Theme }) => state.theme.colors);

  const [history, setHistory] = useState([] as string[]);
  const [text, setText] = useState([] as string[]);

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      setHistory((prevHistory) => [...prevHistory, e.key]);
    });
  }, []);

  useEffect(() => {
    function getRandomText() {
      const length = typer.settings.words > 0 ? typer.settings.words : 30;
      let text = "";

      for (let i = 0; i < length; i++) {
        text += words[Math.round(Math.random() * (words.length - 1))] + " ";
      }

      return text.split("");
    }

    setHistory([]);
    setText(getRandomText());
  }, [typer.settings]);

  function generateTyper() {
    return text.map((letter, index) => (
      <span
        style={{ color: accent }}
        className={`${letter === history[index] ? styles.active : ""}`}
      >
        {letter}
      </span>
    ));
  }

  function cursorPosition() {
    const position = { x: 0, y: 0, lines: [] as number[] };
    let line = "";
    for (let i = 0; i < text.length; i++) {
      line += text[i];
      if (line.length > 800 / 10.8) {
        position.lines.push(
          line.substring(0, line.lastIndexOf(" ") + 1).length
        );
        line = line.substring(line.lastIndexOf(" ") + 1);
      }
    }

    if (line.length > 0) {
      position.lines.push(line.length);
    }

    let sum = 0;
    for (let i = 0; i < position.lines.length; i++) {
      if (sum + position.lines[i] > history.length) {
        position.y = i;
        break;
      }
      sum += position.lines[i];
    }
    position.x = history.length - sum;
    return position;
  }

  function addCursor() {
    const position = cursorPosition();
    return (
      <div
        className={styles.typer__cursor}
        style={{
          background: accent,
          transform: `translateX(${position.x * 10.8}px) translateY(${
            position.y * 24
          }px)`,
        }}
      ></div>
    );
  }

  return (
    <>
      {generateTyper()}
      {addCursor()}
    </>
  );
}

export default TyperWords;
