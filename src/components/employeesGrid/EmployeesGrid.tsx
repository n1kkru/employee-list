import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { TEmployee } from "../../utils/api";
import { useNavigate } from "react-router";
import styles from "./EmployeesGrid.module.scss";
interface EmployeesGridProps {
  employeesList: TEmployee[];
}

export const EmployeesGrid = ({ employeesList }: EmployeesGridProps) => {
  const navigate = useNavigate();
  const newEmployeesList = employeesList.map((emp: TEmployee) => {
    return {
      id: emp.id,
      name: `${emp.lastName} ${emp.firstName} ${emp.middleName}`,
      birthDate: emp.birthDate,
      department: emp.department,
      post: emp.post,
      salary: emp.salary,
      photo: emp.photo ? emp.photo : "",
    };
  });

  const columns: GridColDef<(typeof newEmployeesList)[number]>[] = [
    { field: "id", headerName: "ID", width: 40 },
    {
      field: "name",
      headerName: "ФИО",
      width: 330,
    },
    {
      field: "department",
      headerName: "Отдел",
      type: "string",
      width: 110,
    },
    {
      field: "post",
      headerName: "Должность",
      type: "string",
      width: 150,
    }
  ];

  return (
    <div className={styles.main}>
      <DataGrid
        sx={{
          maxHeight: "80vh",
          maxWidth: "100%",
          borderRadius: "20px",
          border: "none",
          color: "#000",
          "--DataGrid-containerBackground": "rgba(195, 146, 72)",
          "& .MuiGridToolbarQuickFilter-root": { backgroundColor: "#000" },
          "--DataGrid-rowBorderColor": "#000",
          "& .MuiDataGrid-columnSeparator": { color: "#000" },
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
            style: {
              color: "#000",
            },
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
};
