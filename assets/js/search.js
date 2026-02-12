const input = document.getElementById("searchInput");

input.addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  fetch("data/posts.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("postsContainer");
    container.innerHTML = "";
    data.filter(post =>
      post.title.toLowerCase().includes(keyword) ||
      post.tags.join("").includes(keyword)
    ).forEach(post => {
      container.innerHTML += `
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
