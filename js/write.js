let wrt_title = document.querySelector("#wrt-title");
let wrt_desc = document.querySelector("#wrt-desc");
let wrt_button = document.querySelector("#wrt-button");

let blog = [];

wrt_button.addEventListener("click", () => {
  blog.push({
    title: wrt_title.value,
    description: wrt_desc.value,
  });
  console.log(blog);
  wrt_title.value = "";
  wrt_desc.value = "";
});
