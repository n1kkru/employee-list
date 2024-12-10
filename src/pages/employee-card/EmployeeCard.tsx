import defaultImage from "../../../public/emp.png";
import { useParams } from "react-router";
import { useSelector } from "../../utils/state";
import styles from "./EmployeeCard.module.scss";

export const EmployeesCard = () => {
  const id = useParams().number?.split(":").slice(1)[0];
  const employeeData = useSelector((state) =>
    state.reducer.employees.find((emp) => emp.id == Number(id))
  );
  const date = new Date(employeeData ? employeeData?.birthDate : "");

  return (
    <div className={styles.main}>
      <img
        className={styles.img}
        src={employeeData?.photo ? atob(employeeData?.photo) : defaultImage}
        alt="Фото"
      />
      <h1 className={styles.name}>{employeeData?.lastName}</h1>
      <h1 className={styles.name}>{employeeData?.firstName}</h1>
      <h1 className={styles.name}>{employeeData?.middleName}</h1>
      <h2 className={styles.desc}>
        <span className={styles.descLabel}>Дата рождения</span>
        {`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
      </h2>
      <h2 className={styles.desc}>
        <span className={styles.descLabel}>Отдел:</span>
        {employeeData?.department}
      </h2>
      <h2 className={styles.desc}>
        <span className={styles.descLabel}>Должность:</span>
        {employeeData?.post}
      </h2>
      <h2 className={styles.desc}>
        <span className={styles.descLabel}>Заработная плата:</span>
        {employeeData?.salary} руб.
      </h2>
    </div>
  );
};
