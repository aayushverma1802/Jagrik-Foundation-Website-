"use client";

import { motion } from "framer-motion";
import { Heart, Users, Target, Award } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Mental Health Programs",
      description:
        "We develop and implement comprehensive mental health programs that provide emotional support and companionship to individuals struggling with mental health challenges.",
      color: "text-primary-600",
      bgColor: "bg-primary-100",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Our programs connect people with resources and support networks, creating lasting connections that improve mental well-being and quality of life.",
      color: "text-accent-600",
      bgColor: "bg-accent-100",
    },
    {
      icon: Target,
      title: "Mental Health Initiatives",
      description:
        "We fund research and programs that explore the therapeutic benefits of human-animal interactions for mental health treatment.",
      color: "text-primary-600",
      bgColor: "bg-primary-100",
    },
    {
      icon: Award,
      title: "Proven Impact",
      description:
        "Our evidence-based approach has helped thousands of individuals find comfort, reduce anxiety, and improve their mental health outcomes.",
      color: "text-accent-600",
      bgColor: "bg-accent-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            At Jagrik Foundation, we believe in the transformative power of
            community support and compassion. Our mission is to support mental
            health through innovative programs, research, and community initiatives
            that bring comfort, healing, and hope to those in need.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                {/* Hover gradient effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <motion.div
                  className={`${feature.bgColor} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${feature.color}`} />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why We Do What We Do
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mental health challenges affect millions of people worldwide.
                Research has consistently shown that therapy dogs can provide
                significant emotional support, reduce anxiety and depression,
                and improve overall well-being.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through your generous donations, we&apos;re able to expand our
                programs, support mental health research, and bring hope to
                those who need it most. Every contribution makes a real
                difference in someone&apos;s life.
              </p>
            </div>
            <div className="relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <div className="text-6xl font-bold text-primary-600 mb-2">
                  95%
                </div>
                <div className="text-xl text-gray-700 mb-4">
                  of participants report improved mental well-being
                </div>
                <div className="text-sm text-gray-500">
                  Based on our 2023 program evaluation
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

