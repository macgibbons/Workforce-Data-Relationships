import { useEmployees } from "../Providers/employeeProvider.js";
import { useComputers } from "../Providers/computerProvider.js";
import Employee from "../Employee/employee.js";
import { useDepartments } from "../Providers/departmentProvider.js";
import { useLocations } from "../Providers/locationProvider.js";
import { useCustomers } from "../Providers/customerProvider.js";
import { useEmployeeCustomer } from "../Providers/employeeCustomerProvider.js";

const contentTarget = document.querySelector(".employee__Container")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomer()

    const render = () => {
        contentTarget.innerHTML = `
        <h1>Employees</h1>
        <article class="employees">
        ${employees.map(employee => {
            // Find this product's type
            const computer = computers.find(computer => computer.id === employee.computerId)

            const department = departments.find(department => department.id === employee.departmentId)

            const location = locations.find(location => location.id === employee.locationId)

            const customerRelationships = empCust.filter(cr => cr.employeeId === employee.id)

            // For each relationship, find the corresponding company
            const foundCustomersArray = customerRelationships.map(cr => {
                const foundCustomer = customers.find(customer => customer.id === cr.customerId)
                return foundCustomer
            })

            // Get HTML representation of product
            const html = Employee(employee, computer, department, location, foundCustomersArray)

            return html
        }).join("")}
        </article>
        `
    }

    render()
}

export default EmployeeList
