import { TESTIMONIALS } from "@/lib/constants";
import { Star } from "lucide-react";
import Image from "next/image.js";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
            What Clients Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Feedback from satisfied clients and collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-slate-50 dark:bg-slate-800/50 p-8 rounded-xl border border-slate-100 dark:border-slate-700 flex flex-col transition-colors"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  width={100}
                  height={100}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-white dark:border-slate-700 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300 dark:text-slate-600"}`}
                  />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed mb-6 flex-1 font-light">
                {testimonial.content}
              </p>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/40 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-[10px] font-bold">
                  AC
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-slate-300">
                  Alex Chen verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
