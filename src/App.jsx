import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <section id="cta" className="py-16 sm:py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-indigo-200/60 bg-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 bg-indigo-200/40 blur-3xl rounded-full" />
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-bold">Ready to connect with your campus?</h3>
                <p className="mt-3 text-gray-600 max-w-2xl">Sign in with your college email to start posting books, requesting tutoring, and chatting in real-time.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#login" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">Login</a>
                  <a href="#register" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors">Create account</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
