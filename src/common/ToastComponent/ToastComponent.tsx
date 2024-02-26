import cn from "classnames";
import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  title: string;
  description: string;
  toastContainerClassName: string;
  toastTitleClassName: string;
  toastDescriptionClassName: string;
}

const ToastComponent = (props: Props): ReactElement => {
  const {
    icon,
    title,
    description,
    toastContainerClassName,
    toastTitleClassName,
    toastDescriptionClassName,
  } = props;
  return (
    <div className={cn(toastContainerClassName, "flex")}>
      {icon}
      <div className="flex flex-col">
        <h1 className={toastTitleClassName}>{title}</h1>
        <p className={toastDescriptionClassName}>{description}</p>
      </div>
    </div>
  );
};

export default ToastComponent;
