import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import employeeService from './emplyeeService'

const initialState = {
  employees: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new employee
export const createEmployee = createAsyncThunk(
  'employee/create',
  async (employeeData: Record<string, string>, thunkAPI) => {
    try {
      return await employeeService.createEmployee(employeeData)
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get user goals
export const getEmployees = createAsyncThunk(
  'employee/getAll',
  async (_, thunkAPI) => {
    try {
      
      return await employeeService.getEmployees()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete Employees
export const deleteEmployee = createAsyncThunk(
  'employee/delete',
  async (id, thunkAPI) => {
    try {
      return await employeeService.deleteEmployee(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employees.push(action.payload)
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employees = action.payload
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.employees = state.employees.filter(
          (employee) => employee._id !== action.payload.id
        )
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = employeeSlice.actions
export default employeeSlice.reducer