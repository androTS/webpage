// Get current year and safely insert into elements if they exist
const currentYear = new Date().getFullYear();
const yearEl = document.getElementById('year');
if (yearEl) {
	yearEl.textContent = currentYear;
}

// Format a localized month + year and insert into `date` element
const now = new Date();
const options = { year: 'numeric', month: 'long' };
const formattedDate = now.toLocaleDateString('sl-SI', options);
const dateEl = document.getElementById('date');
if (dateEl) {
	dateEl.textContent = formattedDate;
}