import { useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    const onResize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    window.addEventListener('resize', onResize);

    let t = 0;

    // Particles
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 600,
      y: Math.random() * 700,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    // Floating cubes data
    const cubes = [
      { x: 0.15, y: 0.2, size: 28, speed: 0.7, phase: 0, opacity: 0.12 },
      { x: 0.82, y: 0.15, size: 18, speed: 0.5, phase: 1.2, opacity: 0.1 },
      { x: 0.08, y: 0.65, size: 22, speed: 0.9, phase: 2.1, opacity: 0.08 },
      { x: 0.88, y: 0.7, size: 14, speed: 0.6, phase: 0.8, opacity: 0.12 },
      { x: 0.5, y: 0.05, size: 10, speed: 1.1, phase: 1.5, opacity: 0.09 },
      { x: 0.3, y: 0.85, size: 16, speed: 0.8, phase: 3.0, opacity: 0.07 },
      { x: 0.72, y: 0.45, size: 12, speed: 0.7, phase: 0.4, opacity: 0.1 },
    ];

    // Rings data
    const rings = [
      { rx: 0.5, ry: 0.48, radiusX: 140, radiusY: 50, rotation: -20, opacity: 0.06, width: 1 },
      { rx: 0.5, ry: 0.5, radiusX: 200, radiusY: 72, rotation: 15, opacity: 0.04, width: 1.5 },
      { rx: 0.5, ry: 0.46, radiusX: 90, radiusY: 32, rotation: 5, opacity: 0.08, width: 0.8 },
    ];

    function drawCube(cx: number, cy: number, s: number, rot: number, opacity: number) {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;

      // Top face
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.6);
      ctx.lineTo(s * 0.5, -s * 0.25);
      ctx.lineTo(0, 0);
      ctx.lineTo(-s * 0.5, -s * 0.25);
      ctx.closePath();
      ctx.fillStyle = '#0A0A0A';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 0.5;
      ctx.stroke();

      // Right face
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(s * 0.5, -s * 0.25);
      ctx.lineTo(s * 0.5, s * 0.35);
      ctx.lineTo(0, s * 0.6);
      ctx.closePath();
      ctx.fillStyle = '#1A1A1A';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.stroke();

      // Left face
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-s * 0.5, -s * 0.25);
      ctx.lineTo(-s * 0.5, s * 0.35);
      ctx.lineTo(0, s * 0.6);
      ctx.closePath();
      ctx.fillStyle = '#222222';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.1)';
      ctx.stroke();

      ctx.restore();
    }

    function drawMainIcon(cx: number, cy: number, size: number, floatOffset: number) {
      const s = size;
      const fo = floatOffset;

      ctx.save();
      ctx.translate(cx, cy + fo);

      // Outer glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 1.5);
      grad.addColorStop(0, 'rgba(0,0,0,0.06)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, s * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Shadow
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.beginPath();
      ctx.ellipse(0, s * 0.85, s * 0.65, s * 0.2, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#000000';
      ctx.fill();
      ctx.restore();

      // Large cube
      const tilt = Math.sin(t * 0.4) * 0.04;
      ctx.save();
      ctx.rotate(tilt);

      // Draw isometric grid structure
      const gs = s * 0.32;

      // Grid positions: 2x2 arrangement
      const positions = [
        { dx: -gs, dy: -gs * 0.5, color1: '#0A0A0A', color2: '#1A1A1A', color3: '#111111' },
        { dx: gs, dy: -gs * 0.5, color1: '#111111', color2: '#1A1A1A', color3: '#0D0D0D' },
        { dx: -gs, dy: gs * 0.5, color1: '#111111', color2: '#222222', color3: '#161616' },
        { dx: gs, dy: gs * 0.5, color1: '#0A0A0A', color2: '#1A1A1A', color3: '#0D0D0D' },
      ];

      positions.forEach(({ dx, dy, color1, color2, color3 }) => {
        const bs = gs * 0.88;
        ctx.save();
        ctx.translate(dx * 0.9, dy * 0.7);

        // top
        ctx.beginPath();
        ctx.moveTo(0, -bs * 0.55);
        ctx.lineTo(bs * 0.48, -bs * 0.22);
        ctx.lineTo(0, 0);
        ctx.lineTo(-bs * 0.48, -bs * 0.22);
        ctx.closePath();
        ctx.fillStyle = color1;
        ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,0.12)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // right
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(bs * 0.48, -bs * 0.22);
        ctx.lineTo(bs * 0.48, bs * 0.35);
        ctx.lineTo(0, bs * 0.57);
        ctx.closePath();
        ctx.fillStyle = color2;
        ctx.fill();
        ctx.stroke();

        // left
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-bs * 0.48, -bs * 0.22);
        ctx.lineTo(-bs * 0.48, bs * 0.35);
        ctx.lineTo(0, bs * 0.57);
        ctx.closePath();
        ctx.fillStyle = color3;
        ctx.fill();
        ctx.stroke();

        ctx.restore();
      });

      ctx.restore();
      ctx.restore();
    }

    function drawRing(rx: number, ry: number, radX: number, radY: number, rotation: number, opacity: number, lineWidth: number) {
      ctx.save();
      ctx.translate(rx, ry);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.ellipse(0, 0, radX, radY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#0A0A0A';
      ctx.lineWidth = lineWidth;
      ctx.stroke();
      ctx.restore();
    }

    function drawGlassPanel(x: number, y: number, w: number, h: number, opacity: number) {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, 8);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.08)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      t += 0.012;

      // Background subtle gradient
      const bg = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, width * 0.6);
      bg.addColorStop(0, 'rgba(240,240,240,0.5)');
      bg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Rings
      rings.forEach((ring) => {
        const wobble = Math.sin(t * 0.3) * 3;
        drawRing(
          ring.rx * width,
          ring.ry * height + wobble,
          ring.radiusX,
          ring.radiusY,
          ring.rotation + Math.sin(t * 0.2) * 2,
          ring.opacity,
          ring.width
        );
      });

      // Glass panels
      drawGlassPanel(width * 0.06, height * 0.3 + Math.sin(t * 0.6) * 8, 72, 52, 0.5);
      drawGlassPanel(width * 0.78, height * 0.55 + Math.sin(t * 0.5 + 1) * 10, 84, 48, 0.45);
      drawGlassPanel(width * 0.2, height * 0.78 + Math.sin(t * 0.7 + 2) * 6, 60, 40, 0.4);

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10,10,10,${p.opacity})`;
        ctx.fill();
      });

      // Floating small cubes
      cubes.forEach((cube) => {
        const cx = cube.x * width;
        const cy = cube.y * height + Math.sin(t * cube.speed + cube.phase) * 12;
        const rot = t * 0.2 * cube.speed + cube.phase;
        drawCube(cx, cy, cube.size, rot, cube.opacity);
      });

      // Main icon
      const floatOffset = Math.sin(t * 0.7) * 14;
      drawMainIcon(width * 0.5, height * 0.47, Math.min(width, height) * 0.28, floatOffset);

      // Connection lines
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = '#0A0A0A';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.globalAlpha = 0.04 * (1 - dist / 80);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animFrameRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        style={{ maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)' }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-screen py-28 lg:py-0">
          {/* Left: Content */}
          <div className="flex flex-col justify-center lg:pr-8">
            {/* Label */}
           

            {/* Headline */}
            <h1
              className="text-5xl lg:text-[3.75rem] xl:text-[4.5rem] font-black tracking-tight leading-[1.02] text-omnexa-black mb-8 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease 0.2s forwards' }}
            >
              Building Digital
              <br />
              <span className="text-gradient-dark">Systems That</span>
              <br />
              Drive Growth
            </h1>

            {/* Subheadline */}
            <p
              className="text-base lg:text-lg text-omnexa-graphite leading-relaxed max-w-md mb-12 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease 0.35s forwards' }}
            >
              OMNEXA helps ambitious businesses grow through premium websites, SEO, digital marketing, branding and automation.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-16 opacity-0"
              style={{ animation: 'fadeUp 0.8s ease 0.5s forwards' }}
            >
              <a href="#contact" className="btn-primary">
                Start Your Project
                <ArrowUpRight size={15} strokeWidth={2.5} />
              </a>
              <a href="#portfolio" className="btn-secondary">
                View Case Studies
              </a>
            </div>

            {/* Stats row */}
            <div
              className="flex gap-8 pt-8 border-t border-omnexa-border opacity-0"
              style={{ animation: 'fadeUp 0.8s ease 0.65s forwards' }}
            >
              {[
                
  { number: '6+', label: 'Projects Completed' },
  { number: '5', label: 'Team Members' },
  { number: '100%', label: 'Commitment' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-omnexa-black tracking-tight">{stat.number}</div>
                  <div className="text-xs text-omnexa-gray mt-1 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Canvas */}
          <div
            className="relative flex items-center justify-center h-[500px] lg:h-[680px] opacity-0"
            style={{ animation: 'fadeUp 0.8s ease 0.3s forwards' }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ width: '100%', height: '100%' }}
            />

            {/* Floating data cards */}
            <div
              className="absolute top-16 left-0 glass-card rounded-xl px-4 py-3 shadow-card animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-1">SEO Performance</div>
              <div className="text-lg font-black text-omnexa-black">SEO Ready</div>
              <div className="text-xs text-green-600 mt-0.5">Growth Focused</div>
            </div>

            <div
              className="absolute bottom-24 right-0 glass-card rounded-xl px-4 py-3 shadow-card animate-float"
              style={{ animationDelay: '2s' }}
            >
              <div className="text-xs font-semibold text-omnexa-graphite tracking-wide mb-1">Revenue Impact</div>
              <div className="text-lg font-black text-omnexa-black">Custom Solutions</div>
              <div className="text-xs text-omnexa-gray mt-0.5">Built for Growth</div>
            </div>

            <div
              className="absolute top-1/2 -left-4 glass-card rounded-xl px-3 py-2.5 shadow-card animate-float-delayed"
              style={{ animationDelay: '1s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-omnexa-black">Live Projects</span>
              </div>
              <div className="text-base font-black text-omnexa-black mt-0.5">Growing Daily</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-omnexa-gray animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  );
}
