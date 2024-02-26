import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  OutlinedInput,
} from "@material-ui/core";
import { firstStepSchema } from "../../validations/registrationFormValidations";
import { useCustomT } from "../../hooks/useCustomT";

import {
  errorMsgClass,
  fieldContainerClass,
  firstStepHeadingClass,
} from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/addUser/addUserTypes";

interface Props {
  onNext: (data: any) => void;
}

const FirstStepRegistration = (props: Props): React.ReactElement => {
  const { onNext } = props;
  const stepOneData = useSelector(
    (state: RootState) => state.registrationData.stepOneData
  );
  const t = useCustomT("FirstStepRegistration");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(firstStepSchema),
    defaultValues: stepOneData || undefined,
  });

  const onSubmit = (data: any): void => {
    onNext(data);
  };

  const renderFooter = (): React.ReactElement => (
    <Grid className="flex items-center justify-end mx-[20px] mb-[20px]">
      <Button type="submit">Next</Button>
    </Grid>
  );

  const renderTopFields = (): React.ReactElement => (
    <Grid className="flex items-center justify-between max-[900px]:flex-col">
      <Grid className={fieldContainerClass}>
        <TextField variant="outlined" label="Name*" {...register("name")} />
        <span className={errorMsgClass}>
          {errors.name && errors.name.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <TextField variant="outlined" label="Age*" {...register("age")} />
        <span className={errorMsgClass}>
          {errors.age && errors.age.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <FormControl variant="outlined">
          <InputLabel id="sex-label">Sex*</InputLabel>
          <Select
            input={<OutlinedInput label="sex-label" />}
            labelId="sex-label"
            value={stepOneData?.sex}
            {...register("sex")}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
        <span className={errorMsgClass}>
          {errors.sex && errors.sex.message}
        </span>
      </Grid>
    </Grid>
  );

  const renderBottomFields = (): React.ReactElement => (
    <Grid className="flex items-center justify-between max-[900px]:flex-col">
      <Grid className={fieldContainerClass}>
        <TextField variant="outlined" label="Mobile" {...register("mobile")} />
        <span className={errorMsgClass}>
          {errors.mobile && errors.mobile.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <FormControl variant="outlined">
          <InputLabel id="govtIdType-label">Govt Issued ID Type</InputLabel>
          <Select
            input={<OutlinedInput label="Govt Issued ID Type" />}
            labelId="govtIdType-label"
            value={stepOneData?.govtIdType}
            {...register("govtIdType")}
          >
            <MenuItem value="Aadhar">Aadhar</MenuItem>
            <MenuItem value="PAN">PAN</MenuItem>
          </Select>
        </FormControl>
        <span className={errorMsgClass}>
          {errors.govtIdType && errors.govtIdType.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <TextField
          variant="outlined"
          label="Govt Issued ID"
          {...register("govtId")}
        />
        <span className={errorMsgClass}>
          {errors.govtId && errors.govtId.message}
        </span>
      </Grid>
    </Grid>
  );
  return (
    <Grid>
      <h2 className={firstStepHeadingClass}>{t("firstStep")}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        {renderTopFields()}
        {renderBottomFields()}
        {renderFooter()}
      </form>
    </Grid>
  );
};

export default FirstStepRegistration;
