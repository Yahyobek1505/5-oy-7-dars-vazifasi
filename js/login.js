import {getData, validationLogin } from "./functions.js";
const button = document.querySelector("#button");
const userNames = document.querySelector("#userNames");
const password = document.querySelector("#inputPassword");
const form = document.querySelector("#form");

button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    if (validationLogin({ password, userNames })) {
      let data = getData;
      let user = data.find((element) => {
        return element.userNames == userNames.value;
        console.log(user);
      });
    }
  });
