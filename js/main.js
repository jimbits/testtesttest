/*
HTML for the project.

<div class="list-group-item list-group-item-action">
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">FULLNAME HERE</h5>
  </div>
 <small>EMAIL HERE<</small>
</div>
*/


import CONTACTS from "../data/contacts.json"

import isEmail from 'validator/lib/isEmail';

let table = document.querySelector(".all-contacts")
table.innerHTML = '';

function renderContacts() {
 
  let template = ``
  
  
   //CONTACTS.filter((contact) =>{
   CONTACTS.filter((contacts) =>{

    if(isEmail(contacts.email))
    
    template += `<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">${contacts.name}</h5>
    </div>
   <small>${contacts.email}</small>
  </div>`;

   


  });

 

table.innerHTML = template;

console.log(table)
  

  
}

renderContacts(CONTACTS) 
