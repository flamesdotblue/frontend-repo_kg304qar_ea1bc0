import React from 'react';
import { Book, MessageCircle, GraduationCap, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">CC</div>
            <span className="text-xl font-semibold tracking-tight">CampusConnect</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#books" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <Book size={18} /> Books
            </a>
            <a href="#tutoring" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <GraduationCap size={18} /> Tutoring
            </a>
            <a href="#chat" className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
              <MessageCircle size={18} /> Chat
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors">
              <LogIn size={18} /> Login
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <UserPlus size={18} /> Register
            </button>
          </div>

          {/* Mobile simplified */}
          <div className="md:hidden">
            <a href="#chat" className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-indigo-600 text-white">
              <MessageCircle size={18} /> Start Chat
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
