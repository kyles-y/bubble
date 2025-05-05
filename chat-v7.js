window.addEventListener('DOMContentLoaded', () => {
  // Detect if device is mobile
  const isMobile = window.matchMedia('(max-width: 600px)').matches;

  // Create anchor element
  const link = document.createElement('a');
  if (isMobile) {
    // SMS link with pre-filled text for mobile
    const phoneNumber = '18554878041'; // no dashes or spaces
    const message = encodeURIComponent(
      'Replace this text with your question and send away to the YMCA 🤩\n\nBy messaging us, you agree to receive updates on your inquiry.'
    );
    link.href = `sms:${phoneNumber}?&body=${message}`;
  } else {
    // Desktop form
    link.href = 'https://forms.fillout.com/t/eZLjjVsMS3us';
  }
  link.target = '_blank';
  link.style.textDecoration = 'none';

  // Create button element (as a div)
  const button = document.createElement('div');
  button.textContent = '💬';
  button.style.position = 'fixed';
  button.style.bottom = '15px';
  button.style.right = '15px';
  button.style.backgroundColor = '#0089D0';
  button.style.color = 'white';
  button.style.display = 'flex';
  button.style.alignItems = 'center';
  button.style.justifyContent = 'center';
  button.style.borderRadius = '50%';
  button.style.opacity = '0';
  button.style.transition = 'opacity 1s ease';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9999';
  button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
  button.style.transform = 'translateY(1px)';

  // Set default size
  let width = 33;
  let height = 33;
  let fontSize = 18;

  // Apply larger size for mobile devices
  if (isMobile) {
    width = 42;
    height = 42;
    fontSize = 22;
  }

  button.style.width = `${width}px`;
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
});
