document.addEventListener("DOMContentLoaded", function () {
  
    // --- 1. CSS Styles Injection ---
    const headerStyles = `
      /* --- HEADER STYLES --- */
      header {
          width: 100%;
          background: linear-gradient(90deg, #564ad3, #322a96);
          padding: 10px 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 2000;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      
      /* Brand / Logo Section */
      .brand-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          line-height: 1.2;
          text-decoration: none;
          font-family: sans-serif;
      }
      
      .logo-icon {
          width: 42px;
          height: 42px;
          background: white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 20px;
          color: #322a96;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          flex-shrink: 0;
      }
  
      /* --- HAMBURGER MENU BUTTON --- */
      .hamburger {
          cursor: pointer;
          width: 45px;
          height: 45px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          z-index: 2001;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 8px;
          transition: background 0.3s ease;
      }
      
      .hamburger:hover {
          background: rgba(255, 255, 255, 0.25);
      }
      
      .hamburger span {
          display: block;
          height: 3px;
          width: 24px;
          background: white;
          border-radius: 2px;
          transition: 0.3s ease-in-out;
      }
  
      /* Hamburger Animation */
      .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 6px);
      }
      .hamburger.active span:nth-child(2) {
          opacity: 0;
      }
      .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -6px);
      }
  
      /* --- MOBILE MENU CONTAINER --- */
      .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 280px;
          height: 100vh;
          background: white;
          display: flex;
          flex-direction: column;
          padding-top: 80px;
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1999;
          box-shadow: -5px 0 25px rgba(0,0,0,0.1);
      }
      
      .mobile-menu.active {
          right: 0;
      }
  
      /* --- MENU LINKS --- */
      .mobile-menu a {
          color: #333;
          text-decoration: none;
          padding: 15px 25px;
          font-size: 15px;
          font-weight: 500;
          border-bottom: 1px solid #f1f1f1;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: 0.2s ease;
          font-family: sans-serif;
      }
  
      .mobile-menu a:hover, .mobile-menu a.active {
          background: #eff0f0;
          color: #4c46c9;
          border-left: 4px solid #4c46c9;
      }
      
      /* Body padding fix for fixed header */
      body {
          padding-top: 70px; 
      }
    `;
  
    // Inject CSS into Head
    const styleSheet = document.createElement("style");
    styleSheet.innerText = headerStyles;
    document.head.appendChild(styleSheet);
  
    // --- 2. HTML Structure Injection ---
    // Note: I placed the links INSIDE the mobile-menu div
    const headerHTML = `
      <header>
          <a href="/" class="brand-logo">
              <div class="logo-icon">IL</div>
              Interactive Learning
          </a>
          
          <div class="hamburger" id="hamburgerBtn">
              <span></span>
              <span></span>
              <span></span>
          </div>
      </header>
  
      <div class="mobile-menu" id="mobileMenu">
          <a href="/">Home</a>
          <a href="/data/pdf.html">PDF Tool</a>
          <a href="/data/quotes.html">Quotes Maker</a>
          <a href="/data/notice.html">Notice Maker</a>
      </div>
    `;
  
    // Inject HTML at the beginning of Body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
  
    // --- 3. JavaScript Logic (Toggle Function) ---
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    
    // Toggle Menu on Click
    hamburgerBtn.addEventListener("click", function() {
        hamburgerBtn.classList.toggle("active");
        mobileMenu.classList.toggle("active");
    });

    // Close menu when clicking outside (Optional but recommended UX)
    document.addEventListener('click', function(event) {
        const isClickInside = hamburgerBtn.contains(event.target) || mobileMenu.contains(event.target);
        if (!isClickInside && mobileMenu.classList.contains('active')) {
            hamburgerBtn.classList.remove("active");
            mobileMenu.classList.remove("active");
        }
    });
});
