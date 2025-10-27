import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <Sparkles size={16} /> Connect. Share. Learn.
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              CampusConnect for Book and Knowledge Exchange
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl">
              Find or request textbooks, offer tutoring, chat in real-time, and rate your experiences — all in one place for your campus community.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#books" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                Explore Books <ArrowRight size={18} />
              </a>
              <a href="#tutoring" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors">
                Offer Tutoring
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-200/50 via-purple-200/40 to-pink-200/40 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-gray-200 bg-white shadow-xl p-6">
              <div className="grid grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-gray-200 flex items-center justify-center text-sm text-gray-700">
                    Campus #{i}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl bg-gray-50 border border-gray-200 p-4">
                <p className="text-sm text-gray-600">
                  Tip: Use your college email to verify your account and unlock the full experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
