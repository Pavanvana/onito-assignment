import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useCustomT = (path: string) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, [i18n]);

  const customT = (name: string): string => {
    return t(`${path}.${name}`);
  };

  return customT;
};
