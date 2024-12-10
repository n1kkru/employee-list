import { useContext, useEffect, useState } from "react";
import { getEmployeesApi, TEmployee } from "../../utils/api";
import defaultImage from "../../../public/emp.png";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "../../utils/state";
import styles from "./EmployeeCard.module.scss";
import { fetchGetEmployyes } from "../../utils/slice";

interface EmployeeCardProps {
  employeeData: TEmployee;
}

export const EmployeesCard = () => {
  const initialState: TEmployee = {
    id: 0,
    firstName: "Имя",
    lastName: "Фамилия",
    middleName: "Отчество",
    birthDate: "1999-01-01T00:00:00.172Z",
    department: "Отдел",
    post: "Позиция",
    salary: 0,
    photo: "defaultImage",
  };

  const id = useParams().number?.split(":").slice(1)[0];
  const employeeData = useSelector((state) =>
    state.reducer.employees.find((emp) => emp.id == Number(id))
  );
  const date = new Date(employeeData ? employeeData?.birthDate : "");
  
  return (
    <div className={styles.main}>
      <img className={styles.img} src={defaultImage} alt="Фото" />
      <h1 className={styles.name}>{employeeData?.lastName}</h1>
      <h1 className={styles.name}>{employeeData?.firstName}</h1>
      <h1 className={styles.name}>{employeeData?.middleName}</h1>
      <h2 className={styles.desc}>
        <span className={styles.descLabel}>Дата рождения</span>
        {`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`}
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
