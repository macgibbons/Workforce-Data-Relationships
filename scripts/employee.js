const Employee = (employee, computer, department, location, customers) => {
    return `
        <section class="employee__card">
            <header class="employee__name">
                <h1>${employee.firstName} ${employee.lastName}</h1>
                <div>${employee.age} years old</div>
            </header>
            
            <div>
                Currently using a ${computer.year} ${computer.model}
            </div>
            
            <section class="employee__department">
                Works in the ${department.name} department
            </section>
            <section class="employee__location">
                Works at the ${location.city} office
            </section>
            <section class="employee__customer">
                <h1>Current Projects:</h1>
                <ol>
                ${
                    customers.map(customer => {
                        return `<li>${customer.businessName}</li>`
                    }).join("")
                }
                </ol>
            </section>
        </section>

</div>
    `
}

export default Employee