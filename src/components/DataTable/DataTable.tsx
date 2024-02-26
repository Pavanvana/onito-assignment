import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import $ from "jquery";
import DataTable from "datatables.net";
import { RootState } from "../../redux";

// import "datatables.net-dt/css/jquery.dataTables.css";

const UserTable: React.FC = (): React.ReactElement => {
  const registrationData = useSelector(
    (state: RootState) => state.registrationData
  );

  useEffect(() => {
    $("#dataTable").DataTable();
  }, []);

  return (
    <table id="dataTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Govt ID Type</th>
          <th>Govt ID</th>
          <th>Address</th>
          <th>Country</th>
          <th>State</th>
          <th>City</th>
          <th>Pincode</th>
        </tr>
      </thead>
      <tbody>
        {registrationData.stepOneData && registrationData.stepTwoData && (
          <tr>
            <td>{registrationData.stepOneData.name}</td>
            <td>{registrationData.stepOneData.age}</td>
            <td>{registrationData.stepOneData.sex}</td>
            <td>{registrationData.stepOneData.mobile}</td>
            <td>{registrationData.stepOneData.govtIdType}</td>
            <td>{registrationData.stepOneData.govtId}</td>
            <td>{registrationData.stepTwoData.address}</td>
            <td>{registrationData.stepTwoData.country}</td>
            <td>{registrationData.stepTwoData.state}</td>
            <td>{registrationData.stepTwoData.city}</td>
            <td>{registrationData.stepTwoData.pincode}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
