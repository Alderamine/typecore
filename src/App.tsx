import React from "react";
import { Route, Routes } from "react-router-dom";

//pages
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main />} path="/" />
      </Routes>
    </>
  );
}

export default App;
