import axios from 'axios'

const API_URL = '/employee'

// Create new employee
const createEmployee = async (employeeData: Record<string, string>) => {
  const response = await axios.post(API_URL, employeeData)

  return response.data
}

// Get employees
const getEmployees = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

// Delete employee
const deleteEmployee = async (emplyeeId: string) => {

  const response = await axios.delete(API_URL + emplyeeId)

  return response.data
}

const employeeService = {
    createEmployee,
  getEmployees,
  deleteEmployee,
}

export default employeeService