document.getElementById('wf-form-Contact-One').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = encodeURIComponent(document.getElementById('Name').value);
  const email = encodeURIComponent(document.getElementById('Email').value);
  const phone = encodeURIComponent(document.getElementById('Phone-No').value);
  const message = encodeURIComponent(document.getElementById('Message').value);
  
  // Check if checkbox is checked
  const checkbox = document.getElementById('checkbox');
  if (!checkbox.checked) {
      alert('Please agree to the terms and conditions.');
      return;
  }
  
  // Format the WhatsApp message with proper encoding
  const whatsappMessage = `New Contact Form Submission:%0A%0A` +
                          `*Name:* ${name}%0A` +
                          `*Email:* ${email}%0A` +
                          `*Phone:* ${phone}%0A` +
                          `*Message:*%0A${message}`;
  
  // WhatsApp number (with country code)
  const whatsappNumber = '918590061859'; // +91 85900 61859
  
  // Create the WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Open WhatsApp
  window.open(whatsappUrl, '_blank');
  
  // Optional: Reset the form after submission
  this.reset();
});