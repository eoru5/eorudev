import React from 'react';

const particle = (maxX, maxY, speed, radius) => {
  let x = Math.random() * maxX;
  let y = Math.random() * maxY;
  let vx = (Math.random() - 0.5) * speed;
  let vy = (Math.random() - 0.5) * speed;
  let r = Math.random() * (radius * 2 - radius) + radius; // particle size from  [radius, radius*2]
  return { x, y, vx, vy, r };
};

const Constellation = ({
  background = '#1a252f',
  interactive = true,
  density = 0.0002,
  color = "#fff",
  speed = 0.1,
  radius = 1,
  alpha = 0.3,
}) => {
  const canvasRef = React.useRef(null);
  let particles = []; // {x, y, vx, vy, r}
  let mouseParticle = null;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      if (particles.length === 0) {
        const particleCount = Math.floor((canvas.width * canvas.height) * density);
        for (let i = 0; i < particleCount; i++) {
          particles[i] = particle(canvas.width, canvas.height, speed, radius);
        }

        if (interactive) {
          mouseParticle = particle(canvas.width, canvas.height, 0, radius);
          particles.push(mouseParticle);
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'lighter';
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // update particle pos
        if (p1.x > canvas.width + 20 || p1.x < -20) p1.vx = -p1.vx;
        if (p1.y > canvas.height + 20 || p1.y < -20) p1.vy = -p1.vy;
        p1.x += p1.vx;
        p1.y += p1.vy;

        // draw particle
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.arc(p1.x, p1.y, p1.r, 0, 2 * Math.PI); // particle size from  [radius, radius*1.5]
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = (p1.x - p2.x)**2 + (p1.y - p2.y)**2
          if (distance < 120**2) {
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.globalAlpha = alpha * (120 - Math.sqrt(distance)) / 120;
            ctx.lineWidth = 0.3;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const moveMouseParticle = (e) => {
      if (mouseParticle) {
        mouseParticle.x = e.clientX - canvas.offsetLeft;
        mouseParticle.y = e.clientY - canvas.offsetTop;
      }
    };

    const touchMouseParticle = (e) => {
      if (mouseParticle) {
        const touch = e.touches[e.touches.length - 1];
        mouseParticle.x = touch.clientX - canvas.offsetLeft;
        mouseParticle.y = touch.clientY - canvas.offsetTop;
      }
    };
    
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    if (interactive) {
      canvas.addEventListener('mousemove', moveMouseParticle);
      canvas.addEventListener('touchmove', touchMouseParticle);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (interactive) {
        canvas.removeEventListener('mousemove', moveMouseParticle);
        canvas.removeEventListener('touchmove', touchMouseParticle);
      }
    };
  }, [background, interactive, density, color, speed, radius, alpha]);

  return (
    <div className='-z-10'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-screen h-screen'/>
    </div>
  );
};

export default Constellation;