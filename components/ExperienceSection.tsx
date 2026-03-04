import { Briefcase } from "lucide-react";
import type { Experience } from "@/types";

const experiences: Experience[] = [
  {
    company: "F5 Web Solutions",
    role: "Full Stack Developer",
    type : "Full-Time",
    period: "Jun 2024 - Jan 2025",
    location: "Calgary, Alberta",
    achievements: [
     
      "Improved data accuracy and reduced client follow-up calls by 40% through dynamic form and upload features built with React and Node.js.",
      "Enhanced platform security by implementing role-based access controls, reducing unauthorized access incidents by 90%.",
      "Optimized backend performance by refactoring MongoDB queries and introducing caching, cutting page load time from 5s to 2s.",
      "Lowered hosting costs by 20% through reduced server CPU and memory usage via backend API improvements.",
      "Reduced client onboarding time by 50% by digitizing intake forms and automating document collection workflows."
    ],
    tags: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "AWS",
      "Git"
    ]
  },
  {
    company: "SalezShark India ",
    role: "Full Stack Developer",
    type: "Full-Time",
    period: "Jan 2022 - April 2024",
    location: "Greater Noida, Uttar Pradesh, India",
    achievements: [
     
      "Developed modules for a cloud-based CRM platform used by thousands of sales and marketing professionals.",
      "Integrated RESTful APIs using Node.js and Spring Boot, reducing latency by 30% and improving real-time data sync.",
      "Strengthened platform security with JWT-based login and role-based access, cutting unauthorized access incidents by 95%.",
      "Accelerated deployment cycles by 50% by streamlining CI/CD pipelines in collaboration with QA and DevOps teams.",
      "Resolved critical bugs (Axios, CORS, routing), improving system stability and reducing support tickets by 25%."
    ],
    tags: [
      "React",
      "Node.js",
      "Spring Boot",
      "Express.js",
      "MongoDB",
      "JWT",
      "Git",
      "Docker",
      "Aws",
      "CI/CD"
    ]
  },
  
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-2">
            Professional Experience
          </h2>
          <p className="text-slate-400">
            Building production-grade software across startups, industry, and research-driven teams.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-0">
              {/* Timeline Connector */}
              <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-px bg-slate-800 -ml-[1px]" />

              <div className="group relative sm:ml-12 bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all">
                {/* Timeline Dot */}
                <div className="hidden sm:flex absolute -left-[65px] top-8 w-6 h-6 rounded-full bg-slate-900 border-2 border-accent-400 items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
                  <div className="w-2 h-2 rounded-full bg-accent-400" />
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-accent-400" />
                      {exp.company}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium mt-1">
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-left sm:text-right mt-2 sm:mt-0">
                    <p className="text-sm font-mono text-slate-400">
                      {exp.period}
                    </p>
                    <p className="text-sm text-slate-500">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-400 leading-relaxed"
                    >
                      <span className="mr-3 text-accent-400 mt-1.5 text-xs">
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/50">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-slate-500 px-2 py-1 bg-slate-900 rounded hover:text-slate-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
