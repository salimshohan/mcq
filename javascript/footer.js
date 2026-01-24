let footer = document.getElementById("footer");
let year = new Date().getFullYear();
footer.innerHTML = '<style>footer {
    width: 100%; padding: 15px; text-align: center;
    background: #1f2937;
    border-top: 1px solid #dadada;
    margin-top: auto; font-size: 14px; color: white;
}</style>

<footer>&copy;' + year + ' Interactive Learning<br>All rights reserved.</footer>';
