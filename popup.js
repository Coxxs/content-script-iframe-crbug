const s = document.getElementById('status');
Promise.resolve().then(() => {
	s.textContent = 'OK';
	s.style.color = 'green';
});
setTimeout(() => {
	if (s.textContent === 'Checking...') {
		s.textContent = 'Timeout. Promise is broken.';
		s.style.color = 'red';
	}
}, 1000);
