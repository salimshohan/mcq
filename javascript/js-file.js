// 1. Header Script Load
const headerScript = document.createElement('script');
headerScript.src = '/javascript/header.js';
headerScript.type = 'text/javascript';
document.body.appendChild(headerScript);

// 2. Footer Script Load
const footerScript = document.createElement('script');
footerScript.src = '/javascript/footer.js';
footerScript.type = 'text/javascript';
document.body.appendChild(footerScript);
