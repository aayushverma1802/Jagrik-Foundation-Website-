"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Impact from "@/components/Impact";
import Donation from "@/components/Donation";
import Stories from "@/components/Stories";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth initial render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navigation />
      <Hero />
      <About />
      <Impact />
      <Donation />
      <Stories />
      <Footer />
    </main>
  );
}

