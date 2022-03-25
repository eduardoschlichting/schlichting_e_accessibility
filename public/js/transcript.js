// transcript functionality
const transcript = document.querySelector(".collapser");
const transcriptBtn = document.querySelector(".transcript-toggle");

// transcript
transcript.classList.add("collapse");
transcriptBtn.addEventListener("click", () => {
  transcript.classList.contains("collapse")
    ? (transcriptBtn.innerHTML = "Collapse transcript")
    : (transcriptBtn.innerHTML = "Expand transcript");
  transcript.classList.toggle("collapse");
});
