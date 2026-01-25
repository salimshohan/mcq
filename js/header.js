document.addEventListener("DOMContentLoaded", function () {

    // Font Awesome
    const fa = document.createElement("link");
    fa.rel = "stylesheet";
    fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(fa);

    // Styles
    const style = document.createElement("style");
    style.textContent = `
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
        box-shadow: 0 2px 10px rgba(0,0,0,.2);
    }

    .brand-logo {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 16px;
        font-weight: 700;
        color: #fff;
        text-decoration: none;
    }

    .logo-icon {
        width: 42px;
        height: 42px;
        border-radius: 10px;
        background: #fff;
        padding: 4px;
    }

    .hamburger {
        width: 45px;
        height: 45px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        background: rgba(255,255,255,.15);
        border-radius: 8px;
    }

    .hamburger span {
        width: 24px;
        height: 3px;
        background: #fff;
        transition: .3s;
    }

    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px,6px);
    }
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px,-6px);
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: #fff;
        padding-top: 80px;
        transition: .4s;
        z-index: 1999;
        box-shadow: -5px 0 25px rgba(0,0,0,.1);
    }

    .mobile-menu.active {
        right: 0;
    }

    .mobile-menu a {
        padding: 15px 25px;
        display: flex;
        gap: 15px;
        text-decoration: none;
        color: #333;
        border-bottom: 1px solid #eee;
    }

    .mobile-menu a i {
        color: #4c46c9;
    }
    `;
    document.head.appendChild(style);

    // HTML inject
    document.getElementById("header").innerHTML = `
    <header>
        <a class="brand-logo" href="/">
            <img src="https://i.postimg.cc/jSTKgmrc/ib-logo.png" class="logo-icon">
            Interactive Learning
        </a>

        <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
        <a href="/"><i class="fa-solid fa-house"></i> Home</a>
        <a href="/data/pdf.html"><i class="fa-solid fa-file-pdf"></i> PDF Tool</a>
        <a href="/data/quotes.html"><i class="fa-solid fa-quote-left"></i> Quotes Maker</a>
        <a href="/data/notice.html"><i class="fa-solid fa-bullhorn"></i> Notice Maker</a>
    </div>
    `;

    // Toggle
    document.getElementById("hamburger").onclick = function () {
        document.getElementById("mobileMenu").classList.toggle("active");
        this.classList.toggle("active");
    };

});