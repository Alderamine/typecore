import React from "react";

import { useSelector } from "react-redux";
import { TyperState } from "../../../store/typer-reducer";

import { Theme } from "../../../data/themes";
import styles from "./TyperHead.module.scss";

function TyperHead() {
  const { accent } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );
  const typer = useSelector((state: { typer: TyperState }) => state.typer);

  return (
    <div className={styles.head} style={{ opacity: typer.started ? "1" : "0" }}>
      <div className={styles.head__progress}>
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99984 18.9198C14.6022 18.9198 18.3332 15.1889 18.3332 10.5865C18.3332 5.98413 14.6022 2.25317 9.99984 2.25317C5.39746 2.25317 1.6665 5.98413 1.6665 10.5865C1.6665 15.1889 5.39746 18.9198 9.99984 18.9198Z"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 5.58655V10.5865L13.3333 12.2532"
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span></span>
      </div>

      <div className={styles.head__stats}>
        <div className={styles.head__stat}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.01734 5.65566C8.31415 4.56874 9.94015 3.8617 11.7241 3.70573V5.4231C11.7241 5.83731 12.0599 6.1731 12.4741 6.1731C12.8883 6.1731 13.2241 5.83731 13.2241 5.4231V3.70573C17.4031 4.07108 20.7153 7.46052 20.9596 11.6731H19.2241C18.8099 11.6731 18.4741 12.0089 18.4741 12.4231C18.4741 12.8373 18.8099 13.1731 19.2241 13.1731H20.9185C20.6578 15.4847 19.4952 17.4214 17.7506 18.8414C17.4294 19.1029 17.3809 19.5753 17.6424 19.8966C17.9039 20.2178 18.3763 20.2663 18.6976 20.0048C20.9241 18.1925 22.3677 15.6113 22.4685 12.5204C22.4726 12.4885 22.4747 12.4561 22.4747 12.4231C22.4747 12.4032 22.4739 12.3834 22.4724 12.3638C22.4735 12.3005 22.4741 12.2369 22.4741 12.1731C22.4741 6.65025 17.9969 2.1731 12.4741 2.1731C6.95127 2.1731 2.47412 6.65025 2.47412 12.1731C2.47412 15.4253 3.99715 18.1269 6.24398 19.9993C6.56219 20.2644 7.03511 20.2214 7.30029 19.9032C7.56546 19.585 7.52247 19.1121 7.20426 18.8469C5.49303 17.4209 4.30085 15.48 4.03176 13.1731H5.72375C6.13797 13.1731 6.47375 12.8373 6.47375 12.4231C6.47375 12.0089 6.13797 11.6731 5.72375 11.6731H3.98858C4.09775 9.79114 4.8192 8.07347 5.95668 6.71632L7.19379 7.95343C7.48668 8.24632 7.96156 8.24632 8.25445 7.95343C8.54734 7.66054 8.54734 7.18566 8.25445 6.89277L7.01734 5.65566ZM17.233 6.80719C16.9948 6.62281 16.6565 6.62921 16.4257 6.82247L16.2085 7.00477C16.0701 7.121 15.872 7.2876 15.6329 7.48919C15.1549 7.89229 14.5127 8.43559 13.8567 8.99596C13.2011 9.55593 12.5296 10.1346 11.9938 10.608C11.7262 10.8444 11.4898 11.0569 11.3051 11.2287C11.1334 11.3885 10.9727 11.5438 10.8853 11.6518C10.2324 12.4594 10.3721 13.6319 11.1975 14.2708C12.0229 14.9096 13.2213 14.7729 13.8743 13.9654C13.9617 13.8573 14.0792 13.6686 14.1986 13.4684C14.327 13.253 14.484 12.979 14.6576 12.6698C15.0052 12.0508 15.4264 11.2784 15.8326 10.5253C16.239 9.77179 16.6317 9.03536 16.9227 8.48748C17.0682 8.21349 17.1883 7.98655 17.2721 7.82806L17.4035 7.57927C17.5426 7.31513 17.4712 6.99157 17.233 6.80719Z"
              fill={accent}
            />
          </svg>
          <span>{typer.progress.speed}</span>
        </div>

        <div className={styles.head__stat}>
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

          <span>{typer.progress.mistakes}</span>
        </div>
      </div>
    </div>
  );
}

export default TyperHead;
