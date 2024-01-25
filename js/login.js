import {getData, validationLogin } from "./functions.js";
const button = document.querySelector("#button");
const userNames = document.querySelector("#userNames");
const password = document.querySelector("#inputPassword");
const form = document.querySelector("#form");

let urlManzil = window.location.href.substring(0,window.location.href.search("index"));

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (validationLogin({ password, userNames })) {
      let data = getData();
      let user = data.find((el) => {
        return el.userNames == userNames.value;
      });
    
      if (user && user.password == password.value) {
        localStorage.setItem('currentUser', userNames.value)
        form.reset();

        window.location.assign(`${urlManzil}result.html`);

      } else{
        alert("Login yoki parol no'to'g'ri kiritldi.")
      }
    }
  });
