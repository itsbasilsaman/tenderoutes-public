// Country code data with flags
const countryCodes = [
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
];

// Populate country code dropdown
const countryCodeSelect = document.getElementById('countryCode');
countryCodes.forEach(country => {
  const option = document.createElement('option');
  option.value = country.code;
  option.textContent = `${country.flag} ${country.code} ${country.name}`;
  option.className = 'country-option';
  countryCodeSelect.appendChild(option);
  
  // Set India as default
  if (country.code === "+91") {
    option.selected = true;
  }
});

document.getElementById('inquiryForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  const successMessage = document.getElementById('successMessage');

  // Show loading spinner
  btnText.style.display = 'none';
  btnSpinner.style.display = 'inline-block';
  submitBtn.disabled = true;

  const name = document.getElementById('name').value.trim();
  const countryCode = document.getElementById('countryCode').value;
  const mobile = document.getElementById('mobile').value.trim();
  const fromDate = document.getElementById('fromDate').value;
  const people = document.getElementById('people').value;
  const children = document.getElementById('children').value || '0';
  const destination = document.getElementById('destination').value;

  if (!name || !mobile || !fromDate || !people || !destination) {
    alert("Please fill all required fields correctly.");
    // Hide spinner and show text
    btnText.style.display = 'inline-block';
    btnSpinner.style.display = 'none';
    submitBtn.disabled = false;
    return;
  }

  const message = `Hi, I would like to inquire about a Kerala tour package.%0A%0AName: ${name}%0AMobile: ${countryCode}${mobile}%0ADate: ${fromDate}%0APeople: ${people}%0AChildren: ${children}%0ADestination: ${destination}`;

  const whatsappURL = `https://wa.me/918590061859?text=${message}`;
  
  // Open WhatsApp in a new tab
  const whatsappWindow = window.open(whatsappURL, '_blank');
  
  // Check if the window was opened successfully
  if (whatsappWindow) {
    // Set up a timer to check if user has returned to the page
    const checkWindowClosed = setInterval(() => {
      if (whatsappWindow.closed) {
        clearInterval(checkWindowClosed);
        // Show success message when user returns
        successMessage.style.display = 'block';
        document.getElementById('inquiryForm').reset();
        document.getElementById('countryCode').value = "+91";
        
        // Reset button state
        btnText.style.display = 'inline-block';
        btnSpinner.style.display = 'none';
        submitBtn.disabled = false;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      }
    }, 500);
  } else {
    // If window couldn't be opened (maybe popup blocked)
    alert("Please allow popups to send the inquiry via WhatsApp.");
    btnText.style.display = 'inline-block';
    btnSpinner.style.display = 'none';
    submitBtn.disabled = false;
  }
});