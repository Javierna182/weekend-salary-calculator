console.log('hello');

let totalMonthly = 0;
let totalEl = document.getElementById('total-monthly'); 

let totalMoCount = [];
let total = 0;

function totalAdd (array){
    total = 0;
    for(let numbers of array){
        total += numbers;
        console.log(total);
    } 
    if (total/12 >= 20000){
        document.querySelector('#total-monthly').className = 'red';
    } 
}

function addInfoDiv(event){
    
// prevents form from refreshing    
event.preventDefault();

//get submitted inputs
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let ID = (document.getElementById('ID').value);
let title = document.getElementById('title').value;
let annualSalary = Number(document.getElementById('annualSalary').value);
totalMoCount.push(annualSalary);
totalAdd(totalMoCount);
totalMoCount = [];
//adds tab
document.querySelector('#employee-table').innerHTML += 
`
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${ID}</td>
<td>${title}</td>
<td>${annualSalary}</td>
<td><button onclick="removeDiv(event)">Delete</button></div></td> 
</tr>
`;


document.querySelector('.addEmployee').reset();

// increment total monthly
totalMonthly += 0;
totalEl.innerHTML = `<div id="total-monthly"> Total Monthly: $ ${total/12}</div>`;

}//used to add info

function removeDiv(event){
    event.target.parentElement.parentElement.remove();
}//used to remove the div
