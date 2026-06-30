import { useEffect } from 'react';

export default function CursorEffect() {
  useEffect(() => {

    const createPixel = (x: number, y: number, isBurst: boolean = false) => {
      const pixel = document.createElement('div');
      pixel.className = 'fixed pointer-events-none bg-blue-600 z-50';

      const size = Math.floor(Math.random() * 6) + 4;
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;

      pixel.style.left = `${x - size / 2}px`;
      pixel.style.top = `${y - size / 2}px`;
      pixel.style.transition = 'all 0.6s cubic-bezier(0.1, 0.8, 0.3, 1)';

      document.body.appendChild(pixel);

      const spread = isBurst ? 120 : 40;
      const spreadX = (Math.random() - 0.5) * spread;
      const spreadY = (Math.random() - 0.5) * spread + (isBurst ? (Math.random() - 0.5) * spread : 20);

      requestAnimationFrame(() => {
        pixel.style.transform = `translate(${spreadX}px, ${spreadY}px) rotate(${Math.random() * 90}deg) scale(0)`;
        pixel.style.opacity = '0';
      });

      setTimeout(() => {
        if (pixel.parentNode) {
          pixel.parentNode.removeChild(pixel);
        }
      }, 600);
    };

    let lastMove = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMove > 30) { // Throttle trail to 30ms for performance
        createPixel(e.clientX, e.clientY);
        lastMove = now;
      }
    };

    const handleMouseClick = (e: MouseEvent) => {
      for (let i = 0; i < 20; i++) {
        createPixel(e.clientX, e.clientY, true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return null;
}
