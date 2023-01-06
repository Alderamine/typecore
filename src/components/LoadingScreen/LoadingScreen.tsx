import React, { useState } from "react";

import { useSelector } from "react-redux";
import { LoadState } from "../../store/loading-page-reducers";

import Spinner from "./Spinner/Spinner";
import FirstLoad from "./FirstLoad/FirstLoad";

function LoadingScreen() {
  const { loaded, loadType, animationFinished } = useSelector(
    (state: { load: LoadState }) => state.load
  );
  const [display, setDisplay] = useState(true);

  function displayLoad() {
    if (!loaded && loadType === "LOAD") {
      return <Spinner />;
    } else if (loadType === "FIRST_LOAD" && (!loaded || !animationFinished)) {
      return <FirstLoad />;
    }

    setTimeout(() => {
      setDisplay(false);
    }, 500);

    return loadType === "LOAD" ? (
      <Spinner hide={true} />
    ) : (
      <FirstLoad hide={true} />
    );
  }

  return <>{display && displayLoad()}</>;
}

export default LoadingScreen;
