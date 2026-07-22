import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { usePageMeta } from '../hooks/usePageMeta';
import { Calendar, MapPin, Code, Zap } from 'lucide-react';

// Centralized animation configurations
const ANIMATION_CONFIG = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  },
  staggerItem: (index: number) => ({
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, duration: 0.6 },
    viewport: { once: true },
  }),
};

export const About = () => {
  usePageMeta({
    title: 'About - DevOps & Cloud Engineer',
    description: 'Learn about my journey in DevOps, cloud engineering, and software development. Background, experience, and technical philosophy.',
    ogUrl: 'https://neeraj-devops.vercel.app/about',
  });
  const timeline = [
    {
      year: '2025 - Present',
      title: 'DevOps & Cloud Architect',
      company: 'Self-Employed',
      description:
        'Leading end-to-end infrastructure design. Building zero-downtime deployment pipelines, managing 20+ containerized services, and operating Kubernetes clusters at production scale.',
      icon: Code,
    },
    {
      year: '2024',
      title: 'Home Lab Kubernetes Cluster',
      company: 'Personal Infrastructure Project',
      description: 'Built and operated a multi-node Kubernetes cluster from bare metal. Implemented observability stack (Prometheus, Grafana), GitOps workflows, and automated disaster recovery.',
      icon: Code,
    },
    {
      year: '2023 - 2024',
      title: 'CI/CD Pipeline Architect',
      company: 'Freelance',
      description: 'Designed 5+ automated deployment pipelines. Reduced deployment time from 45min to sub-5min. Implemented IaC-first infrastructure using Terraform across AWS and Azure.',
      icon: Code,
    },
    {
      year: '2023',
      title: 'Full-Stack to DevOps Transition',
      company: 'Self-Directed Learning',
      description: 'Shifted focus from application development to infrastructure engineering. Completed AWS Solutions Architect foundations, mastered Docker containerization, and Kubernetes orchestration.',
      icon: Calendar,
    },
    {
      year: '2019 - 2023',
      title: 'Computer Science Graduate',
      company: 'CVR College Of Engineering',
      description: 'Bachelor\'s degree with focus on software engineering and systems design. Foundation for understanding scalable architecture principles.',
      icon: Calendar,
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Resilience Over Speed',
      description: 'Systems fail. Great infrastructure recovers gracefully. I design for failure modes, not just happy paths.',
    },
    {
      icon: Code,
      title: 'Infrastructure as Code',
      description: 'Version control everything. Infrastructure changes tracked, audited, and reproducible. No clickops.',
    },
    {
      icon: MapPin,
      title: 'Observability Matters',
      description: 'If a system can\'t explain its own failure, it isn\'t production-ready. Logging, metrics, and tracing are non-negotiable.',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background and technical philosophy"
      />

      {/* Bio Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Bio Text */}
            <motion.div
              {...ANIMATION_CONFIG.fadeInLeft}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="I build systems that survive chaos."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    I design infrastructure that remains observable, recoverable, and boring in production. 
                    My focus is on systems that handle failed deployments, traffic spikes, broken pipelines, and midnight incidents without breaking.
                  </p>
                  <p>
                    My foundation was full-stack development—Java, React, Node.js—which taught me how applications fail. 
                    That shaped my DevOps philosophy: every system I build assumes failure is inevitable.
                  </p>
                  <p>
                    I work across AWS and Azure, orchestrate containers at scale with Docker and Kubernetes, 
                    and define infrastructure-as-code with Terraform. I obsess over deployment speed (sub-5min rollbacks), 
                    observability stacks (Prometheus, Grafana), and GitOps-driven workflows that eliminate manual intervention.
                  </p>
                  <p className="text-primary-500 font-medium">
                    DevOps isn't about moving fast—it's about moving fast without breaking systems. 
                    Every pipeline I build, every automation script I write, is optimized for resilience and clarity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Deployment Rollback</span>
                    <span className="text-primary-500 font-mono">&lt;5 min</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Uptime Target</span>
                    <span className="text-primary-500 font-mono">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">CI/CD Pipelines Built</span>
                    <span className="text-primary-500 font-mono">5+</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Containerized Services</span>
                    <span className="text-primary-500 font-mono">20+</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus', 'Grafana', 'Linux', 'GitOps', 'CI/CD'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Currently Working With Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-mono text-2xl md:text-3xl font-bold text-primary-500 mb-4">
              Current Stack
            </h3>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Technologies I actively work with across infrastructure and deployment
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center">
            {['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Linux', 'Prometheus', 'Grafana', 'GitOps', 'Bash', 'PostgreSQL', 'Redis'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 rounded-lg font-mono text-sm hover:border-primary-500/60 hover:bg-primary-500/20 transition-all duration-300 group cursor-default"
              >
                <span className="text-accent-500 group-hover:text-accent-400 transition-colors">$</span> {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              My journey from full-stack development to DevOps engineering
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">{item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Tech Philosophy
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core principles that guide my approach to software engineering and DevOps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {philosophyPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 text-center hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500/20 transition-colors">
                    <IconComponent size={32} className="text-primary-500" />
                  </div>
                  <h3 className="font-semibold text-xl text-neutral-200 mb-4">{point.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{point.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Personal Touch Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/5 to-accent-500/5 border border-primary-500/20 rounded-xl p-8 text-center"
          >
            <p className="text-neutral-300 font-medium">
              <span className="text-accent-500">Outside infrastructure work,</span> I enjoy experimenting with homelabs, 
              building observability stacks from scratch, and automating workflows that probably didn't need automation. 
              <span className="text-primary-500"> The best learning happens at 2 AM when something in your lab breaks.</span>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
