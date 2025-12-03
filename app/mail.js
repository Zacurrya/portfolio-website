emailjs.init({
  publicKey: 'D6mJ2-dJcmk5iLAbW',
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: 'app',
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

const templateParams = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
};

// Send email using EmailJS
emailjs.send('service_hjb1skq', 'template_gqccyyt', templateParams)
  .then((response) => {
    alert("Email sent successfully!");
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    alert("Failed to send email. Please email towerhamletscouncil@gmail.com to report site issues.");
    console.log('FAILED...', error);
  });