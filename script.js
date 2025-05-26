// Matrix-style te amo rain
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let columns = Math.floor(canvas.width / 15);
let drops = Array(columns).fill(1);
let text = "Te amo 💕";

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ff69b4";
  ctx.font = "15px Arial";

  for (let i = 0; i < drops.length; i++) {
    ctx.fillText(text, i * 20, drops[i] * 20);
    if (drops[i] * 20 > canvas.height || Math.random() > 0.95) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 60);

// Firework explosion on click
document.addEventListener("click", showLoveBurst);
document.addEventListener("touchstart", showLoveBurst);

function showLoveBurst(e) {
  const container = document.getElementById("explosions");
  for (let i = 0; i < 10; i++) {
    const burst = document.createElement("div");
    burst.className = "te-amo-burst";
    burst.style.left = `${e.clientX - 20 + Math.random() * 40}px`;
    burst.style.top = `${e.clientY - 20 + Math.random() * 40}px`;
    burst.textContent = "💕 Te amo 💕";
    container.appendChild(burst);

    setTimeout(() => {
      burst.remove();
    }, 1000);
  }
}
