import { getEmployees } from "./Providers/employeeProvider.js";
import EmployeeList from "./Employee/employeeList.js";
import { getComputers } from "./Providers/computerProvider.js";
import { getDepartments } from "./Providers/departmentProvider.js";
import { getLocations } from "./Providers/locationProvider.js";
import { getCustomers } from "./Providers/customerProvider.js";
import { getEmployeeCustomer } from "./Providers/employeeCustomerProvider.js";
import CustomerList from "./Customer/customerList.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomer)
    .then(EmployeeList)
    .then(CustomerList)