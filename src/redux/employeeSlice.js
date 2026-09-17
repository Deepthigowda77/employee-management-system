import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEmployees,
  createEmployee,
  updateEmployee as updateEmployeeAPI,
  deleteEmployee as deleteEmployeeAPI,
} from "../services/employeeService";

// ========================================
// 1. FETCH EMPLOYEES
// ========================================

export const fetchEmployees = createAsyncThunk(
  "employees/fetchEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getEmployees();

// console.log("EMPLOYEE API DATA:", response.data);

return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ========================================
// 2. ADD EMPLOYEE
// ========================================

export const addEmployee = createAsyncThunk(
  "employees/addEmployee",
  async (employeeData, { rejectWithValue }) => {
    try {
      const response = await createEmployee(employeeData);

      return {
        ...employeeData,
        id: response.data.employeeId,
      };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ========================================
// 3. UPDATE EMPLOYEE
// ========================================

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async (employeeData, { rejectWithValue }) => {
    try {
      await updateEmployeeAPI(
        employeeData.id,
        employeeData
      );

      return employeeData;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ========================================
// 4. DELETE EMPLOYEE
// ========================================

export const removeEmployee = createAsyncThunk(
  "employees/removeEmployee",
  async (employeeId, { rejectWithValue }) => {
    try {
      await deleteEmployeeAPI(employeeId);

      return employeeId;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);


// ========================================
// 5. INITIAL STATE
// ========================================

const initialState = {
  employees: [],
  loading: false,
  error: null,

  adding: false,
  updating: false,
  deleting: false,
};


// ========================================
// 6. CREATE SLICE
// ========================================

const employeeSlice = createSlice({
  name: "employees",

  initialState,

  reducers: {},


  // ========================================
  // ASYNC ACTIONS
  // ========================================

  extraReducers: (builder) => {

    // ----------------------------------------
    // FETCH
    // ----------------------------------------

    builder.addCase(
      fetchEmployees.pending,
      (state) => {
        state.loading = true;
        state.error = null;
      }
    );

    builder.addCase(
      fetchEmployees.fulfilled,
      (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      }
    );

    builder.addCase(
      fetchEmployees.rejected,
      (state, action) => {
        state.loading = false;

        state.error =
          action.payload ||
          action.error.message;
      }
    );


    // ----------------------------------------
    // ADD
    // ----------------------------------------

   builder.addCase(
  addEmployee.pending,
  (state) => {
    state.adding = true;
    state.error = null;
  }
);

  builder.addCase(
  addEmployee.fulfilled,
  (state, action) => {
    state.adding = false;

    state.employees.push(
      action.payload
    );
  }
);

  builder.addCase(
  addEmployee.rejected,
  (state, action) => {
    state.adding = false;

    state.error =
      action.payload ||
      action.error.message;
  }
);


    // ----------------------------------------
    // UPDATE
    // ----------------------------------------

    builder.addCase(
      updateEmployee.pending,
      (state) => {
        state.updating = true;
        state.error = null;
      }
    );

  builder.addCase(
  updateEmployee.fulfilled,
  (state, action) => {
    state.updating = false;

    const index =
      state.employees.findIndex(
        (employee) =>
          employee.id === action.payload.id
      );

    if (index !== -1) {
      state.employees[index] =
        action.payload;
    }
  }
);

  builder.addCase(
  updateEmployee.rejected,
  (state, action) => {
    state.updating = false;

    state.error =
      action.payload ||
      action.error.message;
  }
);


    // ----------------------------------------
    // DELETE
    // ----------------------------------------

   builder.addCase(
  removeEmployee.pending,
  (state) => {
    state.deleting = true;
    state.error = null;
  }
);

  builder.addCase(
  removeEmployee.fulfilled,
  (state, action) => {
    state.deleting = false;

    state.employees =
      state.employees.filter(
        (employee) =>
          employee.id !== action.payload
      );
  }
);

   builder.addCase(
  removeEmployee.rejected,
  (state, action) => {
    state.deleting = false;

    state.error =
      action.payload ||
      action.error.message;
  }
);
  },
});


export default employeeSlice.reducer;