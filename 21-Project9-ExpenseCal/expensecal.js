const inputText = document.getElementById('text'),
    inputAmount = document.getElementById('amount'),
    form = document.getElementById('form'),
    list = document.getElementById('list'),
    deleteBtn = document.querySelector('delete-btn'),
    balanceValue = document.getElementById('balance'),
    incomeValue = document.getElementById('money-plus'),
    expenseValue = document.getElementById('money-minus');


//Event Listners
form.addEventListener('submit', e => {
    e.preventDefault();
   
    updateTransactions();

});

//Assigning an empty array to get the input values      
const bal = [0];
const exp = [0];
const inc = [0];
const text1 = [];
const idEl =[];

let tab = document.createElement('li');
let gentID = Math.round(Math.random() * 1000);

//Update Input values to list/History tab
function updateTransactions() {
    
    //assiging the input amount to sign to check + & -ve values
    let sign = amount.value;
    let textin = text.value;

    if(text.value === '') {
        alert('Please enter the text for Transaction');
    } else if (amount.value === '') {
        alert('Please enter the sum for Transaction');
    } else {


    //creating an li element 
    tab = document.createElement('li');
    //Adding minus or plus to created li 
    tab.classList.add(sign < 0 ? 'minus' : 'plus');
    
    gentID = Math.floor(Math.random() * 100000000);
    idEl.push(gentID);
    console.log(idEl);
    //Adding HTML to be inplemented under histroy tab
    tab.innerHTML = `
     ${text.value} <span>${sign}</span>
     <button class="delete-btn" onclick="removeTransaction(${gentID})">x</button>
    `;

    list.appendChild(tab);

    // const button = document.querySelector('delete-btn');
    // button.onclick = function () { Myfucntion() };
    // function Myfucntion() {
    //     console.log(gentID);
    //     console.log('arr' , idEl);
    //     let a = idEl.indexOf(gentID);
    //     console.log(a);
    //     list.removeChild(list.childNodes[a]);
    // };
    }

    calBalance();
    // removeTransaction(gentID);
}

function removeTransaction(gentID){
    console.log(gentID); onclick="removeTransaction(${gentID})"
    console.log('arr' , idEl);
    let a = idEl.indexOf(gentID);
    console.log(a);
    list.removeChild(list.childNodes[a]); 
}


function calBalance() {

    if(text.value === '') {
        // alert('Please enter the text for Transaction');
    } else if (amount.value === '') {
        // alert('Please enter the sum for Transaction');
    } else {
    //Assiging the input values to a variable 
    const balance = amount.value;
    console.log(balance);
    // pushin the variable to array
    bal.push(parseInt(amount.value));
    console.log(bal);

    //Calculating the values of 
    const total = bal.reduce(function(a, b){
        return a + b;
    });

    //Income or expense 
    if(amount.value < 0) {
        // expense calculating and pushin into array
        const expense = amount.value;
        exp.push(parseInt(expense));
        
    } else {
        // income calculating and pushin into array
        const income = amount.value;
        inc.push(parseInt(income));
    }

    const incm = inc.reduce(function(a, b){
        return a + b;
    });
    const expe = exp.reduce(function(a, b){
        return a + b;
    });

    console.log('total: ', total);
    console.log('income: ', incm);
    console.log('expnse: ', expe);

    balanceValue.innerText = `$${total}`;
    incomeValue.innerText = `$${incm}`;
    expenseValue.innerText = `$${expe}`;

    text.value = '';
    amount.value = '';
}
}



