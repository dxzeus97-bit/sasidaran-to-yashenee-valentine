function yes() {
  document.getElementById("response").innerHTML =
    "Yay! You just made Sasidaran the happiest person ❤️🥹";

  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Countdown timer
const countdownElement = document.getElementById("countdown");
const valentinesDate = new Date("February 14, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = valentinesDate - now;

  if (distance < 0) {
    countdownElement.innerHTML = "Happy Valentine’s Day 💖";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML =
    `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until Valentine’s 💘`;
}, 1000);

// No button runs away 😄
const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts 💕
setInterval(createHeart, 400);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
