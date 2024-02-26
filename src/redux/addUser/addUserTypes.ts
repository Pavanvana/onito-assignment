export interface RegistrationData {
  stepOneData: StepOneData | null;
  stepTwoData: StepTwoData | null;
}

export interface StepOneData {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
}

export interface StepTwoData {
  address?: string;
  state?: string;
  city?: string;
  country: string;
  pincode?: string;
}

export interface RootState {
  registrationData: RegistrationData;
}

export enum ActionTypes {
  ADD_STEP_ONE_DATA = "ADD_STEP_ONE_DATA",
  ADD_STEP_TWO_DATA = "ADD_STEP_TWO_DATA",
}

export type AddStepOneDataAction = {
  type: ActionTypes.ADD_STEP_ONE_DATA;
  payload: StepOneData;
};

export type AddStepTwoDataAction = {
  type: ActionTypes.ADD_STEP_TWO_DATA;
  payload: StepTwoData;
};
