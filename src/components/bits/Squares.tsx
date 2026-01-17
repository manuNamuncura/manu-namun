import { useRef, useEffect, useState } from 'react';

interface SquaresProps {
  direction?: 'diagonal' | 'up' | 'right' | 'down' | 'left';
  speed?: number;
  borderColor?: string;
  squareSize?: number;
  hoverFillColor?: string;
}

export const Squares = ({
  direction = 'right',
  speed = 1,
  borderColor = '#333',
  squareSize = 40,
  hoverFillColor = '#222',
}: SquaresProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredSquare, setHoveredSquare] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let requestRef: number;
    let offset = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const startX = Math.floor(offset.x % squareSize) - squareSize;
      const startY = Math.floor(offset.y % squareSize) - squareSize;

      for (let x = startX; x < canvas.width; x += squareSize) {
        for (let y = startY; y < canvas.height; y += squareSize) {
          ctx.strokeStyle = borderColor;
          ctx.lineWidth = 0.5;
          ctx.strokeRect(x, y, squareSize, squareSize);
        }
      }

      // Animación de movimiento
      if (direction === 'right') offset.x += speed;
      if (direction === 'left') offset.x -= speed;
      if (direction === 'up') offset.y -= speed;
      if (direction === 'down') offset.y += speed;
      if (direction === 'diagonal') { offset.x += speed; offset.y += speed; }

      requestRef = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    requestRef = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(requestRef);
      window.removeEventListener('resize', resize);
    };
  }, [direction, speed, borderColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full border-none block"
    />
  );
};