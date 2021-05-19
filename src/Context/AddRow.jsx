import { useContext } from "react";
import { RowDataContext } from "./AD_Context.jsx";

export const AddRow = (input) => {
  const [rowData, setRowData] = useContext(RowDataContext);
  var newData = {
    name: String(input),
    status: false,
    views: 0,
    completion_rate: 0.0,
  };
  return setRowData(...rowData, newData);
};
