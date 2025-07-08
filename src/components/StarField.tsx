import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  darkMode: boolean;
}

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

const StarField: React.FC<StarFieldProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      const numStars = Math.floor((window.innerWidth * window.innerHeight) / 8000);
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.5 + 0.1,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        });
      }
      
      starsRef.current = stars;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouse = mouseRef.current;
      
      starsRef.current.forEach((star) => {
        // Mouse interaction - stars move away from cursor
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          star.x += (dx / distance) * force * 0.5;
          star.y += (dy / distance) * force * 0.5;
        }
        
        // Gentle floating movement
        star.y -= star.speed;
        star.x += Math.sin(Date.now() * 0.001 + star.twinklePhase) * 0.1;
        
        // Wrap around screen
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        
        // Twinkling effect
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = Math.sin(star.twinklePhase) * 0.3 + 0.7;
        
        // Draw star
        ctx.save();
        ctx.globalAlpha = star.opacity * twinkle;
        
        if (darkMode) {
          // Dark mode - bright white/blue stars
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(0.5, '#e0f2fe');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
        } else {
          // Light mode - subtle dark stars
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size);
          gradient.addColorStop(0, '#1e293b');
          gradient.addColorStop(0.5, '#64748b');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
        }
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add sparkle effect for larger stars
        if (star.size > 1.5) {
          ctx.globalAlpha = star.opacity * twinkle * 0.5;
          ctx.strokeStyle = darkMode ? '#60a5fa' : '#475569';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }
        
        ctx.restore();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
    });
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarField;