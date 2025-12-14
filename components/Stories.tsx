"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Stories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      name: "Sarah Johnson",
      role: "Program Participant",
      image: "👩",
      quote:
        "The support I've received through Jagrik Foundation has completely transformed my life. As someone struggling with anxiety and depression, the programs have given me a reason to get up every morning. The impact is incredible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Mental Health Advocate",
      image: "👨",
      quote:
        "I've seen firsthand how Jagrik Foundation helps people in crisis. The programs are exceptional, and the impact on mental health outcomes is remarkable. This organization is truly making a difference.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Program Volunteer",
      image: "👩",
      quote:
        "Volunteering with Jagrik Foundation has been one of the most rewarding experiences of my life. Watching the positive impact on people's lives is truly heartwarming. Every donation makes this possible.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Community Partner",
      image: "👨",
      quote:
        "I've been part of this program for two years. The support and resources we received were outstanding. We've helped dozens of people, and I'm grateful to be part of such an impactful organization.",
      rating: 5,
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section
      id="stories"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Stories, Real Impact
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from the people whose lives have been changed through our
            programs.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="text-4xl sm:text-5xl md:text-6xl flex-shrink-0">
                  {stories[currentIndex].image}
                </div>
                <div className="flex-1">
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-600 mb-3 sm:mb-4" />
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 italic px-2 sm:px-0">
                    &ldquo;{stories[currentIndex].quote}&rdquo;
                  </p>
                  <div className="flex items-center space-x-2 mb-4">
                    {[...Array(stories[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-base sm:text-lg">
                      {stories[currentIndex].name}
                    </div>
                    <div className="text-sm sm:text-base text-gray-600">
                      {stories[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevStory}
            className="absolute left-0 sm:-left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          <button
            onClick={nextStory}
            className="absolute right-0 sm:-right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all z-10"
            aria-label="Next story"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {[
            {
              stat: "98%",
              label: "Satisfaction Rate",
              description: "of participants report positive outcomes",
            },
            {
              stat: "4.9/5",
              label: "Average Rating",
              description: "from program participants and volunteers",
            },
            {
              stat: "500+",
              label: "Success Stories",
              description: "documented cases of improved mental health",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {item.stat}
              </div>
              <div className="font-semibold text-gray-900 mb-2">
                {item.label}
              </div>
              <div className="text-sm text-gray-600">{item.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

