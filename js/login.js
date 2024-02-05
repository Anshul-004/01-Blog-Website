let create = document.querySelector("#create");
let popup = document.querySelector("#popup");
let bbtn = document.querySelector("#bbtn");

let name = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let pass = document.querySelector("#pass");
let cpass = document.querySelector("#cpass");
let signupbtn = document.querySelector("#signupbtn");

create.addEventListener("click", () => {
  popup.classList.remove("d-none");
});

bbtn.addEventListener("click", () => {
  popup.classList.add("d-none");
});

//for reg. info

signupbtn.addEventListener("click", () => {
  newuser = {
    name: name.value,
    email: email.value,
    mobile: mobile.value,
    pass: pass.value,
  };

  //get the whole list from local storage
  let userlist = localStorage.getItem("users");

  //if the list which we got is null (i.e. first user, create new list) else convert the list we got from storage to object and then push data in it
  userlist = userlist === null ? [] : JSON.parse(userlist);

  //   if email is repeated we must not create another account, returns undefined when false
  let userexist = userlist.find((value) => {
    return value.email === newuser.email;
  });

  if (userexist === undefined) {
    userlist.push(newuser);
    //stringify will convert to string whilst storing to local storage
    localStorage.setItem("users", JSON.stringify(userlist));
    alert("Registration Successful, Login Now");
    popup.classList.add("d-none");
  } else {
    alert("Can't Register, Try Again");
  }
});

//Login Logic

let luser = document.querySelector("#luser");
let lpass = document.querySelector("#lpass");
let lbtn = document.querySelector("#lbtn");

lbtn.addEventListener("click", () => {
  let username = luser.value;
  let password = lpass.value;

  let userlist = localStorage.getItem("users");

  userlist = userlist === null ? [] : JSON.parse(userlist);

  let userexist = userlist.find((value) => {
    return value.email === username && value.password === password;
  });

  if (userexist === -1) {
    alert("User Not Found, Try Again");
  } else {
    alert("Logged In Successfully");
    localStorage.setItem("login", userexist);
    window.location.replace("/write.html");
  }
});
