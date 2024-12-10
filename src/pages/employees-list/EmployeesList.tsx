import { getEmployeesApi, TEmployee } from "../../utils/api";
import { EmployeesGrid } from "../../components/employeesGrid/EmployeesGrid";
import {  useSelector } from "../../utils/state";

export const EmployeesList = () => {
  const initialState: TEmployee[] = [
    {
      id: 0,
      firstName: "Имя",
      lastName: "Фамилия",
      middleName: "Отчество",
      birthDate: "1999-01-01T00:00:00.172Z",
      department: "Отдел",
      post: "Позиция",
      salary: 0,
      photo: "defaultImage",
    },
  ];
  const employeesList = useSelector(state => state.reducer.employees)

  return <EmployeesGrid employeesList={employeesList} />;
};
