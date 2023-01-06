import React, { useState } from "react";

import { Theme } from "../../../data/themes";
import styles from "./Presets.module.scss";

import Backdrop from "../../Backdrop/Backdrop";
import PresetsMain from "./PresetsMain";
import PresetsEdit from "./PresetsEdit";

function Presets(props: { onClose: Function }) {
  const [showMain, setShowMain] = useState({ main: true, preset: "" });

  function changeTab(preset?: string) {
    setShowMain((prevShowMain) => {
      return { main: !prevShowMain.main, preset: preset ? preset : "" };
    });
  }

  return (
    <>
      <Backdrop onClose={props.onClose} />
      {showMain.main && (
        <PresetsMain onClose={props.onClose} onChangeTab={changeTab} />
      )}
      {!showMain.main && (
        <PresetsEdit goBack={changeTab} preset={showMain.preset} />
      )}
    </>
  );
}

export default Presets;
