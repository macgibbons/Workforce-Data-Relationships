const Employee = (employee, computer, department) => {
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
        </section>

</div>
    `
}

export default Employee