document.addEventListener("scroll", function () {
    const headerContainer = document.querySelector(".first-set-header");
    const secondSetHeader = document.querySelector(".second-set-header");
  
    // Get the bottom position of the first set of headers
    const headerBottom = headerContainer.getBoundingClientRect().bottom;
  
    // Toggle visibility of the second set based on scroll
    if (headerBottom <= 0) {
      secondSetHeader.style.display = "block"; // Show the sticky header
    } else {
      secondSetHeader.style.display = "none"; // Hide the sticky header
    }
  });
  