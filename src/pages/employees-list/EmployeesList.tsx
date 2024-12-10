import { EmployeesGrid } from "../../components/employeesGrid/EmployeesGrid";
import { useSelector } from "../../utils/state";

export const EmployeesList = () => {
  const employeesList = useSelector((state) => state.reducer.employees);

  return <EmployeesGrid employeesList={employeesList} />;
};
