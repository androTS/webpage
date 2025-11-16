
/* // Blog posts stored as JavaScript objects
const posts = [
{
    title: "🚀 Welcome to My Blog",
    date: "May 15, 2025",
    content: "This is my first post on my new JavaScript-powered blog! It's fully static, hosted on an Ubuntu web server. No backend needed!"
}
];

const blog = document.getElementById("blog");

posts.forEach(post => {
const el = document.createElement("div");
el.className = "post";
el.innerHTML = `
    <h2>${post.title}</h2>
    <div class="date">${post.date}</div>
    <p>${post.content}</p>
`;
blog.appendChild(el);
});

 */


  // Get current year
  const currentYear = new Date().getFullYear();
  // Insert it into the span
  document.getElementById("year").textContent = currentYear;

<script>
  const now = new Date();
  const options = { year: 'numeric', month: 'long' };
  const formattedDate = now.toLocaleDateString('sl-SI', options);
  document.getElementById("date").textContent = formattedDate;
</script>