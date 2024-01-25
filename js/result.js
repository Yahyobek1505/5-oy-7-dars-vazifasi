import { getData } from "./functions.js";
const firstName = document.querySelector('#firstName');
const secondName = document.querySelector('#secondName');
const sana = document.querySelector('#sana');
const userNames = document.querySelector('#userNames');
const inputEmail = document.querySelector('#inputEmail');
const password = document.querySelector('#password');

let urlManzil = window.location.href.substring(0,window.location.href.search("index"));

document.addEventListener('DOMContentLoaded', function () {
  let currentUser = localStorage.getItem('currentUser');

if (currentUser) {
  let users = getData();
  let user = users.find(element => {
    return element.userNames == currentUser;
  
  })
  if (user.userNames) {
    firstName.innerHTML = user.firstName;
    secondName.innerHTML = user.secondName;
    sana.innerHTML = user.sana;
    userNames.innerHTML = user.userNames;
    inputEmail.innerHTML = user.inputEmail;
    password.innerHTML = user.password;
  } else {
  // window.location.assign(`${urlManzil}index.html`);
  }
} else {
  // window.location.assign(`${urlManzil}index.html`);

}  
})
