document.addEventListener("DOMContentLoaded", () => {
    // 1. Select the footer element by ID
    const footer = document.getElementById("footer");

    // 2. Safety Check: If the element is not found, stop execution
    if (!footer) {
        console.error("Element with id 'footer' not found!");
        return;
    }

    // 3. Get the current year dynamically
    const year = new Date().getFullYear();

    // 4. Apply CSS styles directly via JavaScript
    footer.style.cssText = `
        width: 100%;
        padding: 15px;
        text-align: center;
        background: #1f2937;
        border-top: 1px solid #dadada;
        font-size: 14px;
        color: white;
        font-family: sans-serif; 
    `;

    // 5. Inject the HTML content inside the footer div
    footer.innerHTML = `
        <div class="site-footer">
            &copy; ${year} Interactive Learning<br>
            All rights reserved.
        </div>
    `;
});
