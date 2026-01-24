function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    document.body.appendChild(script);
}

// You may add js file here.
loadScript('/javascript/header.js');
loadScript('/javascript/footer.js');
