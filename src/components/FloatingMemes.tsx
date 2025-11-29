import { useEffect, useRef } from 'react';

interface MemeFloat {
  id: number;
  name: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const MEME_TEMPLATES = [
  'Drake Hotline',
  'Distracted Boyfriend',
  'Two Buttons',
  'Expanding Brain',
  'Is This a Pigeon',
  'Bernie Sanders',
  'Woman Yelling at Cat',
  'Success Kid',
  'Stonks',
  'Galaxy Brain',
  'Change My Mind',
  'Surprised Pikachu'
];

export function FloatingMemes() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const memeCount = isMobile ? 8 : 15;

    const memes: MemeFloat[] = Array.from({ length: memeCount }, (_, i) => ({
      id: i,
      name: MEME_TEMPLATES[i % MEME_TEMPLATES.length],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: isMobile ? 100 + Math.random() * 50 : 120 + Math.random() * 60,
      duration: 30 + Math.random() * 50,
      delay: Math.random() * 20,
      opacity: 0.08
    }));

    if (containerRef.current) {
      containerRef.current.innerHTML = '';
      memes.forEach(meme => {
        const el = document.createElement('div');
        el.className = 'floating-meme';
        el.style.cssText = `
          position: absolute;
          left: ${meme.x}%;
          top: ${meme.y}%;
          width: ${meme.size}px;
          height: ${meme.size}px;
          opacity: ${meme.opacity};
          filter: blur(1px);
          animation: float-diagonal ${meme.duration}s infinite linear;
          animation-delay: ${meme.delay}s;
          will-change: transform;
          pointer-events: none;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.3);
          text-align: center;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        `;
        el.textContent = meme.name;
        containerRef.current?.appendChild(el);
      });
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.target instanceof HTMLElement) {
          entry.target.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
        }
      });
    });

    const memeElements = containerRef.current?.querySelectorAll('.floating-meme');
    memeElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0" />
      <style>{`
        @keyframes float-diagonal {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, 100px) rotate(5deg);
          }
          50% {
            transform: translate(200px, 0) rotate(0deg);
          }
          75% {
            transform: translate(100px, -100px) rotate(-5deg);
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
