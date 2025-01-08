// Add event listener for scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; // Get current scroll position

  const shakeAmount = scrollY * 0.05 // Create a small sinusoidal movement

  document.body.style.backgroundPosition = `center ${shakeAmount}px`;
});