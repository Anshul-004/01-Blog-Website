let wrt_title = document.querySelector("#wrt-title");
let wrt_desc = document.querySelector("#wrt-desc");
let wrt_button = document.querySelector("#wrt-button");
let wrt_url = document.querySelector("#wrt-url")
let imgt = document.querySelector("#imgt")

let blog = [];

// imgt.innerHTML = `<img src="${wrt_url.value}" alt="blg-img">`
wrt_button.addEventListener("click", () => {
  blog.push({
    title: wrt_title.value,
    description: wrt_desc.value,
    url:wrt_url.value,
  });

  console.log(blog);
  wrt_title.value = "";
  wrt_desc.value = "";
  wrt_url.value = "";
  

});
