import React from "react";
import { BrowserRouter } from "react-router-dom";

import Approuter from "./routes/Approuter";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Approuter />
    </BrowserRouter>
  );
};

export default App;
