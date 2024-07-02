document.addEventListener('DOMContentLoaded', () => {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  const navLinks = document.querySelectorAll('#nav-menu a');

  // Toggle dropdown visibility for both desktop and mobile
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (event) => {
      event.preventDefault();
      const dropdown = toggle.nextElementSibling;
      if (dropdown) {
        dropdown.classList.toggle('hidden');
      }
    });
  });

  // Close dropdown on desktop when a link is clicked
  const desktopDropdownLinks = document.querySelectorAll('.dropdown a');
  desktopDropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
      const dropdown = link.closest('.dropdown');
      if (dropdown) {
        dropdown.classList.add('hidden');
      }
    });
  });

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navMenu.classList.add('hidden');
      }
    });
  });
});
