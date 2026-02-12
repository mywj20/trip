const postList = document.getElementById("postList");

fetch("./posts/")
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = [...doc.querySelectorAll("a")];

    links
      .filter(link => link.href.endsWith(".html"))
      .forEach((link,index) => {
        const fileName = link.getAttribute("href");
        const title = fileName.replace(".html","");

        postList.innerHTML += `
          <div class="post-card" style="animation-delay:${index*0.1}s">
            <a href="posts/${fileName}">
              ${title}
            </a>
            <small>点击阅读旅行记录</small>
          </div>
        `;
      });
  })
  .catch(() => {
    postList.innerHTML = "<p>暂无文章</p>";
  });

function toggleDark(){
  document.body.classList.toggle("dark");
  localStorage.setItem("dark",document.body.classList.contains("dark"));
}

if(localStorage.getItem("dark")==="true"){
  document.body.classList.add("dark");
}
