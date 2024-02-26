export enum registrationFormType {
  FIRST_STEP = "firstStep",
  SECOND_STEP = "secondStep",
  REGISTRATION_SUCCESS = "registrationSuccess",
}

export interface FirstStepData {
  name: string;
  mobile: string;
  age: number;
  sex: string;
  govtIdType: string;
  govtId: string;
}

export interface SecondStepData {
  address: string;
  state: string;
  city: string;
  country: string;
  pincode: string;
}
