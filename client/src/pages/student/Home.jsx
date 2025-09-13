import React from "react";
import Hero from "../../components/student/Hero";
import Companies from "../../components/student/Companies";
import CoursesSection from "../../components/student/CoursesSection";
import TestimonialsSection from "../../components/student/TestimonialsSection";
import CallToAction from "../../components/student/CallToAction";
import Footer from "../../components/student/Footer";

const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-7 text-center animate-fade-in">
      <div className="transform hover:scale-105 transition-transform duration-500">
        <Hero />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-500">
        <Companies />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-500">
        <CoursesSection />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-500">
        <TestimonialsSection />
      </div>
      <div className="transform hover:scale-105 transition-transform duration-500">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
