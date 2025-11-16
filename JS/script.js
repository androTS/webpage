// Get current year
const currentYear = new Date().getFullYear();
// Insert it into the span
document.getElementById("year").textContent = currentYear;

const now = new Date();
const options = { year: 'numeric', month: 'long' };
const formattedDate = now.toLocaleDateString('sl-SI', options);
document.getElementById("date").textContent = formattedDate;