
// Highlight the current page in the navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Reveal content smoothly while scrolling
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  ".content-card, .highlight-card, .content-section"
).forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});

// Update footer year
document.querySelectorAll("footer").forEach(footer => {
  const year = footer.querySelector(".copyright-year");
  if (year) year.textContent = new Date().getFullYear();
});
