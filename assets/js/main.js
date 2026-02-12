fetch("data/posts.json")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("postsContainer");
  data.forEach(post => {
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
