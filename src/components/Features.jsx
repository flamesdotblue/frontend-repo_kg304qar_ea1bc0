import React from 'react';
import { Book, GraduationCap, MessageCircle, Star, ShieldCheck, Upload } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: 'Post and Request Books',
    desc: 'List textbooks you want to sell or lend, or request specific titles from peers.',
  },
  {
    icon: Upload,
    title: 'Image Uploads',
    desc: 'Add clear photos with your listings for faster matches and better trust.',
  },
  {
    icon: GraduationCap,
    title: 'Tutoring Sessions',
    desc: 'Offer or request subject-specific help with flexible schedules.',
  },
  {
    icon: MessageCircle,
    title: 'Real-time Chat',
    desc: 'Chat instantly to coordinate meetups and clarify details with Socket-like UX.',
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    desc: 'Rate books and tutors after each exchange to build a trusted campus network.',
  },
  {
    icon: ShieldCheck,
    title: 'College Email Login',
    desc: 'Sign up with your college email to keep the community verified and safe.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to exchange knowledge</h2>
          <p className="mt-4 text-lg text-gray-600">Built for students, by students — simple, fast, and safe.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
              <div className="mt-4 text-sm font-medium text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
