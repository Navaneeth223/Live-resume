const modeToggle = document.getElementById('modeToggle');
const recruiterToggle = document.getElementById('recruiterToggle');
const body = document.body;

modeToggle.onclick = () => {
  body.classList.toggle('dark');
};

recruiterToggle.onclick = () => {
  document.querySelectorAll('.recruiter').forEach(el => {
    el.style.display = el.style.display === 'inline-block' ? 'none' : 'inline-block';
  });
};

// Elements
const modeToggle = document.getElementById('modeToggle');
const recruiterToggle = document.getElementById('recruiterToggle');
const body = document.body;

// Check & Apply stored preferences on load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  const recruiterMode = localStorage.getItem('recruiterMode');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  if (recruiterMode === 'on') {
    document.querySelectorAll('.recruiter').forEach(el => {
      el.style.display = 'inline-block';
    });
  }
};

// Toggle dark/light mode and store preference
modeToggle.onclick = () => {
  body.classList.toggle('dark');
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
};

// Toggle recruiter mode and store preference
recruiterToggle.onclick = () => {
  const isActive = localStorage.getItem('recruiterMode') === 'on';

  document.querySelectorAll('.recruiter').forEach(el => {
    el.style.display = isActive ? 'none' : 'inline-block';
  });

  localStorage.setItem('recruiterMode', isActive ? 'off' : 'on');
};
