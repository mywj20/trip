fetch("data/posts.json")
.then(res=>res.json())
.then(data=>{
  const container = document.getElementById("postsContainer");
  const grouped = {};

  data.forEach(post=>{
    const year = post.date.split("-")[0];
    if(!grouped[year]) grouped[year] = [];
    grouped[year].push(post);
  });

  Object.keys(grouped).sort((a,b)=>b-a).forEach(year=>{
    container.innerHTML += `<h2 class="year-title">${year}年</h2><div class="card-container" id="year-${year}"></div>`;
    const yearContainer = document.getElementById(`year-${year}`);

    grouped[year].forEach(post=>{
      yearContainer.innerHTML += `
        <div class="card">
          <a href="${post.url}">
            <img src="${post.cover}">
            <div class="card-content">
              <h3>${post.title}</h3>
              <p>${post.date}</p>
            </div>
          </a>
        </div>
      `;
    });
  });
});

function toggleDark(){
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode",document.body.classList.contains("dark-mode"));
}

window.onload = function(){
  if(localStorage.getItem("darkMode")==="true"){
    document.body.classList.add("dark-mode");
  }
}
