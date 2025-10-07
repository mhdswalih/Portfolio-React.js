import { useState, useEffect, type ReactEventHandler } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, ExternalLink } from 'lucide-react';
import imageMain from '../../assets/img/bg-1.png'
import aboutImg from '../../assets/img/WhatsApp Image 2024-02-12 at 12.12.02_0837d19f.jpg'
import thengapod from '../../assets/img/Projects/thengapod.png'
import ECom from '../../assets/img/Projects/E-Com.png'
import NetF from '../../assets/img/Projects/Netflix.png'
import OLX from '../../assets/img/Projects/Olx.png'
import Flat from '../../assets/img/Projects/flat.png'
import Gme from '../../assets/img/Projects/gamemem.png'
import ImgGen from '../../assets/img/Projects/imagegen.png'
import userMan from '../../assets/img/Projects/usermang.png'
import FameZero from '../../assets/img/Projects/Screenshot 2025-10-07 192432.png'
import resume from '../../assets/Resume/swalih mc.pdf'

// Particles Component (simplified for demo)
const Particles = ({ className }: { className?: string }) => {
    return (
        <div className={className}>
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        opacity: Math.random() * 0.5 + 0.2
                    }}
                />
            ))}
        </div>
    );
};

// ScrambledText Component (simplified)
const ScrambledText = ({
    children,
    className,
    delay = 0
}: {
    children: string;
    className?: string;
    delay?: number;
}) => {
    const [text, setText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const chars = '!<>-_\\/[]{}—=+*^?#________';
        const finalText = children;
        let iteration = 0;

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                setText(finalText.split('').map((letter, index) => {
                    if (index < iteration) {
                        return finalText[index];
                    }
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join(''));

                if (iteration >= finalText.length) {
                    clearInterval(interval);
                    setIsComplete(true);
                }

                iteration += 1 / 3;
            }, 30);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [children, delay]);

    return <span className={className}>{isComplete ? children : text}</span>;
};

