function doiMau() {
  const mau = ["#ff9a9e", "#fad0c4", "#a18cd1", "#fbc2eb", "#84fab0", "#8fd3f4"];
  const random = mau[Math.floor(Math.random() * mau.length)];
  document.body.style.background = random;
}