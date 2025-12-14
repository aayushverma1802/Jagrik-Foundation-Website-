"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, TrendingUp, Sparkles, Award, Target } from "lucide-react";

export default function EnhancedVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity, scale }}
      className="relative w-full h-full flex items-center justify-center"
    >
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Elegant Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="enhanced-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#enhanced-grid)" className="text-primary-600" />
        </svg>
      </div>

      {/* Central Icon Composition with Enhanced Animations */}
      <div className="relative z-10">
        {/* Main Circle with Advanced Gradient */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 1,
          }}
          className="relative w-72 h-72 mx-auto"
        >
          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-primary-200"
          />
          
          {/* Middle Counter-Rotating Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute inset-6 rounded-full border-3 border-primary-300"
          />
          
          {/* Inner Pulsing Ring */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-12 rounded-full border-2 border-primary-400"
          />
          
          {/* Inner Circle with Advanced Gradient */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center shadow-2xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-20 h-20 text-white" fill="currentColor" />
            </motion.div>
            
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary-400 blur-2xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Floating Icons with Perfect Circular Alignment - No Overlap */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          {[
            { icon: Users, angle: -90, delay: 0 },      // Top (12 o'clock)
            { icon: TrendingUp, angle: 0, delay: 0.2 },   // Right (3 o'clock)
            { icon: Award, angle: 90, delay: 0.4 },      // Bottom (6 o'clock)
            { icon: Target, angle: 180, delay: 0.6 },      // Left (9 o'clock)
          ].map((item, index) => {
            const Icon = item.icon;
            // Increased radius to prevent overlap - 150px from center (icon is 80px, so total space is 190px radius)
            const radius = 150;
            const angleRad = (item.angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * radius;
            const y = Math.sin(angleRad) * radius;

            return (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.8 + item.delay,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  zIndex: 10,
                  width: "80px",
                  height: "80px",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                  className="bg-white rounded-full shadow-xl border-2 border-primary-100 hover:border-primary-300 transition-colors cursor-pointer group relative w-full h-full flex items-center justify-center"
                >
                  <Icon className="w-10 h-10 text-primary-600 group-hover:text-primary-700 transition-colors" />
                  
                  {/* Hover Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary-200 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                    initial={false}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Connecting Lines with Perfect Alignment */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid meet"
        >
          {[
            { angle: -90, delay: 1 },      // Top
            { angle: 0, delay: 1.2 },      // Right
            { angle: 90, delay: 1.4 },    // Bottom
            { angle: 180, delay: 1.6 },   // Left
          ].map((line, i) => {
            const centerRadius = 36; // Half of inner circle (72px / 2)
            const iconRadius = 150; // Distance to icon center (matches icon positioning)
            const angleRad = (line.angle * Math.PI) / 180;
            
            // Start from edge of center circle
            const startX = 200 + Math.cos(angleRad) * centerRadius;
            const startY = 200 + Math.sin(angleRad) * centerRadius;
            
            // End at edge of icon circle (icon is 80px, so 40px radius)
            const endX = 200 + Math.cos(angleRad) * (iconRadius - 40);
            const endY = 200 + Math.sin(angleRad) * (iconRadius - 40);

            return (
              <motion.line
                key={i}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{
                  duration: 2,
                  delay: line.delay,
                  ease: "easeInOut",
                }}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="8,4"
              />
            );
          })}
        </svg>

        {/* Orbiting Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const radius = 140;
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  x: [
                    Math.cos((angle * Math.PI) / 180) * radius,
                    Math.cos(((angle + 360) * Math.PI) / 180) * radius,
                  ],
                  y: [
                    Math.sin((angle * Math.PI) / 180) * radius,
                    Math.sin(((angle + 360) * Math.PI) / 180) * radius,
                  ],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

