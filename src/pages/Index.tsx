
import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', level: 'Proficient', icon: '🐍' },
    { name: 'Java', level: 'Proficient', icon: '☕' },
    { name: 'JavaScript', level: 'Proficient', icon: '🟨' },
    { name: 'React', level: 'Intermediate', icon: '⚛️' },
    { name: 'Spring Boot', level: 'Intermediate', icon: '🍃' },
    { name: 'Node.js', level: 'Intermediate', icon: '🟢' },
    { name: 'MongoDB', level: 'Beginner', icon: '🍃' },
    { name: 'MySQL', level: 'Beginner', icon: '🐬' },
    { name: 'Firebase', level: 'Beginner', icon: '🔥' },
    { name: 'Git', level: 'Beginner', icon: '📝' },
    { name: 'Salesforce', level: 'Beginner', icon: '☁️' }
  ];

  const projects = [
    {
      title: 'Certification at Doorstep',
      description: 'Seamless citizen services for government certifications with end-to-end digitization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
    },
    {
      title: 'WebLock Intrusion Detection',
      description: 'Real-time intrusion detection system with advanced log analysis and threat monitoring.',
      tech: ['Python', 'Flask', 'SQLite', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }
  ];

  const experiences = [
    {
      title: 'Volunteer',
      company: 'Nodwin',
      location: 'Hyderabad',
      duration: 'Nov 2022',
      description: 'Led logistics for 10+ meet & greet sessions. Managed BYOD gaming events with 40% improvement in responsible usage.'
    },
    {
      title: 'Head of Publications',
      company: 'Youth Diplomatic Club',
      location: '',
      duration: '2023–2024',
      description: 'Led content creation for events and publications. Managed editorial processes and publication timelines.'
    },
    {
      title: 'Participant',
      company: 'T-Hub Blitz Cohort 3',
      location: 'Hyderabad',
      duration: '2024',
      description: 'Worked in startup mentorship environment. Gained hands-on startup development experience.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Y. Sai Charan Gupta</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 space-y-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-tight">
              I'm <span className="font-medium">Sai Charan</span>.
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-gray-300 leading-tight">
              Full-stack Developer.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I build secure and scalable digital solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              onClick={() => window.open('https://github.com/saicharan5789', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Get Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative">
          <div className="w-64 h-64 mx-auto relative overflow-hidden rounded-full">
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=400&fit=crop&crop=face"
              alt="Y. Sai Charan Gupta"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-16">About Me</h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
            I'm a full-stack developer passionate about turning real-world problems into scalable solutions. 
            With expertise in React, Spring Boot, Python, and cloud tools, I craft systems that are secure, elegant, and efficient.
          </p>
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/in/yerramalla-sai-charan-gupta-4774051b4/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105"
              onClick={() => window.open('https://github.com/saicharan5789', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">What I've Built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group hover:shadow-2xl hover:shadow-white/10 hover:scale-105">
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20 group">
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <div className="group-hover:translate-x-2 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold mb-2 text-white">{exp.title}</h3>
                    <p className="text-xl text-gray-300 mb-2">
                      {exp.company}{exp.location && `, ${exp.location}`}
                    </p>
                    <p className="text-gray-400 mb-4">{exp.duration}</p>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Skills</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8 py-8">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group relative cursor-pointer"
                >
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-2xl hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/30 hover:scale-110 group-hover:ring-2 group-hover:ring-white/30">
                    {skill.icon}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-3 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-xl">
                    <div className="font-semibold text-center">{skill.name}</div>
                    <div className="text-xs text-gray-600 text-center">{skill.level}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Education</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="space-y-12">
              <div className="relative pl-20 group">
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-white">B.Tech</h3>
                  <p className="text-xl text-gray-300 mb-2">Malla Reddy University, Hyderabad</p>
                  <p className="text-gray-400 mb-2">2022–2026</p>
                  <p className="text-gray-300">CGPA: 8.84</p>
                </div>
              </div>
              <div className="relative pl-20 group">
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold mb-2 text-white">Intermediate</h3>
                  <p className="text-xl text-gray-300 mb-2">Siva Shivani Junior College, Hyderabad</p>
                  <p className="text-gray-400 mb-2">2021–2022</p>
                  <p className="text-gray-300">Percentage: 92.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-16">Let's Connect</h2>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105 px-8 py-4"
                onClick={() => window.open('mailto:Saicharan5789@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105 px-8 py-4"
                onClick={() => window.open('https://www.linkedin.com/in/yerramalla-sai-charan-gupta-4774051b4/', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105 px-8 py-4"
                onClick={() => window.open('https://github.com/saicharan5789', '_blank')}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-xl text-gray-300">
                <a href="mailto:Saicharan5789@gmail.com" className="hover:text-white transition-colors">
                  Saicharan5789@gmail.com
                </a>
              </p>
              <p className="text-xl text-gray-300">
                <a href="tel:+919989392859" className="hover:text-white transition-colors">
                  +91 9989392859
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Y. Sai Charan Gupta • Built with ❤️ in Framer</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
