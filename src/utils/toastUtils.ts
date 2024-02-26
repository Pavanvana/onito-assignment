import { ToastContainerProps, ToastPosition, toast } from "react-toastify";
import { ToastEnum } from "../types/toastTypes";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  type: string;
  msg: string;
  position?: ToastPosition;
  duration?: number;
  bodyStyle?: string;
}

export const toastify = (props: Props) => {
  const { type, msg, position = "bottom-center", duration = 5000 } = props;
  const toastParam: ToastContainerProps = {
    position: position,
    autoClose: duration,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    newestOnTop: true,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "colored",
  };

  switch (type) {
    case ToastEnum.INFO:
      return toast.info(msg, toastParam);
    case ToastEnum.SUCCESS:
      return toast.success(msg, toastParam);
    case ToastEnum.WARNING:
      return toast.warning(msg, toastParam);
    case ToastEnum.ERROR:
      return toast.error(msg, toastParam);
    default:
      return toast.info(msg, toastParam);
  }
};

export const SuccessToast = (msg: string) => {
  toastify({ type: ToastEnum.SUCCESS, msg: msg });
};

export const ErrorToast = (msg: string) =>
  toastify({ type: ToastEnum.ERROR, msg: msg });

export const WarningToast = (msg: string) =>
  toastify({ type: ToastEnum.WARNING, msg: msg });

export const InfoToast = (msg: string) =>
  toastify({ type: ToastEnum.INFO, msg: msg });
