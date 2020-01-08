const Employee = (employee, computer) => {
    return `
        <section class="employee__card">
            <header>
                <h2>Employee: ${employee.firstName} ${employee.lastName}</h2>
                <div>${employee.age} years old</div>
            </header>
            <div>
                Computer: ${computer.model}
            </div>
            <div>
                Computer year: ${computer.year}
            </div>
        </section>
    `
}

export default Employee