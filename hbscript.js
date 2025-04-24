function celebrate() {
    const canvas = document.getElementById('confetti');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const confetti = [];
    for (let i = 0; i < 100; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 50 + 10,
        color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        tilt: Math.random() * 10 - 10
      });
    }
  
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach(p => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      update();
    }
  
    function update() {
      confetti.forEach(p => {
        p.y += Math.cos(p.d) + 1 + p.r / 2;
        p.x += Math.sin(p.d);
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
      });
    }
  
    function animate() {
      draw();
      requestAnimationFrame(animate);
    }
  
    animate();
  }

  