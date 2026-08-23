import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ startX: 0, startY: 0, initialX: 0, initialY: 0 });

  const projects = [
    {
      name: "darragh.website",
      description: "This website.",
      links: "https://darragh.website"
    },
    {
      name: "ether.beer",
      description: "A Minecraft minigames client.",
      links: "https://ether.beer"
    }
  ];

  const handleClose = () => {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMaximized || (e.target as HTMLElement).closest('button')) return;
    
    setIsDragging(true);
    dragStartPos.current = {
      startX: e.clientX,
      startY: e.clientY,
      initialX: position.x,
      initialY: position.y
    };
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      if (e.pointerType !== 'mouse') return;
      const deltaX = e.clientX - dragStartPos.current.startX;
      const deltaY = e.clientY - dragStartPos.current.startY;
      setPosition({
        x: dragStartPos.current.initialX + deltaX,
        y: dragStartPos.current.initialY + deltaY
      });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  return (
    <div className={`min-h-screen bg-[#121212] text-neutral-300 font-mono selection:bg-blue-600 selection:text-white flex flex-col justify-between ${isMaximized ? 'p-0 overflow-hidden' : 'p-4 sm:p-8 md:p-12 pb-6'}`}>
      {/* Window */}
      <div 
        style={!isMaximized ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` } : {}}
        className={`border-2 border-neutral-700 bg-black w-full ${
          isMaximized ? 'fixed inset-0 z-50 flex flex-col h-screen max-w-none shadow-none border-0' : 'max-w-3xl mx-auto shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
        }`}
      >
        {/* Header */}
        <div 
          onPointerDown={handlePointerDown}
          className={`flex items-center justify-between px-3 py-1.5 bg-neutral-900 border-b-2 border-neutral-700 text-xs select-none shrink-0 ${
            isMaximized ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
          }`}
        >
          <span className="text-neutral-400 font-bold tracking-wider pointer-events-none">
            darragh@portfolio: ~ (pts/0)
          </span>
          <div className="flex items-center gap-1 font-bold text-neutral-400">
            {/* Minimize */}
            <button
              type="button"
              onClick={() => setIsMinimized(!isMinimized)}
              aria-label="Minimize terminal"
              className="px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:text-white text-[10px] leading-none transition-colors active:translate-y-0.5"
            >
              _
            </button>

            {/* Maximize */}
            <button
              type="button"
              onClick={() => {
                setIsMaximized(!isMaximized);
                if (!isMaximized) setPosition({ x: 0, y: 0 });
              }}
              aria-label="Maximize terminal"
              className="px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 hover:text-white text-[10px] leading-none transition-colors active:translate-y-0.5"
            >
              {isMaximized ? '❐' : '□'}
            </button>

            {/* Close */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close terminal"
              className="px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 hover:bg-red-900/80 hover:border-red-600 hover:text-red-200 text-[10px] leading-none transition-colors active:translate-y-0.5"
            >
              ×
            </button>
          </div>
        </div>

        {/* Minimized Placeholder */}
        {isMinimized ? (
          <div className="p-4 bg-neutral-950 flex items-center justify-between text-xs text-neutral-500">
            <span>[Process suspended: pts/0]</span>
            <button
              type="button"
              onClick={() => setIsMinimized(false)}
              className="text-blue-400 hover:underline"
            >
              fg %1 (restore)
            </button> {/* fg = foreground, %1 = job number :nerd: */}
          </div>
        ) : (
          /* Content */
          <main className={`p-6 sm:p-8 space-y-10 text-sm md:text-base ${isMaximized ? 'flex-1 overflow-y-auto max-w-5xl mx-auto w-full' : ''}`}>
            
            {/* Intro */}
            <section className="space-y-2">
              <div className="text-blue-500 text-xs">
                &gt; whoami
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Hello, I'm Darragh
                <span className="text-blue-500 inline-block animate-blink">
                  _
                </span>
              </h1>
              <p className="text-neutral-400 text-xs md:text-sm">
                Computer Science student & enthusiast.
              </p>
            </section>

            {/* About Me */}
            <section className="space-y-2">
              <div className="text-blue-500 text-xs">
                &gt; cat about.txt
              </div>
              <div className="border-l-2 border-neutral-800 pl-3 space-y-2 text-neutral-400 text-xs md:text-sm leading-relaxed">
                <p>
                  I have had a long-lasting passion for technology and software development which I have been pursuing for several years, being deeply fascinated by what is possible with just code from a very young age.
                </p>
                <p>
                  I enjoy solving complex problems, designing clean user interfaces, and exploring all aspects of software development.
                </p>
              </div>
            </section>

            {/* Projects */}
            <section className="space-y-3">
              <div className="text-blue-500 text-xs">
                &gt; tree -a ./projects
              </div>

              <div className="space-y-3 border-l border-dashed border-neutral-800 ml-2 pl-3 text-xs md:text-sm">
                {projects.map((project, idx) => (
                  <div key={idx} className="relative space-y-0.5">
                    <span className="absolute -left-3 top-0.5 text-neutral-600 select-none">└──</span>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400 font-bold">{project.name}/</span>
                      <a
                        href={project.links || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-neutral-500 hover:text-blue-400 transition-colors"
                      >
                        [open: xdg-open]
                      </a>
                    </div>
                    
                    <p className="text-neutral-500 pl-3">
                      <span className="text-neutral-600">README.md:</span> "{project.description}"
                    </p>
                  </div>
                ))}

                <div className="relative pt-1 pl-3">
                  <span className="absolute -left-3 top-1 text-neutral-600 select-none">└── </span>
                  <a
                    href="https://github.com/darraghd493"
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                  >
                    <span className="underline decoration-dotted">..</span>
                    <span className="text-neutral-600 text-xs">→ gh repo list darraghd493</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="space-y-2">
              <div className="text-blue-500 text-xs">
                &gt; ./contact.sh
              </div>
              
              <div className="flex flex-wrap gap-3 text-xs">
                <a
                  href="mailto:me@darragh.website"
                  className="px-2.5 py-1.5 border border-neutral-800 hover:border-blue-500 hover:text-blue-400 text-neutral-400 transition-colors"
                >
                  &gt; email: me@darragh.website
                </a>
                <a
                  href="https://github.com/darraghd493"
                  target="_blank"
                  rel="noreferrer"
                  className="px-2.5 py-1.5 border border-neutral-800 hover:border-blue-500 hover:text-blue-400 text-neutral-400 transition-colors"
                >
                  &gt; github: darraghd493
                </a>
              </div>
            </section>

            {/* (Maximized) View Source */}
            {isMaximized && (
              <div className="pt-8 pb-4 text-center border-t border-neutral-900">
                <a
                  href="https://github.com/darraghd493/personal-site"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-neutral-600 hover:text-blue-500 transition-colors"
                >
                  [view source]
                </a>
              </div>
            )}

          </main>
        )}
      </div>

      {/* (Regular) View Source */}
      {!isMaximized && (
        <footer className="w-full text-center mt-12 select-none">
          <a
            href="https://github.com/darraghd493/personal-site"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-neutral-600 hover:text-blue-500 transition-colors"
          >
            [view source]
          </a>
        </footer>
      )}
    </div>
  );
}