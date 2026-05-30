"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";

export function PlayroomAnimatedPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group cursor-pointer bg-gradient-to-br from-birch via-sage-light/40 to-sage">
      {/* Wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e8] via-[#ede8df] to-[#e8e2d8]" />

      {/* Window with sunshine */}
      <div className="absolute top-[12%] left-[50%] -translate-x-1/2 w-[45%] h-[42%] rounded-lg bg-sky-200/80 border-4 border-white shadow-inner overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-amber/70 blur-sm"
          animate={reduceMotion ? undefined : { scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100/90 to-sage-light/50" />
        {!reduceMotion &&
          [0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-1 bg-amber/30 rounded-full origin-left"
              style={{ top: "30%", left: "20%", rotate: -30 + i * 25 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
      </div>

      {/* Shelves with blocks */}
      <div className="absolute bottom-[18%] left-[8%] right-[8%] h-[8%] bg-white/80 rounded-md shadow-sm" />
      <div className="absolute bottom-[28%] left-[12%] flex gap-1.5">
        {["bg-amber", "bg-sage", "bg-amber/70", "bg-sage-dark"].map((color, i) => (
          <motion.div
            key={i}
            className={`w-7 h-7 sm:w-9 sm:h-9 rounded-md ${color} shadow-md`}
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>

      {/* Plant pot */}
      <div className="absolute bottom-[26%] right-[14%]">
        <div className="w-10 h-8 bg-amber/60 rounded-b-lg mx-auto" />
        <motion.div
          className="flex justify-center gap-1 -mt-1"
          animate={reduceMotion ? undefined : { rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-6 bg-sage rounded-full"
              style={{ transform: `rotate(${(i - 1) * 15}deg)` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Rug */}
      <div className="absolute bottom-[5%] left-[20%] right-[20%] h-[12%] bg-sage/20 rounded-full blur-[1px]" />

      {/* Floating stars */}
      {!reduceMotion &&
        ["★", "✦", "★"].map((star, i) => (
          <motion.span
            key={i}
            className="absolute text-amber/50 text-sm"
            style={{ left: `${20 + i * 25}%`, top: `${55 + i * 5}%` }}
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5 + i, repeat: Infinity, delay: i * 0.6 }}
          >
            {star}
          </motion.span>
        ))}

      {/* Play overlay */}
      <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center group-hover:bg-charcoal/30 transition-colors">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="h-7 w-7 text-sage ml-1" fill="currentColor" />
        </div>
      </div>
    </div>
  );
}
