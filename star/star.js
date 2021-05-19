const starts = () => {
  console.log("1");
  const count = 300;
  const container = document.querySelector('.container');
  let i = 0;
  while (i < count) {
    const star = document.createElement('i');
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const duration = Math.random() * 10;
    const size = Math.random() * 2;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${30+ duration}s`;
    star.style.animationDelay = `${duration}s`;
    container.appendChild(star);
    i++;
  }
}
starts();