// Function to load scripts efficiently
function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.defer = true; // HTML লোড হওয়া পর্যন্ত অপেক্ষা করবে
    document.body.appendChild(script);
}

// Load Header
loadScript('/javascript/header.js');

// Load Footer
loadScript('/javascript/footer.js');
