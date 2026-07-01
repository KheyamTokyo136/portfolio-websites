// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});

// ===== Navbar scroll effect =====
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#0d0d1a';
  } else {
    navbar.style.backgroundColor = '#1a1a2e';
  }
});

// ===== Skill bars animation =====
function animateSkills() {
  const skillFills = document.querySelectorAll('.skill-fill');
  skillFills.forEach(function (fill) {
    const width = fill.getAttribute('data-width');
    fill.style.width = width;
  });
}

// Trigger skill animation when skills section is visible
const skillsSection = document.getElementById('skills');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      animateSkills();
    }
  });
});
observer.observe(skillsSection);

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    formMsg.innerHTML = '✅ Thank you ' + name + '! Your message has been sent.';
    formMsg.style.color = '#4caf50';
    contactForm.reset();
  } else {
    formMsg.innerHTML = '❌ Please fill in all fields.';
    formMsg.style.color = '#e94560';
  }
});

// ===== Smooth active nav link highlight =====
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(function (link) {
    link.style.color = '#fff';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#e94560';
    }
  });
});
