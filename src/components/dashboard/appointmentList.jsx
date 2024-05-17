import React from "react";
import DataTable from "react-data-table-component";
import PrescriptionArray from "../../array/prescriptionArray";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoIosPrint } from "react-icons/io";
const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Address",
    selector: (row) => row.Address,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
  },
  {
    name: "Weight",
    selector: (row) => row.weight,
  },
  {
    name: "create",
    selector: (row) => row.create,
  },
  {
    name: "Action",
    button: true,
    cell: (row) => (
      <>
        <Link to={`/dashboard/${row.id}`} className="mr-1">
          <FaRegEye size={18} />
        </Link>
        <Link to={`/dashboard/${row.id}`}>
          <IoIosPrint size={18} />
        </Link>
      </>
    ),
  },
];

const AppointmentList = () => {
  return (
    <div>
      <h3 className="px-4 text-[18px] font-bold">Prescription List</h3>
      <DataTable columns={columns} data={PrescriptionArray} pagination />
    </div>
  );
};

export default AppointmentList;
