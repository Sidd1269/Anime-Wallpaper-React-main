import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Page1Content = () => {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-neon-purple/30 blur-3xl" aria-hidden />
      <div className="absolute -bottom-10 right-10 h-64 w-64 rounded-full bg-neon-pink/30 blur-3xl" aria-hidden />
      <div className="absolute inset-0 bg-anime-grid opacity-50" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-16 lg:flex-row lg:items-center">
        <LeftContent />
        <RightContent />
      </div>
    </section>
  );
};

export default Page1Content;