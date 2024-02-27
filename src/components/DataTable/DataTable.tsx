import React, { useEffect } from "react";
import $ from "jquery";
import "datatables.net";

import { useCustomT } from "../../hooks/useCustomT";
import { tableHeaders } from "../../constants/tableConstants";

import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import "./index.css";

interface RegistrationsDataType {
  name: string;
  age: number;
  sex: string;
  mobile: string;
  govtIdType: string;
  govtId: string;
  address: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
}

const UserTable: React.FC = (): React.ReactElement => {
  const t = useCustomT("dataTablesHeading");
  const registrationData = localStorage.getItem("registrationData");
  const data: RegistrationsDataType[] =
    registrationData && JSON.parse(registrationData);

  useEffect(() => {
    $("#dataTable").DataTable();
  }, []);

  return (
    <div className="overflow-auto">
      <h2 className="text-2xl font-bold font-sans text-center">
        {t("heading")}
      </h2>
      <table id="dataTable" className="!w-full overflow-auto">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.sex}</td>
              <td>{user.mobile}</td>
              <td>{user.govtIdType}</td>
              <td>{user.govtId}</td>
              <td>{user.address}</td>
              <td>{user.country}</td>
              <td>{user.state}</td>
              <td>{user.city}</td>
              <td>{user.pincode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
