"use client";

import { motion, useReducedMotion } from "framer-motion";

const LEAVES = [
  { x: "8%", delay: 0, duration: 14, size: 18, rotate: -25 },
  { x: "22%", delay: 2, duration: 18, size: 14, rotate: 15 },
  { x: "38%", delay: 4, duration: 16, size: 20, rotate: -10 },
  { x: "55%", delay: 1, duration: 20, size: 16, rotate: 30 },
  { x: "72%", delay: 3, duration: 15, size: 22, rotate: -20 },
  { x: "88%", delay: 5, duration: 17, size: 15, rotate: 10 },
  { x: "15%", delay: 6, duration: 19, size: 12, rotate: 40 },
  { x: "65%", delay: 7, duration: 13, size: 17, rotate: -35 },
];

const BUTTERFLIES = [
  { x: "20%", y: "35%", delay: 0 },
  { x: "70%", y: "28%", delay: 1.5 },
  { x: "45%", y: "45%", delay: 3 },
];

function BirchLeaf({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 24 28"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 2 4 10 4 18C4 22 7 26 12 26C17 26 20 22 20 18C20 10 12 2 12 2Z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M12 4V24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function Butterfly({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" className={className} aria-hidden="true">
      <ellipse cx="10" cy="14" rx="8" ry="10" fill="currentColor" opacity="0.7" />
      <ellipse cx="18" cy="14" rx="8" ry="10" fill="currentColor" opacity="0.7" />
      <ellipse cx="14" cy="14" rx="2" ry="8" fill="currentColor" />
    </svg>
  );
}

function BirchTree({ x, height, className }: { x: number; height: number; className?: string }) {
  return (
    <g className={className} transform={`translate(${x}, ${320 - height})`}>
      <rect x="18" y={height - 40} width="8" height="40" rx="2" fill="#f5f0e8" />
      {[0, 12, 24].map((offset) => (
        <line
          key={offset}
          x1="14"
          x2="30"
          y1={height - 38 + offset}
          y2={height - 38 + offset}
          stroke="#d4cfc4"
          strokeWidth="1.5"
        />
      ))}
      <ellipse cx="22" cy={height - 55} rx="28" ry="35" fill="#7c9082" opacity="0.9" />
      <ellipse cx="22" cy={height - 75} rx="22" ry="28" fill="#a8b8ad" opacity="0.85" />
    </g>
  );
}

export function HeroAnimatedBackground({ subtle = false }: { subtle?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Sky gradient with gentle shift */}
      <motion.div
        className="absolute inset-0"
        animate={
          reduceMotion
            ? undefined
            : {
                background: [
                  "linear-gradient(180deg, #c5d4c8 0%, #7c9082 45%, #5f7265 100%)",
                  "linear-gradient(180deg, #d0ddd2 0%, #8a9e90 45%, #5f7265 100%)",
                  "linear-gradient(180deg, #c5d4c8 0%, #7c9082 45%, #5f7265 100%)",
                ],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(180deg, #c5d4c8 0%, #7c9082 45%, #5f7265 100%)",
        }}
      />

      {/* Soft sun glow */}
      <motion.div
        className="absolute -top-16 right-[12%] w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-amber/30 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute top-[8%] right-[18%] w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber/80 blur-sm shadow-[0_0_40px_rgba(200,146,61,0.5)]" />

      {/* Drifting clouds */}
      {!reduceMotion &&
        [
          { top: "12%", width: 120, delay: 0, duration: 28 },
          { top: "22%", width: 90, delay: 4, duration: 22 },
          { top: "18%", width: 70, delay: 8, duration: 32 },
        ].map((cloud, i) => (
          <motion.div
            key={i}
            className="absolute left-0 opacity-40"
            style={{ top: cloud.top, width: cloud.width, height: cloud.width * 0.35 }}
            initial={{ x: "-20vw" }}
            animate={{ x: "120vw" }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              delay: cloud.delay,
              ease: "linear",
            }}
          >
            <div className="w-full h-full bg-white/60 rounded-full blur-md relative">
              <div className="absolute -top-2 left-[20%] w-[45%] h-[80%] bg-white/50 rounded-full blur-sm" />
              <div className="absolute -top-1 right-[15%] w-[35%] h-[70%] bg-white/50 rounded-full blur-sm" />
            </div>
          </motion.div>
        ))}

      {/* Rolling hills */}
      {!subtle && (
      <svg
        className="absolute bottom-0 left-0 w-full h-[45%] min-h-[280px]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
      >
        <path
          d="M0 400V280C240 220 480 320 720 260C960 200 1200 300 1440 240V400H0Z"
          fill="#5f7265"
          opacity="0.5"
        />
        <path
          d="M0 400V300C360 240 540 340 900 280C1080 250 1260 320 1440 290V400H0Z"
          fill="#7c9082"
          opacity="0.7"
        />
        <path
          d="M0 400V330C300 290 600 360 960 310C1200 280 1320 350 1440 330V400H0Z"
          fill="#a8b8ad"
          opacity="0.85"
        />
        <BirchTree x={120} height={180} />
        <BirchTree x={380} height={220} />
        <BirchTree x={680} height={160} />
        <BirchTree x={980} height={200} />
        <BirchTree x={1240} height={170} />
      </svg>
      )}

      {/* Floating leaves */}
      {LEAVES.map((leaf, i) =>
        reduceMotion ? (
          <div
            key={i}
            className="absolute text-amber/60"
            style={{ left: leaf.x, top: `${20 + (i % 4) * 15}%` }}
          >
            <BirchLeaf size={leaf.size} />
          </div>
        ) : (
          <motion.div
            key={i}
            className="absolute text-amber/70"
            style={{ left: leaf.x, top: "-5%" }}
            animate={{
              y: ["0vh", "110vh"],
              x: [0, i % 2 === 0 ? 40 : -40, 0],
              rotate: [leaf.rotate, leaf.rotate + 180, leaf.rotate + 360],
            }}
            transition={{
              duration: leaf.duration,
              repeat: Infinity,
              delay: leaf.delay,
              ease: "linear",
            }}
          >
            <BirchLeaf size={leaf.size} />
          </motion.div>
        )
      )}

      {/* Butterflies */}
      {BUTTERFLIES.map((bf, i) =>
        reduceMotion ? (
          <div
            key={i}
            className="absolute text-white/70"
            style={{ left: bf.x, top: bf.y }}
          >
            <Butterfly />
          </div>
        ) : (
          <motion.div
            key={i}
            className="absolute text-white/80"
            style={{ left: bf.x, top: bf.y }}
            animate={{
              x: [0, 30, -20, 40, 0],
              y: [0, -25, 15, -30, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bf.delay,
            }}
          >
            <Butterfly />
          </motion.div>
        )
      )}

      {/* Sparkles */}
      {!reduceMotion &&
        Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/70"
            style={{
              left: `${10 + (i * 7) % 80}%`,
              top: `${15 + (i * 11) % 50}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}

      {/* Readability overlay for hero text */}
      <div
        className={
          subtle
            ? "absolute inset-0 bg-sage/80"
            : "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/25 to-charcoal/55"
        }
      />
    </div>
  );
}
