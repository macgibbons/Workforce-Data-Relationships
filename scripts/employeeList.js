import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "./computerProvider.js";
import Employee from "./employee.js";
import { useDepartments } from "./departmentProvider.js";
import { useLocations } from "./locationProvider.js";

const contentTarget = document.querySelector(".employee__Container")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const computer = computers.find(computer => computer.id === employee.computerId)

            const department = departments.find(department => department.id === employee.departmentId)

            const location = locations.find(location => location.id === employee.locationId)

            // Get HTML representation of product
            const html = Employee(employee, computer, department, location)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList
