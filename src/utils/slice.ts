import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEmployeesApi, TEmployee } from "./api";

export interface ObjectsStateInterface {
  isInit: boolean;
  isLoading: boolean;
  employees: TEmployee[];
  error: string | null;
}

export const initialState: ObjectsStateInterface = {
  isInit: false,
  isLoading: false,
  employees: [],
  error: "",
};

export const fetchGetEmployyes = createAsyncThunk(
  "employees/getEmployees",
  async function () {
    const res = await getEmployeesApi();
    return res;
  }
);

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    init: (state) => {
      state.isInit = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetEmployyes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchGetEmployyes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.employees = action.payload;
    });
    builder.addCase(fetchGetEmployyes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = String(action.error.message);
    });
  }
});

export default slice.reducer;