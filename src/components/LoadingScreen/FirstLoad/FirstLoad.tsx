import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { LoadState, loadActions } from "../../../store/loading-page-reducers";

import { Theme } from "../../../data/themes";
import styles from "./FirstLoad.module.scss";

const message = "Welcome to TypeCore. Begin your typing journey!".split("");
const keyboardItems = [
  [
    { type: "reg", id: "key-1", keys: "!" },
    { type: "reg", id: "key-2", keys: "w" },
    { type: "reg", id: "key-3", keys: "e" },
    { type: "reg", id: "key-4", keys: "rt" },
    { type: "reg", id: "key-5", keys: "yu" },
    { type: "reg", id: "key-6", keys: "oi" },
    { type: "reg", id: "key-7", keys: "p" },
    { type: "reg", id: "key-8" },
  ],
  [
    { type: "reg", id: "key-9" },
    { type: "reg", id: "key-10" },
    { type: "reg", id: "key-11" },
    { type: "reg", id: "key-12", keys: "g" },
    { type: "reg", id: "key-13", keys: "j" },
    { type: "reg", id: "key-14", keys: "l" },
    { type: "big", id: "key-15" },
  ],
  [
    { type: "reg", id: "key-16" },
    { type: "reg", id: "key-17", keys: "c" },
    { type: "reg", id: "key-18", keys: "b" },
    { type: "big", id: "key-19", keys: " " },
    { type: "reg", id: "key-20", keys: "nm." },
    { type: "reg", id: "key-21" },
    { type: "reg", id: "key-22" },
  ],
];

function FirstLoad(props: { hide?: boolean }) {
  const dispatch = useDispatch();
  const { loaded, loadType } = useSelector(
    (state: { load: LoadState }) => state.load
  );
  const { accent, accentDarker, container, text } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );

  const [activeKey, setActiveKey] = useState("");

  useEffect(() => {
    for (let i = 0; i < message.length + 1; i++) {
      let char = message[i] ? message[i] : "-";
      setTimeout(() => {
        for (let line of keyboardItems) {
          const key = line.find((key) => key.keys?.includes(char));
          if (key) {
            setActiveKey(key.id);
            break;
          }
          if (char === "-") {
            setActiveKey("");
          }
        }
      }, i * 100);
    }
  }, []);

  useEffect(() => {
    if (loaded && loadType === "FIRST_LOAD") {
      window.addEventListener("mousedown", () => {
        dispatch(loadActions.finishAnimation());
      });

      if (activeKey === "") {
        dispatch(loadActions.finishAnimation());
      }
    }
  }, [loaded, dispatch, activeKey, loadType]);

  return (
    <div className={`${styles.container} ${props.hide && styles.hide}`}>
      <div className={styles.field} style={{ background: container }}>
        <p style={{ color: accent }}>
          {message.map((letter, index) => (
            <span style={{ animationDelay: `${index * 0.1}s` }} key={index}>
              {letter}
            </span>
          ))}
        </p>
      </div>

      <div
        className={styles.keyboard}
        style={{ background: container, borderTopColor: accentDarker }}
      >
        {keyboardItems.map((row, i) => {
          return (
            <div className={styles.keyboard__line} key={i}>
              {row.map((key, j) => (
                <div
                  key={j}
                  style={{ background: accent }}
                  className={`${styles.keyboard__key} ${
                    styles[`keyboard__key--${key.type}`]
                  } ${
                    key.id === activeKey ? styles["keyboard__key--active"] : ""
                  }`}
                ></div>
              ))}
            </div>
          );
        })}
      </div>

      {!loaded ? (
        <div className={styles.state} style={{ color: text }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.spin}
          >
            <rect x="10" width="4" height="24" rx="2" fill="#FF33DE" />
            <rect
              x="24"
              y="10"
              width="4"
              height="24"
              rx="2"
              transform="rotate(90 24 10)"
              fill="#FF33DE"
            />
          </svg>
          Loading..
        </div>
      ) : (
        <div className={styles.state} style={{ color: text }}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 2.5L8.39167 16.6417L10.4833 10.4833L16.6417 8.39167L2.5 2.5Z"
              stroke="#FF33DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8333 10.8333L15.8333 15.8333"
              stroke="#FF33DE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Click to skip
        </div>
      )}
    </div>
  );
}

export default FirstLoad;
