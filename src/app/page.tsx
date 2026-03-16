"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const skillGroups = [
  {
    title: "Backend Core",
    items: [
      { name: "Python", level: 90 },
      { name: "Django", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Django REST Framework", level: 85 },
      { name: "REST APIs", level: 90 },
      { name: "Microservices", level: 80 },
    ],
  },
  {
    title: "Data & Storage",
    items: [
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "SQL", level: 75 },
      { name: "Pandas", level: 65 },
    ],
  },
  {
    title: "Infra & Tools",
    items: [
      { name: "Docker", level: 70 },
      { name: "Celery / Redis", level: 70 },
      { name: "Git / GitHub", level: 85 },
      { name: "Tortoise ORM", level: 65 },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      { name: "Rasa", level: 60 },
      { name: "LangChain", level: 65 },
      { name: "Langfuse", level: 60 },
      { name: "NLP", level: 60 },
      { name: "Automation Systems", level: 70 },
      { name: "JavaScript", level: 65 },
    ],
  },
];

const education = [
  {
    level: "SLC (Class 10)",
    school: "Shree Siddhakali English Boarding School",
    location: "Bhojpur Bazar, Bhojpur",
    year: "Completed 2016",
  },
  {
    level: "+2 (Class 12)",
    school: "Nobel Academy",
    location: "New Baneshwor, Kathmandu",
    year: "Completed 2018",
  },
  {
    level: "Bachelor Degree",
    school: "University of Wolverhampton (Herald College)",
    location: "Naxal, Kathmandu",
    year: "Completed 2021",
  },
];

const experience = [
  {
    company: "Hazesoft Pvt. Ltd",
    location: "Sankhamul, Nepal",
    period: "Jan 2023 - Present",
    role: "Python Backend Developer - Backend Infrastructure & Microservices",
    highlights: [
      "Develop scalable REST APIs using Django and FastAPI.",
      "Build backend systems for international insurance platforms (Jordan, Iraq, UK).",
      "Design microservices and reusable backend packages.",
      "Integrate OCR APIs and external services.",
      "Implement background processing, schedulers, and automation pipelines.",
      "Research AI chatbot systems using Rasa and LangChain.",
    ],
  },
  {
    company: "InfoDevelopers Pvt. Ltd",
    location: "Lalitpur, Nepal",
    period: "Jan 2022 - Mar 2022",
    role: "Python Developer (Winter Intake Code Camp)",
    highlights: [
      "Learned Django, DRF, HTML, CSS, Bootstrap, and AJAX.",
      "Built Inventory Management, Blog, and Online Book Store apps.",
    ],
  },
];

