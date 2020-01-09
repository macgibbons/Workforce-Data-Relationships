import { getEmployees } from "./employeeProvider.js";
import EmployeeList from "./employeeList.js";
import { getComputers } from "./computerProvider.js";
import { getDepartments } from "./departmentProvider.js";
import { getLocations } from "./locationProvider.js";
import { getCustomers } from "./customerProvider.js";
import { getEmployeeCustomer } from "./Providers/employeeCustomerProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(getCustomers)
    .then(getEmployeeCustomer)
    .then(EmployeeList)