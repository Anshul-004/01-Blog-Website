let cnt_name = document.querySelector("#cnt-name");
let cnt_email = document.querySelector("#cnt-email");
let cnt_query = document.querySelector("#cnt-query");
let cnt_button = document.querySelector("#cnt-button");

let log = document.querySelector("#log");

if (localStorage.getItem("login") === null) {
  log.innerHTML = "Log In";
  log.addEventListener("click", () => {
    window.location.replace("./login.html");
  });
} else {
  log.innerHTML = "Log Out";
  log.addEventListener("click", () => {
    localStorage.removeItem("login");
    window.location.replace("./index.html");
  });
}

let info = [];

cnt_button.addEventListener("click", () => {
  info.push({
    name: cnt_name.value,
    email: cnt_email.value,
    query: cnt_query.value,
  });
  console.log(info);
  cnt_name.value = "";
  cnt_email.value = "";
  cnt_query.value = "";
});
