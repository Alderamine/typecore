import React, { MouseEvent } from "react";
import ReactDOM from "react-dom";
import styles from "./Backdrop.module.scss";

function Backdrop(props: { onClose: Function }) {
  function closeHandler(e: MouseEvent<HTMLDivElement>) {
    props.onClose();
  }

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={closeHandler}></div>,
    document.getElementById("backdrop_root") as HTMLDivElement
  );
}

export default Backdrop;
