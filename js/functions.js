
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function validation (data) {

  if (!data.firstName.value) {
    alert("Name is empty!");
    data.firstName.focus();
    return false;
  }
  if (data.firstName.value.length < 3) {
    alert("Name is very short!");
    data.firstName.focus();
    return false;
  }
  if (!userNames.value) {
    alert("User name is empty!");
    data.userNames.focus();
    return false;
  }
  if (!data.inputEmail.value) {
    alert("email is empty!");
    data.inputEmail.focus();
    return false;
  }
  if (!validateEmail(data.inputEmail.value)) {
    alert("email is incorrect!");
    data.inputEmail.focus();
    return false;
  }
  if (!data.password.value) {
    alert("Pasword is empty!");
    data.password.focus();
    return false;
  }
  if (data.password.value.length < 4) {
    alert("Pasword is very short!");
    data.password.focus();
    return false;
  }
  if (data.password.value != data.repassword.value) {
    alert("Parollar mos emas!");
    data.password.focus();
    data.repassword.value ='';
    return false;
  }
  if (!data.repassword.value) {
    alert("Repasswor is empty!");
    data.repassword.focus();
    return false;
  }
  return true;
};

function validationLogin (data) {
  if (!userNames.value) {
    alert("User name is empty!");
    data.userNames.focus();
    return false;
  }
  if (!data.password.value) {
    alert("Pasword is empty!");
    data.password.focus();
    return false;
  }

  return true;
};

function getData() {
  let data = [];
if (localStorage.getItem('users')) {
  data = JSON.parse(localStorage.getItem('users'))
}
return data;
}

export {validation, getData, validationLogin};
