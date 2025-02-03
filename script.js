// Example: Toggle Mobile Menu
const nav = document.querySelector('nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Menu';
toggleBtn.classList.add('toggle-btn');
document.querySelector('header').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});