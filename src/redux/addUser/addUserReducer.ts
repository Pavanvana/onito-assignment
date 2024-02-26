import {
  RootState,
  ActionTypes,
  AddStepOneDataAction,
  AddStepTwoDataAction,
} from "./addUserTypes";

const initialRegistrationData: RootState["registrationData"] = {
  stepOneData: null,
  stepTwoData: null,
};

export const registrationDataReducer = (
  state = initialRegistrationData,
  action: AddStepOneDataAction | AddStepTwoDataAction
): RootState["registrationData"] => {
  switch (action.type) {
    case ActionTypes.ADD_STEP_ONE_DATA:
      return {
        ...state,
        stepOneData: action.payload,
      };
    case ActionTypes.ADD_STEP_TWO_DATA:
      return {
        ...state,
        stepTwoData: action.payload,
      };
    default:
      return state;
  }
};
