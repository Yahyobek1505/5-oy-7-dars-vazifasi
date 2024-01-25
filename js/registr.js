import { validation, getData } from "./functions.js";
const button = document.querySelector('#button');
const firstname = document.querySelector('#firstname');
const secondNames = document.querySelector('#secondname');
const sana = document.querySelector('#sana');
const userNames = document.querySelector('#userNames');
const inputEmail = document.querySelector('#inputEmail');
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');
const form = document.querySelector('#form');

let urlManzil = window.location.href.substring(0,window.location.href.search("index"));

button && button.addEventListener('click', function (event) {
  event.preventDefault();
  
  if (validation( firstname, secondNames, sana, userNames, inputEmail, password, repassword)) {
    let user = {
      firstNames: firstname.value,
      secondNames: secondNames.value,
      sana: sana.value,
      userNames: userNames.value,
      email: email.value,
      password: password.value,
    } 
  } 
  let data = getData();
  data.push(user);
  localStorage.setItem('users', JSON.stringify(data));
  
  window.location.assign(`${urlManzil}login.html`);
})
