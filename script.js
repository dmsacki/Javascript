
const aboutButton = document.getElementById('aboutBtn');
const aboutSection = document.getElementById('about');

aboutButton?.addEventListener('click', () => {
  aboutSection.scrollIntoView({
    behavior: 'smooth',
  });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // Clear previous messages
  clearMessages();

  // Collect input values
  const fullName = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // To Check if all fields are filled
  if (!fullName || !email || !message) {
    addMessage('Please fill out all sections.', 'error');
    return;
  }

  // Validate email
  if (!isValidEmail(email)) {
    addMessage('Please enter a valid email address.', 'error');
    return;
  }

  // Show success message
  addMessage('Thank you for reaching out! You will receive an email soon.', 'success');
});

// Function to Add Message
function addMessage(message, type) {
  const messageContainer = document.getElementById('messageContainer');
  const messageElement = document.createElement('div');
  messageElement.textContent = message;

  // Add classes 
  if (type === 'error') {
    messageElement.classList.add('message', 'error-message');
  } else if (type === 'success') {
    messageElement.classList.add('message', 'success-message');
  }

  messageContainer.appendChild(messageElement);
}

// Clear All Messages
function clearMessages() {
  const messageContainer = document.getElementById('messageContainer');
  messageContainer.innerHTML = ''; // Remove all child elements
}

// Validate Email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
