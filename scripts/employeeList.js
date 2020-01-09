import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "./computerProvider.js";
import Employee from "./employee.js";
import { useDepartments } from "./departmentProvider.js";
import { useLocations } from "./locationProvider.js";
import { useCustomers } from "./customerProvider.js";
import { useEmployeeCustomer } from "./Providers/employeeCustomerProvider.js";

const contentTarget = document.querySelector(".employee__Container")

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customers = useCustomers()
    const empCust = useEmployeeCustomer()

    const render = () => {
        contentTarget.innerHTML = employees.map(employee => {
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
        }).join("")
    }

    render()
}

export default EmployeeList
