
// Cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// Hover animation
const hoverable = document.querySelectorAll('.hoverable');

hoverable.forEach(hoverElement => {
  hoverElement.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(5)';
    cursor.style.opacity = '1';
  });
  hoverElement.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.opacity = '0';
  });
});

// Slide in on scroll
window.addEventListener('scroll', () => {
  const slides = document.querySelectorAll('.slide');

  slides.forEach(slide => {
    let contentPosition = slide.getBoundingClientRect().bottom;
    let screenPosition = window.innerHeight;
    // let screenPosition = window.pageYOffset;


    if (contentPosition < screenPosition * 1.4) {
      slide.classList.add('scrolled-in');
    } else {
      slide.classList.remove('scrolled-in');
    }
  });
});

// window.addEventListener('DOMContentLoaded', () => {
//   window.scrollTo(0, 0);
//   // document.querySelector('body').style(opacity= 1);

// })



