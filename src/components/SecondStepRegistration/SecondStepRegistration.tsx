import React, { useMemo } from "react";
import { useForm } from "react-hook-form";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button, Grid } from "@material-ui/core";
import Autocomplete from "@mui/material/Autocomplete";

import { secondStepSchema } from "../../validations/registrationFormValidations";
import getCountriesList from "../../controllers/apis/getCountriesAPI";

import {
  errorMsgClass,
  fieldContainerClass,
  secondStepHeadingClass,
} from "./styles";
import "./index.css";

interface Props {
  onSubmit: (data: any) => void;
  onClickBack: () => void;
}

const SecondStepRegistration = (props: Props): React.ReactElement => {
  const stepTwoData = useSelector(
    (state: RootState) => state.registrationData.stepTwoData
  );
  const [countryList, setCountryList] = React.useState<string[]>([]);
  const { onSubmit, onClickBack } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(secondStepSchema),
    defaultValues: stepTwoData || undefined,
  });

  useMemo(async () => {
    const countriesList = await getCountriesList();
    setCountryList(countriesList);
  }, []);

  const handleFormSubmit = (data: any): void => {
    onSubmit(data);
  };

  const renderFooter = (): React.ReactElement => (
    <Grid className="flex items-center justify-between mx-[20px] mb-[20px]">
      <Button type="button" onClick={onClickBack}>
        Back
      </Button>
      <Button type="submit">Submit</Button>
    </Grid>
  );

  const renderTopFields = (): React.ReactElement => (
    <Grid className="flex items-center justify-between max-[900px]:flex-col">
      <Grid className={fieldContainerClass}>
        <TextField
          variant="outlined"
          label="Address"
          {...register("address")}
        />
        <span className={errorMsgClass}>
          {errors.address && errors.address.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <Autocomplete
          disablePortal
          id="country"
          options={countryList}
          sx={{ width: 300 }}
          renderInput={(params: any) => (
            <TextField
              variant="outlined"
              {...params}
              label="Country"
              {...register("country")}
            />
          )}
        />
        <span className={errorMsgClass}>
          {errors.country && errors.country.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <TextField variant="outlined" label="City" {...register("city")} />
        <span className={errorMsgClass}>
          {errors.city && errors.city.message}
        </span>
      </Grid>
    </Grid>
  );

  const renderBottomFields = (): React.ReactElement => (
    <Grid className="flex items-center max-[900px]:flex-col">
      <Grid className={fieldContainerClass}>
        <TextField variant="outlined" label="State" {...register("state")} />
        <span className={errorMsgClass}>
          {errors.state && errors.state.message}
        </span>
      </Grid>
      <Grid className={fieldContainerClass}>
        <TextField
          variant="outlined"
          label="Pincode"
          {...register("pincode")}
        />
        <span className={errorMsgClass}>
          {errors.pincode && errors.pincode.message}
        </span>
      </Grid>
    </Grid>
  );
  return (
    <Grid>
      <h2 className={secondStepHeadingClass}>Second Step</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col">
        {renderTopFields()}
        {renderBottomFields()}
        {renderFooter()}
      </form>
    </Grid>
  );
};

export default SecondStepRegistration;
