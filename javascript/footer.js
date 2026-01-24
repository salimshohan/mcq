function loadFooter() {
let year = new Date().getFullYear();
let footer = '<div class="width: 100%;
        padding: 15px;
        text-align: center;
        background: #1f2937;
        border-top: 1px solid #dadada;
        font-size: 14px;
        color: white;
        font-family: sans-serif;">
            &copy; ${year} Interactive Learning<br>
            All rights reserved.
        </div>';
return footer;
