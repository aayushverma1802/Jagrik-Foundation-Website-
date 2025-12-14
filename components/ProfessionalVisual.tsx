"use client";

import { motion } from "framer-motion";
import { Heart, Users, TrendingUp, Sparkles } from "lucide-react";

export default function ProfessionalVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-primary-600" />
        </svg>
      </div>

      {/* Central Icon Composition */}
      <div className="relative z-10">
        {/* Main Circle with Gradient */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 mx-auto"
        >
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-primary-200"
          />
          
          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border-2 border-primary-300"
          />
          
          {/* Inner Circle with Gradient */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl">
            <Heart className="w-16 h-16 text-white" fill="currentColor" />
          </div>
        </motion.div>

        {/* Floating Icons Around */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Top Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-primary-100">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
          </motion.div>

          {/* Right Icon */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-primary-100">
              <TrendingUp className="w-8 h-8 text-primary-600" />
            </div>
          </motion.div>

          {/* Bottom Icon */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
          >
            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-primary-100">
              <Sparkles className="w-8 h-8 text-primary-600" />
            </div>
          </motion.div>

          {/* Left Icon */}
          <motion.div
            animate={{ x: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <div className="bg-white rounded-full p-4 shadow-lg border-2 border-primary-100">
              <Heart className="w-8 h-8 text-primary-600" fill="currentColor" />
            </div>
          </motion.div>
        </motion.div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            x1="50%"
            y1="0%"
            x2="50%"
            y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            x1="100%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
            x1="50%"
            y1="100%"
            x2="50%"
            y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
          <motion.line
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.6 }}
            x1="0%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Subtle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

