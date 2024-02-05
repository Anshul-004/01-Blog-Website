let card = document.querySelector("#dyn-blog");

let ext_blog = localStorage.getItem("blogs");
ext_blog = JSON.parse(ext_blog);

let blg = ext_blog.map((value) => {
  return `<article class="bgsec">
    <div class="lhs">
        <div class="c-title">
            <p>${value.title}</p>
        </div>
        <div class="c-desp">
            <p>${value.description}</p>
        </div>
    </div>
    <div class="rhs">
        <img src="${value.url}" alt="img Placeholder">
    </div>
  </article>`;
});

card.innerHTML = blg.join("");
console.log(ext_blog)

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
    localStorage.removeItem("login");
    window.location.replace("./index.html");
  });
}
