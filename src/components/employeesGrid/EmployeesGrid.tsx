import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { TEmployee } from "../../utils/api";
import { useNavigate } from "react-router";
import styles from './EmployeesGrid.module.scss'
interface EmployeesGridProps {
  employeesList : TEmployee[]
}

export const EmployeesGrid = ({employeesList} : EmployeesGridProps) => {
  const navigate = useNavigate();
  const newEmployeesList = employeesList.map((emp: TEmployee) => {
    return {
      id: emp.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      middleName: emp.middleName,
      birthDate: emp.birthDate,
      department: emp.department,
      post: emp.post,
      salary: emp.salary,
      photo: emp.photo ? emp.photo : ""
    };
  });

  const columns: GridColDef<(typeof newEmployeesList)[number]>[] = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "firstName",
      headerName: "Имя",
      width: 110,
    },
    {
      field: "lastName",
      headerName: "Фамилия",
      width: 110,
    },
    {
      field: "middleName",
      headerName: "Отчество",
      width: 110,
    },
    {
      field: "birthDate",
      headerName: "Дата",
      type: "string",
      width: 110,
    },
    {
      field: "department",
      headerName: "Отдел",
      type: "string",
      width: 110,
    },    
    {
      field: "post",
      headerName: "Позиция",
      type: "string",
      width: 110,
    },
    {
      field: "salary",
      headerName: "Зарплата",
      type: "string",
      width: 110,
    }
  ]
  
  return (
    <div className={styles.main}>
      <DataGrid
        sx={{
          maxHeight: "80vh",
          maxWidth: "100%",
          borderRadius: "20px",
          border: "none",
          "--DataGrid-containerBackground": "var(--bg-color)",
        }}
        rows={newEmployeesList}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        onRowClick={(e) => {
          navigate(`/employee/:${e.id}`);
        }}
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
)}