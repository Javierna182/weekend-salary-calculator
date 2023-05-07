console.log('hello');

let totalMonthly = 0;
let totalEl = document.getElementById('total-monthly'); 


function AddInfoDiv(event){
    let totalMoCount = [];

// prevents form from refreshing    
event.preventDefault();

//get submitted inputs
let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let ID = Number(document.getElementById('ID').value);
let title = document.getElementById('title').value;
let annualSalary = Number(document.getElementById('annualSalary').value);


//adds tab
document.body.innerHTML += 
`<table onclick="removeDiv(event)">
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${ID}</td>
<td>${title}</td>
<td>${annualSalary}</td>
<td>Delete</td>
</tr>
</table>`;

// <td><button onclick="removeDiv(event)">Delete</button></div></td>    

// increment total monthly
totalMonthly += 1;
totalEl.innerHTML = `<div id="total-monthly"> Total Monthly: $ ${totalMonthly}</div>`;

}//used to add info

function removeDiv(event){
    event.target.parentElement.remove();
}//used to remove the div
