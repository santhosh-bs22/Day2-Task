const themeToggle = document.getElementById("theme");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

var boolean = false;

const profileToggle = document.getElementById("profileToggle");
const profileImage = document.getElementById("profileImage");

profileToggle.addEventListener("click", () => {
  boolean = !boolean;

  profileImage.hidden = !boolean;

  profileToggle.textContent = `${
    boolean ? "Hide Profile Image" : "Show Profile Image"
  }`;

  profileToggle.setAttribute("aria-expanded", String(boolean));
});

let count = 0;

const btn = document.getElementById("downloadBtn");
const counts = document.getElementById("count");

btn.addEventListener("click", () => {
  count = count + 1;
  counts.textContent = count;
});
