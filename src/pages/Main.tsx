import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { loadActions, LoadState } from "../store/loading-page-reducers";

import { Theme } from "../data/themes";
import styles from "./Main.module.scss";

import Navbar from "../components/Navbar/Navbar";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import Typer from "../components/Typer/Typer";
import MainFooter from "../components/MainFooter/MainFooter";

function Main() {
  const dispatch = useDispatch();
  const { loaded, loadType, animationFinished } = useSelector(
    (state: { load: LoadState }) => state.load
  );

  const { background } = useSelector(
    (state: { theme: Theme }) => state.theme.colors
  );

  useEffect(() => {
    dispatch(loadActions.startLoad({ loadType: "LOAD" }));

    setTimeout(() => {
      if (loadType === "LOAD") dispatch(loadActions.finishAnimation());
      dispatch(loadActions.finishLoad());
    }, 1);
  }, [dispatch, loadType]);

  return (
    <main className={styles.main} style={{ background }}>
      <Navbar ready={loaded && animationFinished} />
      <LoadingScreen />
      {loaded && animationFinished && <Typer />}
      {loaded && animationFinished && <MainFooter />}
    </main>
  );
}

export default Main;
