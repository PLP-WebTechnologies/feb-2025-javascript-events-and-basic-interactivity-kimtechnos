// click
document.getElementById("greeting-btn").addEventListener("click", () => {
  alert("Hello! welcome to playground!");
});

//hover
const hoverBox = document.getElementById("hover-box");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "";
});
//keypress
document.addEventListener("keydown", (e) => {
  document.getElementById("keypress-display").textContent =
    `You pressed: ${e.key}`;
});

// double-click secret
document.querySelector("footer").addEventListener("dblclick", () => {
  alert("You found the secret message!");
});

//Slideshow

const images = ["image.png", "image2.png", "image3.png"];
let currentIndex = 0;
const slideImg = document.getElementById("slide");

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  slideImg.src = images[currentIndex];
  slideImg.classList.add("fade"); //bonus: css animation
  setTimeout(() => slideImg.classList.remove("fade"), 500);
});
document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1) % images.length;
  slideImg.src = images[currentIndex];
  slideImg.classList.add("fade"); //bonus: css animation
  setTimeout(() => slideImg.classList.remove("fade"), 500);
});

//according
document.querySelectorAll(".according h3").forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

//Real time validation

const form = document.getElementById("signUp-form");
const errorMsg = document.getElementById("error-message");

document.getElementById("password").addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    errorMsg.textContent = "Password must be 8+ characters!";
  } else {
    errorMsg.textContent = "";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  
  const password = document.getElementById("password").value.trim();

  if (password.length < 8) {
    errorMsg.textContent = "Password must be at least 8 characters!";
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    errorMsg.textContent = "Invalid email format!";
    return;
  }

  // If all validations pass
  errorMsg.textContent = "";
  alert("Form submitted successfully!");
});
