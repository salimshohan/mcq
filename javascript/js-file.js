// 1. Load Header Script
const headerScript = document.createElement('script');
headerScript.src = '/javascript/header.js';
headerScript.type = 'text/javascript';
headerScript.defer = true; // HTML লোড হওয়া পর্যন্ত অপেক্ষা করবে
document.body.appendChild(headerScript);

// 2. Load Footer Script
const footerScript = document.createElement('script');
footerScript.src = '/javascript/footer.js';
footerScript.type = 'text/javascript';
footerScript.defer = true; // HTML লোড হওয়া পর্যন্ত অপেক্ষা করবে
document.body.appendChild(footerScript);
