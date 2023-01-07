import React, { useState } from "react";

import { useSelector } from "react-redux";

import styles from "./MainTheme.module.scss";
import { Theme } from "../../data/themes";

import ThemeModal from "./ThemeModal";
import Backdrop from "../Backdrop/Backdrop";

function MainTheme() {
  const [themeModalOpened, setThemeModalOpened] = useState({
    opened: false,
    animationFinished: true,
  });

  const theme = useSelector((state: { theme: Theme }) => state.theme);

  function getThemeModal() {
    if (themeModalOpened.opened) {
      return <ThemeModal onClick={clickHandler} />;
    }

    if (!themeModalOpened.opened && !themeModalOpened.animationFinished) {
      setTimeout(() => {
        setThemeModalOpened((modalState) => {
          return { ...modalState, animationFinished: true };
        });
      }, 300);

      return <ThemeModal closed={true} onClick={clickHandler} />;
    }

    return;
  }

  function clickHandler() {
    setThemeModalOpened((modalOpened) => {
      return { opened: !modalOpened.opened, animationFinished: false };
    });
  }

  return (
    <>
      <button className={styles.footer_theme} onClick={clickHandler}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
            stroke={theme.colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
            stroke={theme.colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 15L16 10L5 21"
            stroke={theme.colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span style={{ color: theme.colors.accent }}>
          Theme - {theme.name}
        </span>
      </button>

      {getThemeModal()}
      {themeModalOpened.opened && <Backdrop onClose={clickHandler} />}
    </>
  );
}

export default MainTheme;
