fetch("../data/posts.json")
.then(res=>res.json())
.then(data=>{
  const current=window.location.pathname.split("/").pop();
  const container=document.getElementById("relatedPosts");
  container.innerHTML="<h3>相关推荐</h3>";

  data.filter(p=>!p.url.includes(current))
      .slice(0,3)
      .forEach(post=>{
        container.innerHTML+=`<p><a href="../${post.url}">${post.title}</a></p>`;
      });
});
