import { useEmployees } from "../Providers/employeeProvider.js";
import { useCustomers } from "../Providers/customerProvider.js";
import { useEmployeeCustomer } from "../Providers/employeeCustomerProvider.js";
import Customer from "./customer.js";

const contentTarget = document.querySelector(".customer__Container")

const CustomerList = () => {
    const employees = useEmployees()
    const customers = useCustomers()
    const empCust = useEmployeeCustomer()

    const render = () => {
        contentTarget.innerHTML = `
        <h1>Clients</h1>
        <article class="clients">
        ${customers.map(customer => {

            const customerRelationships = empCust.filter(cr => cr.customerId === customer.id)

            // For each relationship, find the corresponding company
            const foundEmployeeArray = customerRelationships.map(cr => {
                const foundEmployee = employees.find(employee => employee.id === cr.employeeId)
                return foundEmployee
            })

            // Get HTML representation of product
            const html = Customer(customer, foundEmployeeArray)

            return html
        }).join("")}
        </article>
        `
    }
    render()
}

export default CustomerList
