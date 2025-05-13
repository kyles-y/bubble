window.addEventListener('DOMContentLoaded', () => {
  // Create anchor element
  const link = document.createElement('a');
  link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
  link.target = '_blank';
  link.style.textDecoration = 'none';

  // Create the chat bubble element
  const button = document.createElement('div');
  button.textContent = 'Ask Us 💬';
  button.style.position = 'fixed';
  button.style.bottom = '15px';
  button.style.right = '15px';
  button.style.backgroundColor = '#0089D0';
  button.style.color = 'white';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.borderRadius = '20px';
  button.style.opacity = '0';
  button.style.transition = 'opacity 1s ease, transform 0.2s ease';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9999';
  button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  button.style.padding = '0 12px';
  button.style.transform = 'translateY(1px)';
  button.style.fontFamily = 'inherit';

  // Default sizes
  let height = 33;
  let fontSize = 14;

  if (window.matchMedia('(max-width: 600px)').matches) {
    height = 42;
    fontSize = 18;
  }

  button.style.height = `${height}px`;
  button.style.fontSize = `${fontSize}px`;

  // Append and fade in
  link.appendChild(button);
  document.body.appendChild(link);

  window.addEventListener('load', function () {
    requestAnimationFrame(() => {
      button.style.opacity = '1';
    });
  });

  // Add hover effect
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(1px) scale(1.05)';
  });

  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(1px)';
  });
});
