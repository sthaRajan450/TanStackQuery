import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import FetchOld from "./pages/FetchOld";
import Home from "./pages/Home";
import FetchRQ from "./pages/FetchRQ";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trad" element={<FetchOld />} />
          <Route path="/rq" element={<FetchRQ />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
