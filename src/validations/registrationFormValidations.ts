import * as yup from "yup";

export const firstStepSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  age: yup
    .number()
    .transform((value, originalValue) => {
      return originalValue === "" ? undefined : value;
    })
    .required("Age is required")
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer"),
  sex: yup
    .string()
    .required("Sex is required")
    .oneOf(["Male", "Female"], "Invalid sex"),
  mobile: yup
    .string()
    .required("Mobile is required")
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  govtIdType: yup
    .string()
    .required("ID Type is required")
    .oneOf(["Aadhar", "PAN"], "Invalid ID Type"),
  govtId: yup.string().when("govtIdType", {
    is: (val: string | undefined) => val === "Aadhar",
    then: () => yup.string().matches(/^[2-9]\d{11}$/, "Invalid Aadhar ID"),
    otherwise: () =>
      yup
        .string()
        .matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, "Invalid PAN ID"),
  }),
});

export const secondStepSchema = yup.object().shape({
  address: yup.string(),
  state: yup.string(),
  city: yup.string(),
  country: yup.string().required("Country is required"),
  pincode: yup.string().when("$pincodeFilled", {
    is: true,
    then: () =>
      yup
        .string()
        .matches(/^\d+$/, "Pincode must be numeric")
        .length(6, "Pincode must be 6 digits long"),
    otherwise: () => yup.string(),
  }),
});
