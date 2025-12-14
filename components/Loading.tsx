"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="mb-4"
        >
          <Heart className="w-16 h-16 text-primary-600" fill="currentColor" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 font-semibold"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
}

