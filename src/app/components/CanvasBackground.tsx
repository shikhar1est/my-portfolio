"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars: { x: number; y: number; radius: number; speed: number }[] = [];
    const totalStars = 100;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const generateStars = () => {
      stars.length = 0;
      for (let i = 0; i < totalStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const getBackgroundColor = () => {
      return document.documentElement.classList.contains("dark") ? "#0a0a0a" : "#ffffff";
    };

    const getStarColor = () => {
      return document.documentElement.classList.contains("dark") ? "#fef2f2" : "#1f2937"; // rose-50 or gray-800
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.fillStyle = getBackgroundColor();
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = getStarColor();
      for (const star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    generateStars();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      generateStars();
    });

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 transition-colors duration-300"
    />
  );
}
