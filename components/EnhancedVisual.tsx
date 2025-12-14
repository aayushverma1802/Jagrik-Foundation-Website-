"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, TrendingUp, Award, Target } from "lucide-react";

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
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >


      {/* Main Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* Central Heart with Enhanced Effects */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative z-10"
        >
          {/* Main Heart Circle - Simple, No Color Effects - Responsive */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center"
          >
            {/* Heart Icon with Enhanced Animation */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Heart className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-white" fill="currentColor" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Four Icons with Enhanced Styling - On Top of Heart */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Top Icon - Users - On Top of Heart */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            className="absolute pointer-events-auto z-30"
            style={{ 
              top: "calc(50% - clamp(100px, 12vw, 220px))", 
              left: "50%", 
              transform: "translateX(-50%)" 
            }}
            whileHover={{ scale: 1.15, y: -5 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
              className="bg-white rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg border-2 border-gray-200 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors" />
            </motion.div>
          </motion.div>

          {/* Right Icon - TrendingUp - On Top of Heart */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: 50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
            className="absolute pointer-events-auto z-30"
            style={{ 
              top: "50%", 
              right: "calc(50% - clamp(100px, 12vw, 220px))", 
              transform: "translateY(-50%)" 
            }}
            whileHover={{ scale: 1.15, x: 5 }}
          >
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="bg-white rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg border-2 border-gray-200 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors" />
            </motion.div>
          </motion.div>

          {/* Bottom Icon - Award - On Top of Heart */}
          <motion.div
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="absolute pointer-events-auto z-30"
            style={{ 
              bottom: "calc(50% - clamp(100px, 12vw, 220px))", 
              left: "50%", 
              transform: "translateX(-50%)" 
            }}
            whileHover={{ scale: 1.15, y: 5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="bg-white rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg border-2 border-gray-200 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors" />
            </motion.div>
          </motion.div>

          {/* Left Icon - Target - On Top of Heart */}
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -50 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
            className="absolute pointer-events-auto z-30"
            style={{ 
              top: "50%", 
              left: "calc(50% - clamp(100px, 12vw, 220px))", 
              transform: "translateY(-50%)" 
            }}
            whileHover={{ scale: 1.15, x: -5 }}
          >
            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="bg-white rounded-full p-2 sm:p-3 md:p-4 lg:p-5 shadow-lg border-2 border-gray-200 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 flex items-center justify-center cursor-pointer relative overflow-hidden group"
            >
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-gray-600 relative z-10 group-hover:text-gray-700 transition-colors" />
            </motion.div>
          </motion.div>
        </div>

        {/* Simple Connecting Lines - Hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden sm:block" style={{ zIndex: 1 }}>
          {[
            { from: { x: "50%", y: "calc(50% - clamp(100px, 12vw, 220px))" }, to: { x: "50%", y: "50%" }, delay: 1.5 },
            { from: { x: "calc(50% + clamp(100px, 12vw, 220px))", y: "50%" }, to: { x: "50%", y: "50%" }, delay: 1.7 },
            { from: { x: "50%", y: "calc(50% + clamp(100px, 12vw, 220px))" }, to: { x: "50%", y: "50%" }, delay: 1.9 },
            { from: { x: "calc(50% - clamp(100px, 12vw, 220px))", y: "50%" }, to: { x: "50%", y: "50%" }, delay: 2.1 },
          ].map((line, i) => (
            <motion.g key={i}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.2 }}
                transition={{ duration: 1.5, delay: line.delay, ease: "easeOut" }}
                x1={line.from.x}
                y1={line.from.y}
                x2={line.to.x}
                y2={line.to.y}
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="8,4"
              />
            </motion.g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
}
