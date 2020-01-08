import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "./computerProvider.js";
import Employee from "./employee.js";

const contentTarget = document.querySelector(".employee__Container")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
            // Find this product's type
            const computer = computers.find(computer => computer.id === employee.computerId)

            // Get HTML representation of product
            const html = Employee(employee, computer)

            return html
        }).join("")
    }

    render()
}

export default EmployeeList
