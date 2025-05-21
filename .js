// Load saved name from localStorage on page load
window.onload = () => {
  const storedName = localStorage.getItem('username');
  if (storedName) {
    document.getElementById('username-display').textContent = storedName;
  }
};

// Save name to localStorage
document.getElementById('save-btn').addEventListener('click', () => {
  const name = document.getElementById('username').value;
  if (name.trim()) {
    localStorage.setItem('username', name);
    document.getElementById('username-display').textContent = name;
    alert("Name saved! Reload to see persistence.");
  }
});

// Trigger animation on box
document.getElementById('animate-btn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.classList.remove('animate-box'); // reset animation
  void box.offsetWidth; // force reflow
  box.classList.add('animate-box'); // re-trigger animation
});
