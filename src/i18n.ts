import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        firstStepRegistration: {
          firstStepHeading: "First Step Registration",
          name: "Name*",
          age: "Age*",
          sex: "Sex*",
          mobile: "Mobile",
          govtIssuedIDType: "Govt Issued ID Type",
          govtIssuedID: "Govt Issued ID",
          male: "Male",
          female: "Female",
          next: "Next",
        },
        secondStepRegistration: {
          secondStepHeading: "Second Step Registration",
          back: "Back",
          submit: "Submit",
          country: "Country",
          address: "Address",
          pincode: "Pincode",
          state: "State",
          city: "City",
        },
        dataTablesHeading: { heading: "Registrations Data" },
      },
    },
    te: {
      translation: {},
    },
    hi: { translation: {} },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
