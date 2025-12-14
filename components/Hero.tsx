"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Heart, Shield } from "lucide-react";
import EnhancedVisual from "./EnhancedVisual";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight overflow-visible"
            >
              Supporting{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 inline-block"
              >
                Mental Health
              </motion.span>{" "}
              &{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-primary-600 inline-block pb-1"
                style={{ lineHeight: "1.2", paddingBottom: "0.25rem" }}
              >
                Community
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0"
            >
              Join us in creating a world where compassion and support bring comfort,
              companionship, and healing to those in need. Your donation helps
              fund programs and support mental health initiatives that transform lives.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-primary-700 transition-all flex items-center justify-center space-x-2 relative overflow-hidden group w-full sm:w-auto"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                <span className="relative z-10">Donate Now</span>
                <motion.div
                  className="relative z-10"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Heart className="w-5 h-5" fill="currentColor" />
                </motion.div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2 w-full sm:w-auto"
              >
                <Shield className="w-5 h-5" />
                <span>Learn More</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 sm:mt-12 flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8 flex-wrap gap-4 sm:gap-0"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">10K+</div>
                <div className="text-sm text-gray-600">Lives Changed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">$2M+</div>
                <div className="text-sm text-gray-600">Raised</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Enhanced Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[550px] mt-4 sm:mt-8 lg:mt-8 mb-16 sm:mb-0"
          >
            <EnhancedVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-600"
        >
          <span className="text-xs sm:text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

