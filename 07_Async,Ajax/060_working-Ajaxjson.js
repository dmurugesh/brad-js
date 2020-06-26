document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', '060_customer.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            // console.log(this.responseText);

            const customer = JSON.parse(this.responseText);

            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();

}

// Button 2 

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e) {
    const xhr = new XMLHttpRequest;

    xhr.open('GET', '060_customers.json', true);

    xhr.onload = function() {
        if (this.status === 200) {
            console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customer){
            output += `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name : ${customer.name}</li>
                <li>Company : ${customer.company}</li>
                <li>Phone : ${customer.phone}</li>
            </ul>
            ` 
            });
            document.getElementById('customers').innerHTML = output;
            
            // cust(customers);


            // function cust(customers) {
            // for(i = 0; i < customers.length; i++){
            // output += 
            // `<ul>
            // <li>ID: ${customers.id}</li>
            // <li>Name: ${customers.name}</li>
            // <li>Company: ${customers.company}</li>
            // <li>Phone: ${customers.phone}</li>
            // </ul>
            // `;
            //  document.getElementById('customers').innerHTML = output;
            //  console.log(output);
            // }
            // }
           

        }
    }

    xhr.send();
}