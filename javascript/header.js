document.write('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<style>

/* --- HEADER STYLES --- */



header {
    width: 100%;
    background: linear-gradient(90deg, #564ad3, #322a96); 
    padding: 10px 15px;
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    position: fixed; top: 0; left: 0; z-index: 2000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2); 
    border-bottom: none;
}



/* Brand/Logo Section */



.brand-logo {
    display: flex; align-items: center; gap: 12px;
    font-size: 18px; font-weight: 700; 
    color: white; 
    text-transform: uppercase;
    line-height: 1.2;
    text-decoration: none;
}

/* Logo Icon*/


.logo-icon { 
    width: 42px; height: 42px; 
    background: white;
    border-radius: 10px; /* Rounded corners like the screenshot */
    display: flex; align-items: center; justify-content: center;
    font-weight: bold; font-size: 20px; 
    color: #322a96;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    flex-shrink: 0;
}


/* --- HAMBURGER MENU BUTTON --- */



.hamburger {
    cursor: pointer; 
    width: 45px; height: 45px; 
    display: flex; flex-direction: column; justify-content: center; align-items: center;
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
    display: block; height: 3px; width: 24px; 
    background: white; 
    border-radius: 2px; 
    transition: 0.3s ease-in-out; 
}



/* Hamburger Animation */


.hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 6px); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }



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
}

/* --- ICONS --- */



.mobile-menu a i {
    width: 20px; 
    text-align: center; 
    color: #4c46c9;
    font-size: 16px;
}


/* --- HOVER & ACTIVE STATE --- */


.mobile-menu a:hover, 
.mobile-menu a.highlight {
    background: #eff0f0;
    color: #4c46c9;
    border-left: 4px solid #4c46c9;
}


</style>


<header>
        <a class="brand-logo" href="/">
            <img src="https://i.postimg.cc/jSTKgmrc/ib-logo.png" class="logo-icon">
            Interactive Learning
        </a>
        <div class="hamburger" onclick="toggleMenu()">
            <span></span><span></span><span></span>
        </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
        <a href="/"><i class="fa-solid fa-house"></i> Home</a><a href="/data/pdf.html" class="active"><i class="fa-solid fa-file-pdf"></i> PDF Tool</a>
        <a href="/data/quotes.html"><i class="fa-solid fa-quote-left"></i> Quotes Maker</a><a href="/data/note.html">
    <i class="fa-solid fa-pen-to-square"></i> Short Note Generator
</a>
        <a href="/data/notice.html"><i class="fa-solid fa-bullhorn"></i> Notice Maker</a>
    </div>');



function toggleMenu() {
            document.getElementById('mobileMenu').classList.toggle('active');
            document.querySelector('.hamburger').classList.toggle('active');
        }