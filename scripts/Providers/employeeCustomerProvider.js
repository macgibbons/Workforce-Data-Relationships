let employeeCustomers = []

export const useEmployeeCustomer = () => employeeCustomers.slice()

export const getEmployeeCustomer = () => fetch("http://localhost:3000/employeeCustomers")
    .then(res => res.json())
    .then(parsedEmployeeCustomers => employeeCustomers = parsedEmployeeCustomers)