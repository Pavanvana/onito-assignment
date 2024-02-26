import React, { ReactElement } from "react";
import { toast } from "react-toastify";
import RegistrationStepsController from "./controllers/RegistrationStepsController/RegistrationStepsController";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

toast.configure();

const App = (): ReactElement => {
  return (
    <div className="App">
      <RegistrationStepsController />
    </div>
  );
};

export default App;
