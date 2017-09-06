let lastKnownScrollPosition = 0;
let ticking = false;

function handleScroll(position) {
  const STICKYCLASS = 'sticky';
  const el = document.body;
  if (position >= 50) {
    if (el.classList) {
      el.classList.add(STICKYCLASS);
    } else {
      el.className += ' ' + STICKYCLASS;
    }
  } else {
    el.classList.remove(STICKYCLASS);
  }
}

export default {
  init() {
    if (document.body.classList.contains('fixed')) {
      return;
    }
    window.addEventListener('scroll', ev => {
      lastKnownScrollPosition = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll(lastKnownScrollPosition);
          ticking = false;
        });
      }
      ticking = true;
    });
  },
};
