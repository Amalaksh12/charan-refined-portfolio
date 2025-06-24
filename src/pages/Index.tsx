
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
    { name: 'Git', level: 'Beginner', icon: '📝' },
    { name: 'Firebase', level: 'Beginner', icon: '🔥' },
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
      tech: ['Python', 'Machine Learning', 'Flask', 'SQLite'],
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Y. Sai Charan Gupta</div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
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
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight">
              I'm <span className="font-medium">Sai Charan</span>.
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-gray-300">
              Full-stack Developer.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              With a passion for scalable tech and smart solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Get Resume
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">What I've built</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="aspect-video mb-6 rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
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
      <section id="experience" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Experience</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="relative pl-20">
              <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
              <div className="pb-8">
                <h3 className="text-2xl font-semibold mb-2">Volunteer</h3>
                <p className="text-xl text-gray-300 mb-2">Nodwin, Hyderabad</p>
                <p className="text-gray-400 mb-4">Nov 15–17</p>
                <p className="text-gray-300 leading-relaxed">
                  Led logistics for 10+ events and improved device handling at gaming events by 40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Skills</h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group relative"
                >
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center text-3xl hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-white/20">
                    {skill.icon}
                  </div>
                  <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-white text-black px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name} – {skill.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Education</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            <div className="space-y-12">
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">B.Tech</h3>
                  <p className="text-xl text-gray-300 mb-2">Malla Reddy University</p>
                  <p className="text-gray-400 mb-2">2022–2026</p>
                  <p className="text-gray-300">CGPA: 8.84</p>
                </div>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">Intermediate</h3>
                  <p className="text-xl text-gray-300 mb-2">Siva Shivani Junior College</p>
                  <p className="text-gray-400 mb-2">2021–2022</p>
                  <p className="text-gray-300">Percentage: 92.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-16 text-center">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Salesforce Administrator',
              'IBM AI – Coursera',
              'MoE Innovation Ambassador'
            ].map((cert, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-lg font-semibold">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-gray-950/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-16">Let's Connect</h2>
          <div className="space-y-8">
            <div className="flex justify-center space-x-8">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('mailto:Saicharan5789@gmail.com')}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('https://linkedin.com', '_blank')}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('https://github.com', '_blank')}
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
          <p className="text-gray-400">© 2024 Y. Sai Charan Gupta. Built with passion.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
