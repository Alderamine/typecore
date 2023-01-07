import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../store/theme-reducers";

import styles from "./MainTheme.module.scss";
import themes, { Theme } from "../../data/themes";

function ThemeModal(props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  closed?: boolean;
}) {
  const dispatch = useDispatch();
  const theme = useSelector((state: { theme: Theme }) => state.theme);
  const searchRef = useRef<HTMLInputElement>(null);
  const [filteredThemes, setFilteredThemes] = useState(themes);

  useEffect(() => {
    if (searchRef.current && searchRef.current.value) {
      console.log(searchRef.current.value);
      setFilteredThemes(() => {
        const newThemes = [] as Theme[];
        for (let theme of themes) {
          if (
            theme.name.indexOf(
              searchRef.current ? searchRef.current.value : ""
            ) >= 0
          ) {
            newThemes.push(theme);
          }

          if (
            theme.tags.find(
              (t) =>
                t.indexOf(searchRef.current ? searchRef.current.value : "") >= 0
            )
          ) {
            newThemes.push(theme);
          }
        }

        return newThemes;
      });
    }
  }, [searchRef]);

  function inputHandler() {
    setFilteredThemes(() => {
      const newThemes = [] as Theme[];
      for (let theme of themes) {
        let text = (theme.name + theme.tags.join(""))
          .toLocaleLowerCase()
          .trim();
        if (
          text.indexOf(searchRef.current ? searchRef.current.value : "") >= 0
        ) {
          newThemes.push(theme);
        }
      }

      console.log(newThemes);
      return newThemes;
    });
  }

  function changeThemeHandler(id: string) {
    dispatch(themeActions.setTheme(id));
  }

  return createPortal(
    <div
      className={`${styles.modal} ${
        props.closed ? styles.closed : styles.opened
      }`}
      style={{
        background: theme.colors.container,
      }}
    >
      <button className={styles.modal__go_back} onClick={props.onClick}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 17L6 12L11 7"
            stroke={theme.colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 17L13 12L18 7"
            stroke={theme.colors.accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span style={{ color: theme.colors.accent }}>Go back</span>
      </button>

      <div className={styles.modal__header}>
        <div className={styles.modal__search}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
              stroke={theme.colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 20.9999L16.65 16.6499"
              stroke={theme.colors.accent}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search"
            onInput={inputHandler}
            onChange={inputHandler}
            ref={searchRef}
            style={{
              borderColor: theme.colors.accentDarker,
              color: theme.colors.text,
            }}
          />
        </div>
        {/* 
        <button className={styles.modal_filter__button}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.875 20C17.3927 20 17.8125 20.4198 17.8125 20.9375C17.8125 21.4552 17.3927 21.875 16.875 21.875H13.125C12.6073 21.875 12.1875 21.4552 12.1875 20.9375C12.1875 20.4198 12.6073 20 13.125 20H16.875ZM20.625 13.75C21.1427 13.75 21.5625 14.1698 21.5625 14.6875C21.5625 15.2052 21.1427 15.625 20.625 15.625H9.375C8.85724 15.625 8.4375 15.2052 8.4375 14.6875C8.4375 14.1698 8.85724 13.75 9.375 13.75H20.625ZM24.375 7.5C24.8927 7.5 25.3125 7.91974 25.3125 8.4375C25.3125 8.95526 24.8927 9.375 24.375 9.375H5.625C5.10724 9.375 4.6875 8.95526 4.6875 8.4375C4.6875 7.91974 5.10724 7.5 5.625 7.5H24.375Z"
              fill="white"
            />
          </svg>
        </button> */}
      </div>

      <div className={styles.modal__themes}>
        {filteredThemes.map((t) => (
          <div className={styles.modal_theme}>
            <button
              className={styles.modal_theme__container}
              style={{ background: t.colors.background }}
              onClick={changeThemeHandler.bind(null, t.id)}
            >
              <span
                className={styles.modal_theme__name}
                style={{
                  color: t.colors.accent,
                  background: t.colors.container,
                  borderColor: t.colors.accentDarker,
                }}
              >
                {t.name}
              </span>
            </button>
            <p className={styles.modal_theme__tags}>
              {t.tags.map((tag) => (
                <span style={{ color: theme.colors.accentDarker }}>
                  #{tag}{" "}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>,
    document.getElementById("modal_root") as HTMLDivElement
  );
}

export default ThemeModal;
