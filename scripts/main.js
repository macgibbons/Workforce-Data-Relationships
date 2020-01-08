import { getEmployees } from "./employeeProvider.js";
import EmployeeList from "./employeeList.js";
import { getComputers } from "./computerProvider.js";

getEmployees()
    .then(getComputers)
    .then(EmployeeList)