const projects = [
  {
    name: "Salamtak",
    region: "Iraq",
    description:
      "Worked on backend systems and API development for healthcare-related services. Designed REST APIs to support application features and handled backend logic integration.",
    responsibilities: [
      "Developed REST API endpoints",
      "Backend service implementation",
      "Data handling and integrations",
      "Built reusable microservices to support backend functionality",
      "Implemented and integrated an OCR API for document data extraction",
    ],
    tech: ["Python", "Django", "REST APIs", "Microservices", "OCR APIs", "PostgreSQL"],
    functionSnippet: {
      functionName: "project_salamtak",
      country: "Iraq",
      role: "Backend Developer",
      stack: ["Python", "Django", "REST APIs"],
      returns: "Healthcare platform backend system",
    },
  },
  {
    name: "Sehaty",
    region: "Jordan",
    description:
      "Backend development for healthcare platform focusing on scalable API endpoints and backend services.",
    responsibilities: [
      "Designed API endpoints",
      "Implemented business logic",
      "Integrated backend services",
      "Built dynamic serializers for flexible data structures",
      "Customized and extended the admin panel for platform workflows",
      "Developed a centralized notification service",
      "Implemented microservices for scalable backend architecture",
    ],
    tech: [
      "Python",
      "Django",
      "DRF",
      "Dynamic Serializers",
      "Admin Customization",
      "Notifications",
      "Microservices",
      "Celery",
    ],
    functionSnippet: {
      functionName: "project_sehaty",
      country: "Jordan",
      role: "Backend Developer",
      stack: ["Python", "Django", "DRF", "Celery"],
      returns: "Scalable healthcare API platform",
    },
  },
  {
    name: "Commsure",
    region: "United Kingdom",
    description:
      "Worked on backend API development and integrations for enterprise systems.",
    responsibilities: [
      "Built scalable backend APIs",
      "Data processing and backend logic",
      "System integrations",
      "Developed complex property insurance calculations with multiple rate factors",
      "Implemented RabbitMQ messaging to integrate third-party services",
    ],
    tech: [
      "Python",
      "FastAPI",
      "Django",
      "APIs",
      "Insurance Rating",
      "RabbitMQ",
    ],
    functionSnippet: {
      functionName: "project_commsure",
      country: "United Kingdom",
      role: "Backend Developer",
      stack: ["Python", "FastAPI", "Django"],
      returns: "Enterprise integrations backbone",
    },
  },
];

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.4em] text-slate-400 font-jetbrains">
        {label}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-100">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const sections = [
    "hero",
    "about",
    "education",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev >= sections.length) return prev;
        return prev + 1;
      });
    }, 260);

    const finishTimer = setTimeout(() => {
      setShowIntro(false);
      clearInterval(stepTimer);
    }, 2400);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          address: formData.get("address"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      form.reset();
      setFormStatus("success");
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f172a] text-[#e2e8f0]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_45%),_radial-gradient(circle_at_80%_20%,_rgba(34,197,94,0.15),_transparent_40%),_radial-gradient(circle_at_50%_85%,_rgba(15,23,42,0.9),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:140px_140px] opacity-30" />

      {showIntro ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[#0f172a]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
        >
          <motion.div
            className="w-[90%] max-w-xl rounded-2xl border border-slate-700/70 bg-[#111827] px-6 py-6 shadow-[0_24px_70px_rgba(2,6,23,0.7)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
              <span>terminal</span>
              <span className="text-emerald-400">pip install portfolio</span>
            </div>
            <div className="mt-4 rounded-xl border border-slate-700/70 bg-[#0f172a] p-4 font-jetbrains text-sm text-slate-200">
              <p className="text-slate-400">$ pip install ajaya-portfolio</p>
              <p className="text-slate-400">Collecting components...</p>
              <div className="mt-3 space-y-1">
                {sections.map((section, index) => {
                  const isDone = index < loadingStep;
                  const isActive = index === loadingStep;
                  return (
                    <p key={section} className="flex items-center gap-2">
                      <span className="text-emerald-400">
                        {isDone ? "✔" : isActive ? "➜" : "•"}
                      </span>
                      <span className={isDone ? "text-slate-200" : "text-slate-400"}>
                        {isDone ? "Installing" : "Queued"} {section}...
                      </span>
                    </p>
                  );
                })}
              </div>
              <p className="mt-3 text-slate-400">
                Building wheel for ajaya-portfolio... done
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      <header className="relative z-10 flex items-center justify-between px-6 pt-8 lg:px-16">
        <div className="flex items-center gap-4">
          <div className="font-jetbrains text-xs uppercase tracking-[0.45em] text-slate-300">
            ajaya.py
          </div>
          <div className="hidden h-6 w-px bg-slate-700/70 sm:block" />
          <div className="hidden items-center gap-3 rounded-full border border-slate-700/60 bg-[#111827] px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 font-jetbrains sm:flex">
            <span>🇳🇵</span>
            <span>Nepal</span>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-slate-400 lg:flex font-jetbrains">
          {[
            "hero",
            "about",
            "education",
            "skills",
            "experience",
            "projects",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="transition hover:text-white"
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="relative px-6 pb-24 pt-16 lg:px-16" id="hero">
        <motion.div
          className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1fr_1fr]"
          {...fadeUp}
        >
          <div className="space-y-6">
            <a
              href="/ajaya.jpeg"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex"
              aria-label="Open full profile image"
              title="Open full image"
            >
              <img
                src="/ajaya.jpeg"
                alt="Ajaya Karki avatar"
                className="h-80 w-80 rounded-full border border-slate-600/70 object-cover shadow-[0_18px_40px_rgba(15,23,42,0.55)] transition group-hover:scale-[1.02] group-hover:border-sky-400/70"
              />
            </a>
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/60 bg-[#1e293b] px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 font-jetbrains">
              Python Backend Developer
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-100 md:text-6xl">
              Ajaya Karki
              <span className="block text-sky-400">
                Backend systems, API architecture, automation
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300">
              Building scalable backend services with clean, maintainable Python
              systems. Focused on API reliability, data pipelines, and developer
              friendly infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f172a] shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:shadow-sky-500/40"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-600/70 bg-[#1e293b] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-sky-400/60 hover:text-white"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-700/70 bg-[#1e293b] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.55)]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                <span>introduce.py</span>
                <span className="text-emerald-400">running</span>
              </div>
              <pre className="mt-5 whitespace-pre-wrap text-sm text-slate-200 font-jetbrains leading-relaxed">
                <span className="text-emerald-400">def</span> introduce():
                {"\n"}    name = <span className="text-sky-300">"Ajaya Karki"</span>
                {"\n"}    role = <span className="text-sky-300">"Python Backend Developer"</span>
                {"\n"}    location = <span className="text-sky-300">"Nepal"</span>
                {"\n"}    focus = [
                {"\n"}        <span className="text-sky-300">"API Development"</span>,
                {"\n"}        <span className="text-sky-300">"Backend Systems"</span>,
                {"\n"}        <span className="text-sky-300">"Automation"</span>,
                {"\n"}    ]
                {"\n"}    stack = [<span className="text-sky-300">"Django"</span>, <span className="text-sky-300">"FastAPI"</span>, <span className="text-sky-300">"PostgreSQL"</span>]
                {"\n"}    motto = <span className="text-sky-300">"Ship reliable systems"</span>
                {"\n"}
                {"\n"}    <span className="text-emerald-400">return</span>{" "}
                <span className="text-slate-200">
                  f"Hi, I&apos;m {"{name}"}, a {"{role}"} specializing in scalable backend
                  systems."
                </span>
              </pre>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-[#111827] p-6 font-jetbrains text-sm shadow-[0_20px_60px_rgba(2,6,23,0.5)]">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                backend_portfolio/
              </p>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>├── hero/</li>
                <li>│   └── introduce.py</li>
                <li>├── about/</li>
                <li>├── education/</li>
                <li>├── skills/</li>
                <li>├── projects/</li>
                <li>├── experience/</li>
                <li>├── contact/</li>
                <li>└── README.md</li>
              </ul>
              <p className="mt-4 text-xs text-emerald-400">
                ✔ clean developer portfolio layout
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="about">
        <motion.div className="mx-auto max-w-5xl" {...fadeUp}>
          <SectionHeading label="About Me" title="Backend developer for scalable systems" />
          <p className="mt-6 text-base leading-relaxed text-slate-300">
            I&apos;m a backend-focused Python developer specializing in building APIs
            and scalable backend systems using Django, FastAPI and modern backend
            technologies.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            I enjoy designing clean API architectures, optimizing data pipelines,
            and building systems that power real-world applications.
          </p>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="education">
        <motion.div className="mx-auto max-w-6xl" {...fadeUp}>
          <SectionHeading label="Education" title="Academic checkpoints" />
          <div className="mt-10 rounded-2xl border border-slate-700/70 bg-[#111827] p-6 font-jetbrains text-sm shadow-[0_16px_50px_rgba(2,6,23,0.45)]">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
              <span>education.py</span>
              <span className="text-emerald-400">validated</span>
            </div>
            <pre className="mt-5 whitespace-pre-wrap text-sm text-slate-200 leading-relaxed">
              <span className="text-emerald-400">education</span> = [
              {education.map((item, index) => (
                <span key={item.level}>
                  {"\n"}    {"{"}
                  {"\n"}        <span className="text-sky-300">"level"</span>:{" "}
                  <span className="text-slate-200">"{item.level}"</span>,
                  {"\n"}        <span className="text-sky-300">"school"</span>:{" "}
                  <span className="text-slate-200">"{item.school}"</span>,
                  {"\n"}        <span className="text-sky-300">"location"</span>:{" "}
                  <span className="text-slate-200">"{item.location}"</span>,
                  {"\n"}        <span className="text-sky-300">"year"</span>:{" "}
                  <span className="text-slate-200">"{item.year}"</span>
                  {"\n"}    {"}"}
                  {index < education.length - 1 ? "," : ""}
                </span>
              ))}
              {"\n"}]
            </pre>
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="skills">
        <motion.div className="mx-auto max-w-6xl" {...fadeUp}>
          <SectionHeading label="Skills" title="Backend toolkit strength" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-700/70 bg-[#111827] p-6 shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                  <span>skills.py</span>
                  <span className="text-emerald-400">{group.title}</span>
                </div>
                <pre className="mt-5 whitespace-pre-wrap text-sm text-slate-200 font-jetbrains leading-relaxed">
                  <span className="text-emerald-400">
                    {group.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}
                  </span>{" "}
                  = {"{"}
                </pre>
                <div className="mt-2 grid gap-4">
                  {group.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between text-sm font-jetbrains text-slate-200">
                        <span>
                          <span className="text-sky-300">"{skill.name}"</span>:{" "}
                          <span className="text-slate-200">{skill.level}</span>
                        </span>
                        <span className="text-slate-500">%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#0f172a]">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-sky-400 via-sky-300 to-emerald-400 shadow-[0_0_12px_rgba(56,189,248,0.55)]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.1, ease: "easeOut" }}
                          viewport={{ once: true, amount: 0.6 }}
                          role="progressbar"
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-valuenow={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <pre className="mt-5 text-sm text-slate-200 font-jetbrains leading-relaxed">
                  {"}"}
                </pre>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="experience">
        <motion.div className="mx-auto max-w-6xl" {...fadeUp}>
          <SectionHeading label="Experience" title="Delivery timeline" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {experience.map((item) => (
              <div
                key={item.company}
                className="rounded-2xl border border-slate-700/70 bg-[#1e293b] p-6 shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-100">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {item.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-600/70 bg-[#0f172a] px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-400 font-jetbrains">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400 font-jetbrains">
                  {item.role}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="projects">
        <motion.div className="mx-auto max-w-6xl" {...fadeUp}>
          <SectionHeading label="Experience / Projects" title="Backend impact highlights" />
          <div className="mt-6 rounded-2xl border border-slate-700/70 bg-[#111827] p-6 font-jetbrains text-sm text-slate-200 shadow-[0_16px_50px_rgba(2,6,23,0.45)]">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Projects Delivered For
            </p>
            <ul className="mt-4 space-y-2">
              <li>🇮🇶 Iraq — Salamtak</li>
              <li>🇯🇴 Jordan — Sehaty</li>
              <li>🇬🇧 United Kingdom — Commsure</li>
            </ul>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group rounded-2xl border border-slate-700/70 bg-[#1e293b] p-6 shadow-[0_16px_50px_rgba(2,6,23,0.45)] transition hover:-translate-y-1 hover:border-sky-400/60 hover:shadow-sky-500/20"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                  <span>{project.region}</span>
                  <span className="text-emerald-400">{project.name}</span>
                </div>
                <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-emerald-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-600/70 bg-[#0f172a] px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300 font-jetbrains"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative px-6 py-20 lg:px-16" id="contact">
        <motion.div className="mx-auto max-w-6xl" {...fadeUp}>
          <SectionHeading label="Contact" title="Let’s build the next system" />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-700/70 bg-[#111827] p-6 font-jetbrains shadow-[0_16px_50px_rgba(2,6,23,0.45)]">
              <p className="text-emerald-400">$ contact --developer Ajaya</p>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:ajaya.carkey890@gmail.com"
                    className="text-sky-300 hover:text-sky-200"
                  >
                    ajaya.carkey890@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a href="tel:9862192243" className="text-sky-300 hover:text-sky-200">
                    9862192243
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Ajayakarki"
                    className="text-sky-300 hover:text-sky-200"
                  >
                    github.com/Ajayakarki
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://linkedin.com/in/ajaya-karki-a463b8214"
                    className="text-sky-300 hover:text-sky-200"
                  >
                    linkedin.com/in/ajaya-karki-a463b8214
                  </a>
                </p>
              </div>
              <div className="mt-6 rounded-xl border border-slate-700/70 bg-[#0f172a] p-4 text-xs text-slate-400">
                Response time: <span className="text-emerald-400">&lt; 24 hours</span>
              </div>
            </div>

            <form
              className="rounded-2xl border border-slate-700/70 bg-[#1e293b] p-6 shadow-[0_16px_50px_rgba(2,6,23,0.45)]"
              onSubmit={handleContactSubmit}
            >
              <div className="grid gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-lg border border-slate-700/70 bg-[#0f172a] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-lg border border-slate-700/70 bg-[#0f172a] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Your address"
                    className="mt-2 w-full rounded-lg border border-slate-700/70 bg-[#0f172a] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400 font-jetbrains">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell me about your project"
                    className="mt-2 w-full rounded-lg border border-slate-700/70 bg-[#0f172a] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-emerald-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0f172a] shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:shadow-emerald-500/40"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {formStatus === "success" ? (
                  <p className="text-xs text-emerald-400 font-jetbrains">
                    Message sent successfully.
                  </p>
                ) : null}
                {formStatus === "error" ? (
                  <p className="text-xs text-red-400 font-jetbrains">
                    Something went wrong. Please try again.
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      <footer className="relative px-6 pb-12 pt-6 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-700/60 pt-6 text-xs uppercase tracking-[0.35em] text-slate-500 md:flex-row font-jetbrains">
          <span>(c) 2026 Ajaya Karki</span>
          <span>Python Backend Developer</span>
        </div>
      </footer>
    </main>
  );
}
