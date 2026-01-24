const footer = document.getElementById("footer");
if (!footer) return;

const year = new Date().getFullYear();

footer.innerHTML = `
  <div class="site-footer">
    &copy; ${year} Interactive Learning<br>
    All rights reserved.
  </div>
`;