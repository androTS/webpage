
// Blog posts stored as JavaScript objects
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