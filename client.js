console.log('hello');

function AddInfoDiv(event){

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
`<table>
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${ID}</td>
<td>${title}</td>
<td>${annualSalary}</td>
<td><button onclick="removeDiv(event)">Delete</button></div></td>    
</tr>
</table>`;

totalMonthly += 1;
totalEl.innerHTML = `<div id="total-monthly"><h1>Total Monthly:${totalMonthly}</h1></div>`;

}//used to add info

function removeDiv(event){
    event.target.parentElement.remove();
}//used to remove the div

function totalCount(array) {
    for (let annualSalary of array){
        annualSalary += totalMonthly                  
    }
}//add total monthly count

// function submitButtonaaaa(event) {
//     let info= []; // global array to hold guess objects

//     // prevents form from refreshing
//     event.preventDefault();

//     // increment total guesses
//     totalMonthly += 1;
//     totalEl.innerHTML = `<div>Total Monthly: ${totalMonthly}</div>`

//     // get submitted inputs
//     let firstName = document.getElementById('firstName').value;
//     info.push({firstName});

//     // console.log(guesses);

//     scorer(guesses);

//     document.getElementById('guess-form').reset();
// }