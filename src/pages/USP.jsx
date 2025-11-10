import React from "react";

export default function USP() {
  return (
    <section className="relative h-[100vh] bg-yellow-400 flex items-center justify-center overflow-hidden">
      {/* Parallax-like fixed background */}
      <div
        className="absolute inset-0 bg-yellow-400 bg-fixed"
        style={{
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-black text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Cabin_Sketch'] font-bold drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
          Why We’re Different
        </h2>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold max-w-2xl mx-auto leading-relaxed">
          At Rowdy Café, chaos meets creativity.  
          Every sip, every bite, every vibe — crafted to break the rules.
        </p>
      </div>
    </section>
  );
}
