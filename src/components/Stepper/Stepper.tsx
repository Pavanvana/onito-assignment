import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { stepperSteps } from "../../constants/stepperConstants";

interface Props {
  activeStep: number;
}
const HorizontalLinearStepper = (props: Props): React.ReactElement => {
  const { activeStep } = props;

  return (
    <Box className="m-[20px]">
      <Stepper activeStep={activeStep}>
        {stepperSteps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default HorizontalLinearStepper;
