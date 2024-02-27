import React, { useState } from "react";
import { registrationFormType } from "../../types/registrationFormType";
import { Grid, Paper } from "@material-ui/core";
import { SuccessToast, WarningToast } from "../../utils/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import {
  addStepOneData,
  addStepTwoData,
  RootState,
  StepOneData,
  StepTwoData,
} from "../../redux";
import FirstStepRegistration from "../../components/FirstStepRegistration/FirstStepRegistration";
import SecondStepRegistration from "../../components/SecondStepRegistration/SecondStepRegistration";
import DataTable from "../../components/DataTable/DataTable";
import HorizontalLinearStepper from "../../components/Stepper/Stepper";

import { gridContainerClass, paperContainerClass } from "./styles";

const RegistrationStepsController = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [registrationStep, setRegistrationStep] =
    useState<registrationFormType>(registrationFormType.FIRST_STEP);
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const registrationData = useSelector(
    (state: RootState) => state.registrationData
  );

  const onClickNext = (data: StepOneData): void => {
    dispatch(addStepOneData(data));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    SuccessToast("First Step Validation Completed Successfully");
    setRegistrationStep(registrationFormType.SECOND_STEP);
  };

  const onClickSubmit = (data: StepTwoData): void => {
    const newData = {
      ...registrationData.stepOneData,
      ...data,
    };
    const previousData = localStorage.getItem("registrationData");
    let parsedData;
    if (previousData) {
      parsedData = JSON.parse(previousData);
      localStorage.setItem(
        "registrationData",
        JSON.stringify([newData, ...parsedData])
      );
    } else {
      localStorage.setItem("registrationData", JSON.stringify([newData]));
    }
    dispatch(addStepTwoData(data));
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    SuccessToast("Second Step Validation Completed Successfully");
    setRegistrationStep(registrationFormType.REGISTRATION_SUCCESS);
  };

  const renderRegistrationForm = (): React.ReactElement => {
    switch (registrationStep) {
      case registrationFormType.FIRST_STEP:
        return <FirstStepRegistration onNext={onClickNext} />;
      case registrationFormType.SECOND_STEP:
        return (
          <SecondStepRegistration
            onClickBack={() => {
              WarningToast("Redirect To First Step");
              setRegistrationStep(registrationFormType.FIRST_STEP);
              setActiveStep((prevActiveStep) => prevActiveStep - 1);
            }}
            onSubmit={onClickSubmit}
          />
        );
      case registrationFormType.REGISTRATION_SUCCESS:
        return <DataTable />;
    }
  };

  return (
    <Grid className={gridContainerClass}>
      <Paper elevation={10} className={paperContainerClass}>
        {registrationStep !== registrationFormType.REGISTRATION_SUCCESS && (
          <HorizontalLinearStepper activeStep={activeStep} />
        )}
        {renderRegistrationForm()}
      </Paper>
    </Grid>
  );
};

export default RegistrationStepsController;
