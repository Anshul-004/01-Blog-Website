//if login notfound
if (localStorage.getItem("login") === null) {
  window.location.replace("./login.html");
}

//for login button
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

//userblogs
let myblog = localStorage.getItem("blogs")
myblog = JSON.parse(myblog)


let userblogs = myblog.filter((value) =>{
  return value.loginid ==localStorage.getItem("login")
})
console.log(userblogs)

//cpy
let card = document.querySelector("#dyn-blog");

// let ext_blog = localStorage.getItem("blogs");
// ext_blog = JSON.parse(ext_blog);

let blg = userblogs.map((value) => {
  return `<article class="bgsec">
    <div class="lhs">
        <div class="c-title">
            <p>${value.title}</p>
        </div>
        <div class="c-desp">
            <p>${value.description}</p>
            <p class="author"> -- ${value.author}</p>
        </div>
    </div>
    <div class="rhs">
        <img src="${value.url}" alt="img Placeholder">
    </div>
  </article>`;
});

card.innerHTML = blg.join("");