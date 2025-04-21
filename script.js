
const correctPassword = "aaisulu.b.b";
function checkPassword() {
  const pass = document.getElementById('password').value;
  if (pass === correctPassword) {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    startHearts();
  } else {
    document.getElementById('error').textContent = 'Неправильный пароль';
  }
}
function startHearts() {
  const heartContainer = document.getElementById('hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.textContent = '♥';
    heartContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }, 300);
}
