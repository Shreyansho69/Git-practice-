document.addEventListener('DOMContentLoaded', function () {
	const toggle = document.querySelector('.nav-toggle');
	const navLinks = document.querySelector('.nav-links');

	if (!toggle || !navLinks) return;

	toggle.addEventListener('click', () => {
		const isOpen = navLinks.classList.toggle('show');
		toggle.setAttribute('aria-expanded', String(isOpen));
	});

	// Close mobile menu when a link is clicked
	navLinks.addEventListener('click', (e) => {
		if (e.target.tagName === 'A') {
			navLinks.classList.remove('show');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});
});

