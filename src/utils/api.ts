const BASE_URL = "https://923a0b9f4b739d12.mokky.dev";

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export type TEmployee = {
    "id": number,
    "firstName": string,
    "lastName": string,
    "middleName": string,
    "birthDate": string,
    "department": string,
    "post": string,
    "salary": number,
    "photo"?: string
}

export const getEmployeesApi = () =>
  fetch(`${BASE_URL}/employee`)
    .then((res) => checkResponse<TEmployee[]>(res))
    .then((data) => {
      if (data) return data;
      return Promise.reject(data);
    });