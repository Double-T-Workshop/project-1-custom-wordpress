document.addEventListener("DOMContentLoaded", () => {
    const alphabetButtons = document.querySelectorAll(
      ".word-list-block .alphabet"
    );
    const wordSections = document.querySelectorAll(
      ".word-list-block .word-list-section"
    );
  
    alphabetButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const selectedLetter = button.getAttribute("data-letter");
  
        // Update active button styling
        alphabetButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Show/Hide word sections
        wordSections.forEach((section) => {
          if (section.getAttribute("data-letter") === selectedLetter) {
            section.classList.add("active");
          } else {
            section.classList.remove("active");
          }
        });
      });
    });
  
    // Trigger click on the first button to initialize view
    if (alphabetButtons.length > 0) {
      alphabetButtons[0].click();
    }
  });