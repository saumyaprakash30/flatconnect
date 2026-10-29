// Mobile menu
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('navPanel');
  toggle.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a[href^="#"]')) {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    }
  });
  var solutions = document.querySelector('.nav-solutions');
  document.addEventListener('click', function (e) {
    if (solutions.open && !solutions.contains(e.target)) solutions.open = false;
  });
})();
