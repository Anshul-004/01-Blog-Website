let log = document.querySelector("#log");

if (localStorage.getItem("login") === null) {
  log.innerHTML = "Log In";
  log.addEventListener("click", () => {
    window.location.replace("./login.html");
  });
} else {
  log.innerHTML = "Log Out";
  log.addEventListener("click", () => {
    let cnf = confirm("Are You Sure, You Want to LOGOUT ?");

    if (cnf === true) {
      localStorage.removeItem("login");
      window.location.replace("./index.html"); 
    }
  });
}