const Landing = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const projects = [
        {
            title: 'Flame Zero',
            description: 'A full-featured online store with product catalog, user authentication, shopping cart, secure payments, and admin dashboard.',
            tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Redis', 'socket.io', 'Fire-Base'],
            demo: '#',
            code: 'https://github.com/mhdswalih/FameZero',
            image: FameZero
        },
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store with product catalog, user authentication, shopping cart, secure payments, and admin dashboard.',
            tech: ['EJS', 'Node.js', 'Express', 'MongoDB'],
            demo: 'https://aranoz.online/',
            code: 'https://github.com/mhdswalih/Aranoz_eCommerce',
            image: ECom
        },
        {
            title: 'Real-time Chat Application',
            description: 'A feature-rich platform for text, video, and audio calls using WebRTC, with group chat and real-time notifications.',
            tech: ['React', 'Socket.io', 'Node.js', 'Express', 'WebRTC'],
            demo: 'https://thengapod.vercel.app/',
            code: 'https://github.com/mhdswalih/ThengaPod-frontend',
            image: thengapod
        },
        {
            title: 'AI Image Generator',
            description: 'An interactive web app generating unique images from text prompts with AI, featuring download and sharing options.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demo: 'https://ai-image-gen-eta.vercel.app/',
            code: 'https://github.com/mhdswalih/Ai-imageGenarator',
            image: ImgGen
        },
        {
            title: 'Apartment Management System',
            description: 'A property management solution with tenant management, rent tracking, maintenance requests, and financial reporting.',
            tech: ['EJS', 'Node.js', 'Express', 'MongoDB'],
            demo: '#',
            image: Flat
        },
        {
            title: 'OLX Clone',
            description: 'A classified ads platform with user authentication, product listings, search, and buyer-seller messaging.',
            tech: ['React', 'MongoDB', 'TypeScript', 'Firebase', 'Cloudinary'],
            code: 'https://github.com/mhdswalih/olx-clone',
            demo: '#',
            image: OLX
        },
        {
            title: 'Netflix Clone',
            description: 'A streaming service replica with movie browsing, user profiles, recommendations, and responsive design.',
            tech: ['React', 'Firebase'],
            code: 'https://github.com/mhdswalih/Netflix-Clone-React',
            demo: '#',
            image: NetF
        },
        {
            title: 'Memory Game',
            description: 'An interactive card-flipping memory game built with React. Players match pairs of cards while tracking score and moves. Designed with responsive layout and smooth animations.',
            tech: ['React', 'CSS'],
            demo: 'https://memmory-game-using-react.vercel.app/',
            code: 'https://github.com/mhdswalih/MemmoryGame-Using-React',
            image: Gme
        },
        {
            title: 'User Management System',
            description: 'A full-stack user management system built with React and Node.js. It allows admins to add, edit, and delete users with secure CRUD operations. Integrated Cloudinary for image uploads and efficient storage. Designed with a clean UI and responsive dashboard.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
            demo: '#',
            code: 'https://github.com/mhdswalih/Jwt-frontend',
            image: userMan
        }

    ];

    return (
        <div className='relative bg-black w-full min-h-screen overflow-hidden'>
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />

            {/* Radial gradient that follows mouse */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl transition-all duration-300 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                }}
            />

            <Particles className='absolute inset-0 w-full h-full' />

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

            {/* Navigation Bar */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="flex items-center gap-8 px-8 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
                    <a href="#home" className="text-white hover:text-purple-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#about" className="text-white hover:text-purple-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#skills" className="text-white hover:text-purple-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                        Skills
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a href="#projects" className="text-white hover:text-purple-400 transition-all duration-300 font-medium text-sm tracking-wide relative group">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>
            </nav>

            {/* Main Content */}
            <div id='home' className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 min-h-screen pt-32 pb-20">
                {/* Text Section */}
                <div className={`flex flex-col items-start space-y-8 lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Available for work</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <ScrambledText className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                            Hey...
                        </ScrambledText>

                        <div className="space-y-2">
                            <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                                I'm <span className="text-white font-semibold">Muhammed Swalih MC</span>
                            </h2>
                            <ScrambledText
                                className="text-xl lg:text-2xl text-gray-400 font-light"
                                delay={500}
                            >
                                MERN Stack Developer
                            </ScrambledText>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        Crafting seamless web experiences with modern technologies.
                        Passionate about building scalable applications that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a href='#projects' className="group flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
                            <span className="font-medium">View My Work</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a href={resume} download='Muhammed Swalih MC Resume.pdf' className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl transition-all duration-300 backdrop-blur-sm hover:scale-105">
                            <Code2 className="w-4 h-4" />
                            <span className="font-medium">Download CV</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-4">
                        <a href="https://github.com/mhdswalih?tab=repositories" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-purple-500/50 group">
                            <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-swalih-mc-a39485329/" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-purple-500/50 group">
                            <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                        <a href="mailto:ctmswalihmc@gmail.com" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:border-purple-500/50 group">
                            <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Image Section */}
                <div className={`mt-16 lg:mt-0 lg:w-1/2 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative">
                        {/* Glowing orb behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl scale-110 animate-pulse" />

                        {/* Decorative rings */}
                        <div className="absolute inset-0 border border-purple-500/20 rounded-full scale-110 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-125 animate-ping" style={{ animationDuration: '4s' }} />

                        {/* Image container with placeholder */}
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br backdrop-blur-sm  flex items-center justify-center overflow-hidden">
                            <div className="text-center p-8">
                                {/* <Code2 className="w-24 h-24 text-purple-400/50 mx-auto mb-4" /> */}
                                <img src={imageMain} className="w-400  text-gray-400 text-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-white font-bold mb-6 max-w-7xl mx-auto" />

            {/* Main Content */}
            <div id='about' className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 min-h-screen pt-32 pb-20">
                {/* Text Section */}
                <div className={`flex flex-col items-start space-y-8 lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">About Me</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <ScrambledText className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                            About Me
                        </ScrambledText>
                    </div>

                    {/* Description */}
                    <div className="space-y-4 text-gray-400 text-lg leading-relaxed max-w-xl">
                        <p>
                            I am <span className="text-white font-medium">very passionate about creating websites and digital experiences</span> that combine beautiful design with robust functionality.
                        </p>

                        <p>
                            As a dedicated <span className="text-purple-300 font-medium">MERN Stack Developer</span>, I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js. I love transforming ideas into interactive, scalable web solutions.
                        </p>

                        <p>
                            What drives me is the endless possibility to innovate and create meaningful digital products that make a difference in people's lives.
                        </p>
                    </div>

                    {/* Tech Passion Points */}
                    <div className="flex flex-wrap gap-3 mt-4">
                        {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'TypeScript'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Image Section */}
                <div className={`mt-16 lg:mt-0 lg:w-1/2 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative">
                        {/* Glowing orb behind image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-3xl scale-110 animate-pulse" />

                        {/* Decorative rings */}
                        <div className="absolute inset-0 border border-purple-500/20 rounded-full scale-110 animate-ping" style={{ animationDuration: '3s' }} />
                        <div className="absolute inset-0 border border-blue-500/20 rounded-full scale-125 animate-ping" style={{ animationDuration: '4s' }} />

                        {/* Image container */}
                        <div className="relative w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Muhammed Swalih MC - MERN Stack Developer"
                                className="w-full h-full object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                        </div>


                    </div>
                </div>
            </div>
            <hr className="text-white font-bold mb-6 max-w-7xl mx-auto" />
            <div id='skills' className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 min-h-screen pt-32 pb-20">
                {/* Text Section */}
                <div className={`flex flex-col items-start space-y-8 lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    {/* Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm font-medium">Technical Skills</span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <ScrambledText className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent leading-tight">
                            Skills
                        </ScrambledText>
                    </div>

                    {/* Skills Description */}
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        I specialize in the complete MERN stack and beyond, with expertise in modern databases,
                        cloud platforms, and deployment technologies to deliver full-stack solutions.
                    </p>

                    {/* Skills Categories */}
                    <div className="space-y-6 w-full max-w-xl">
                        {/* MERN Stack */}
                        <div className="space-y-3">
                            <h3 className="text-white text-xl font-semibold">MERN Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: 'MongoDB', level: 90 },
                                    { name: 'Express.js', level: 85 },
                                    { name: 'React.js', level: 88 },
                                    { name: 'Node.js', level: 87 }
                                ].map((skill) => (
                                    <div key={skill.name} className="relative group">
                                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white font-medium backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
                                            {skill.name}
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-600 rounded-full">
                                            <div
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Databases */}
                        <div className="space-y-3">
                            <h3 className="text-white text-xl font-semibold">Databases</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Redis', 'PostgreSQL', 'MongoDB'].map((db) => (
                                    <div key={db} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-medium backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-500/30 hover:text-white transition-all duration-300">
                                        {db}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cloud & Deployment */}
                        <div className="space-y-3">
                            <h3 className="text-white text-xl font-semibold">Cloud & Deployment</h3>
                            <div className="flex flex-wrap gap-3">
                                {['AWS', 'Vercel', 'Render'].map((cloud) => (
                                    <div key={cloud} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-medium backdrop-blur-sm hover:bg-green-500/20 hover:border-green-500/30 hover:text-white transition-all duration-300">
                                        {cloud}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Frontend Technologies */}
                        <div className="space-y-3">
                            <h3 className="text-white text-xl font-semibold">Frontend</h3>
                            <div className="flex flex-wrap gap-3">
                                {['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React.js'].map((tech) => (
                                    <div key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 font-medium backdrop-blur-sm hover:bg-yellow-500/20 hover:border-yellow-500/30 hover:text-white transition-all duration-300">
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Skills Section */}
                <div className={`mt-16 lg:mt-0 lg:w-1/2 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="relative w-full max-w-lg">
                        {/* Animated Background Elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-3xl animate-pulse" />

                        {/* Skills Visualization */}
                        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 space-y-6">
                            {/* MERN Stack Visualization */}
                            <div className="text-center">
                                <h3 className="text-white text-2xl font-bold mb-6">Tech Stack Mastery</h3>

                                {/* Circular Progress */}
                                <div className="grid grid-cols-2 gap-6">
                                    {[
                                        { name: 'MongoDB', value: 90, color: 'from-green-400 to-green-600' },
                                        { name: 'Express', value: 85, color: 'from-gray-400 to-gray-600' },
                                        { name: 'React', value: 88, color: 'from-blue-400 to-blue-600' },
                                        { name: 'Node.js', value: 87, color: 'from-green-500 to-green-700' }
                                    ].map((skill, index) => (
                                        <div key={skill.name} className="flex flex-col items-center">
                                            <div className="relative w-20 h-20">
                                                <div className="absolute inset-0 bg-gray-700 rounded-full"></div>
                                                <div
                                                    className="absolute inset-0 rounded-full bg-gradient-to-r bg-green-500"
                                                    style={{
                                                        background: `conic-gradient(${skill.color.replace('from-', '').replace('to-', '')} ${skill.value * 3.6}deg, transparent 0)`
                                                    }}
                                                ></div>
                                                <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-bold">{skill.value}%</span>
                                                </div>
                                            </div>
                                            <span className="text-white text-sm mt-2">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Skills Grid */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                                {['Redis', 'PostgreSQL', 'AWS', 'Vercel', 'Render', 'Docker'].map((skill) => (
                                    <div key={skill} className="text-center p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                                        <div className="text-white font-medium text-sm">{skill}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Experience Summary */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="text-center text-gray-300 text-sm">
                                    <p>Full-Stack Development • Cloud Deployment • Database Management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-white font-bold mb-6 max-w-7xl mx-auto" />

            {/* Projects Section */}
            <div id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
                <div className={`flex flex-col items-center space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm mx-auto w-fit">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-purple-300 text-sm font-medium">My Work</span>
                        </div>

                        <ScrambledText className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                            Projects
                        </ScrambledText>

                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            A collection of projects showcasing my expertise in full-stack development
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                            >
                                {/* Glowing effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 transition-all duration-300" />

                                {/* Project Image */}
                                <div className="relative h-48 bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                                    <img src={project.image} alt="" />
                                </div>

                                {/* Project Content */}
                                <div className="relative p-6 space-y-4">
                                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-2 py-1 text-xs bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 backdrop-blur-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                        <a
                                            href={project.code}
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                                        >
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 border-t border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-gray-400 text-sm">
                        © 2024 Muhammed Swalih MC. All rights reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="https://github.com/mhdswalih?tab=repositories" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammed-swalih-mc-a39485329/" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:ctmswalihmc@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;