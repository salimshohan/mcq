let footer = document.getElementById("footer");

const year = new Date().getFullYear();

footer.style.cssText = `
  width:100%;
  padding:15px;
  text-align:center;
  background:#1f2937;
  border-top:1px solid #dadada;
  font-size:14px;
  color:white;
`;

footer.innerHTML = `
  <div class="site-footer">
    &copy; Interactive Learning<br>
    All rights reserved.
  </div>
`;