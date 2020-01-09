import { getEmployees } from "./employeeProvider.js";
import EmployeeList from "./employeeList.js";
import { getComputers } from "./computerProvider.js";
import { getDepartments } from "./departmentProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(EmployeeList)