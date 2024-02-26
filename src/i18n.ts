import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        FirstStepRegistration: {
          firstStep: "First Step Registration",
          name: "Name",
          age: "Age",
          sex: "Sex",
          mobile: "Mobile",
          govtIssuedIDType: "Govt Issued ID Type",
          govtIssuedID: "Govt Issued ID",
        },
        firstStep: "First Step",
        secondStep: "Second Step",
        registrationSuccess: "Registration Success",
        back: "Back",
        next: "Next",
        submit: "Submit",
        name: "Name",
        email: "Email",
        country: "Country",
        address: "Address",
        pincode: "Pincode",
        state: "State",
        city: "City",
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
