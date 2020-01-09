import { getEmployees } from "./employeeProvider.js";
import EmployeeList from "./employeeList.js";
import { getComputers } from "./computerProvider.js";
import { getDepartments } from "./departmentProvider.js";
import { getLocations } from "./locationProvider.js";

getEmployees()
    .then(getComputers)
    .then(getDepartments)
    .then(getLocations)
    .then(EmployeeList)