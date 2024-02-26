import {
  ActionTypes,
  AddStepOneDataAction,
  AddStepTwoDataAction,
  StepOneData,
  StepTwoData,
} from "./addUserTypes";

export const addStepOneData = (data: StepOneData): AddStepOneDataAction => ({
  type: ActionTypes.ADD_STEP_ONE_DATA,
  payload: data,
});

export const addStepTwoData = (data: StepTwoData): AddStepTwoDataAction => ({
  type: ActionTypes.ADD_STEP_TWO_DATA,
  payload: data,
});
