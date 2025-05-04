// Create anchor element
const link = document.createElement('a');
link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
link.target = '_blank';
link.style.textDecoration = 'none';

// Create button element (as a div)
const button = document.createElement('div');
button.textContent = '💬';
button.style.position = 'fixed';
button.style.bottom = '15px'; // updated
button.style.right = '15px';  // updated
button.style.width = '33px';
button.style.height = '33px';
button.style.backgroundColor = '#0089D0';
button.style.color = 'white';
button.style.display = 'flex';
button.style.alignItems = 'center';
button.style.justifyContent = 'center';
button.style.borderRadius = '50%';
button.style.fontSize = '18px';
button.style.opacity = '0';
button.style.transition = 'opacity 1s ease';
button.style.cursor = 'pointer';
button.style.zIndex = '9999';
button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
button.style.transform = 'translateY(1px)'; // shift emoji slightly downward

// Append and fade in
link.appendChild(button);
document.body.appendChild(link);

window.addEventListener('load', function () {
  requestAnimationFrame(() => {
    button.style.opacity = '1';
  });
});
