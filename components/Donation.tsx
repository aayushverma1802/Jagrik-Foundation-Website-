"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, CreditCard, Lock, Check } from "lucide-react";

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleDonate = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (amount && amount > 0) {
      // In production, this would integrate with a payment gateway like Stripe
      alert(`Thank you! You're donating $${amount}${isMonthly ? " monthly" : ""}. Payment integration would be implemented here.`);
    }
  };

  return (
    <section
      id="donate"
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Make a Donation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your contribution helps us train therapy dogs and support mental
            health initiatives. Every dollar makes a difference.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
        >
          {/* Monthly/One-time Toggle */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  !isMonthly
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-600"
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  isMonthly
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Preset Amounts */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              Select Amount
            </label>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
              {presetAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`p-4 rounded-xl font-semibold text-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? "border-primary-600 bg-primary-50 text-primary-600"
                      : "border-gray-200 text-gray-700 hover:border-primary-300"
                  }`}
                >
                  ${amount}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Or Enter Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl font-semibold">
                $
              </span>
              <input
                type="number"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                }}
                placeholder="0.00"
                className="w-full pl-10 pr-4 py-4 border-2 border-gray-200 rounded-xl text-xl font-semibold focus:border-primary-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Donation Impact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: selectedAmount || parseFloat(customAmount) ? 1 : 0,
            }}
            className="mb-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl"
          >
            <div className="flex items-center space-x-3 mb-2">
              <Check className="w-5 h-5 text-primary-600" />
              <span className="font-semibold text-gray-900">Your Impact:</span>
            </div>
            <p className="text-gray-700 ml-8">
              ${selectedAmount || customAmount || 0} can{" "}
              {selectedAmount && selectedAmount >= 100
                ? "train a therapy dog for a week"
                : selectedAmount && selectedAmount >= 50
                ? "provide mental health support for 5 people"
                : "provide essential supplies for therapy sessions"}
            </p>
          </motion.div>

          {/* Security Badge */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-gray-600">
            <Lock className="w-4 h-4" />
            <span className="text-sm">Secure payment processing</span>
          </div>

          {/* Donate Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDonate}
            disabled={!selectedAmount && !parseFloat(customAmount)}
            className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <Heart className="w-5 h-5" fill="currentColor" />
            <span>
              Donate ${selectedAmount || customAmount || "0.00"}
              {isMonthly ? " Monthly" : " Now"}
            </span>
          </motion.button>

          {/* Payment Methods */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              We accept all major payment methods
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                Credit Card
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                PayPal
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">
                Bank Transfer
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          {[
            { icon: Lock, text: "100% Secure" },
            { icon: Check, text: "Tax Deductible" },
            { icon: Heart, text: "Transparent Impact" },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md"
              >
                <Icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">{item.text}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

