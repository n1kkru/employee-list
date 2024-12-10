import { EmployeesCard } from "../../pages/employee-card/EmployeeCard";
import { EmployeesList } from "../../pages/employees-list/EmployeesList";
import styles from "./App.module.scss"
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "../../utils/state";
import { useEffect } from "react";
import { fetchGetEmployyes } from "../../utils/slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetEmployyes());
  }, []);
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/employee/:number" element={<EmployeesCard />} />
        <Route path="/employee" element={<EmployeesCard />} />
      </Routes>
    </div>

  );
};
export default App;