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
