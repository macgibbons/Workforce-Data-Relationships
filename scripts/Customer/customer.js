const Customer = (customer, employees) => {
        return `
        <section class="customer__card">
            <h1>${customer.businessName}</h1>
            <div> employees assigned to this client:    
            ${
                employees.map(
                    e => {
                        return `
                        ${e.firstName} ${e.lastName}
                        `
                    }
                )
            }
            </div>
        </section>
        
        `

}

export default Customer