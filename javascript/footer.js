function loadFooter() {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
    &copy; ${new Date().getFullYear()} Interactive Learning
  `;
}

document.addEventListener("DOMContentLoaded", loadFooter);