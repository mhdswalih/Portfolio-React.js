import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, ExternalLink } from 'lucide-react';
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
import resume from '../../assets/Resume/Muhammed Swalih.pdf'

const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
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
            description: 'An interactive card-flipping memory game built with React. Players match pairs of cards while tracking score and moves.',
            tech: ['React', 'CSS'],
            demo: 'https://memmory-game-using-react.vercel.app/',
            code: 'https://github.com/mhdswalih/MemmoryGame-Using-React',
            image: Gme
        },
        {
            title: 'User Management System',
            description: 'A full-stack user management system with secure CRUD operations, Cloudinary image uploads, and responsive dashboard.',
            tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
            demo: '#',
            code: 'https://github.com/mhdswalih/Jwt-frontend',
            image: userMan
        }
    ];

    return (
        <div className='relative p-15 bg-black w-full min-h-screen overflow-hidden font-mono'>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            {/* Faint green glow top-left */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* ── NAVBAR ── */}
            <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="flex items-center gap-1 px-2 py-2 bg-black/80 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl">
                    {['home', 'about', 'skills', 'projects'].map((item, i) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="px-4 py-2 text-gray-500 hover:text-green-400 hover:bg-white/5 transition-all duration-200 text-xs tracking-widest uppercase rounded"
                        >
                            <span className="text-green-400/40"></span> {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* ── HOME ── */}
            <div id='home' className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 pb-20">

                {/* Left */}
                <div className={`flex flex-col items-start space-y-8 lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs tracking-widest uppercase">available for work</span>
                    </div>

                    <div className="space-y-3">
                        <p className="text-gray-600 text-sm tracking-widest">// greeting</p>
                        <h1 className="text-6xl lg:text-8xl font-black text-white leading-none">
                            <span className="text-white/15">00.</span> HEY
                        </h1>
                        <div className="h-px bg-gradient-to-r from-green-400/60 via-white/10 to-transparent w-full" />
                        <h2 className="text-xl text-gray-400 font-light pt-2">
                            I'm <span className="text-white font-bold">Muhammed Swalih MC</span>
                        </h2>
                        <p className="text-green-400 text-lg">
                            <span className="text-gray-600">{'>'}_</span> MERN Stack Developer
                        </p>
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-md border-l border-white/10 pl-4">
                        Crafting seamless web experiences with modern technologies.
                        Passionate about building scalable applications that make a difference.
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <a href='#projects' className="group flex items-center gap-2 px-5 py-2.5 bg-green-400 hover:bg-green-300 text-black text-sm font-bold rounded transition-all duration-200">
                            view_work()
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href={resume} download='Muhammed Swalih MC Resume.pdf' className="flex items-center gap-2 px-5 py-2.5 border border-white/10 hover:border-green-400/50 text-gray-400 hover:text-green-400 text-sm rounded transition-all duration-200">
                            <Code2 className="w-4 h-4" />
                            download_cv()
                        </a>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                        {[
                            { href: 'https://github.com/mhdswalih?tab=repositories', icon: <Github className="w-4 h-4" />, label: 'github' },
                            { href: 'https://www.linkedin.com/in/muhammed-swalih-mc-a39485329/', icon: <Linkedin className="w-4 h-4" />, label: 'linkedin' },
                            { href: 'mailto:ctmswalihmc@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'email' },
                        ].map((s) => (
                            <a key={s.label} href={s.href} className="flex items-center gap-2 px-3 py-2 border border-white/10 hover:border-green-400/40 text-gray-500 hover:text-green-400 text-xs rounded transition-all duration-200">
                                {s.icon} {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right — terminal card */}
                <div className={`mt-16 lg:mt-0 lg:w-1/2 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="w-full max-w-md border border-white/10 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm">
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-3 text-xs text-gray-500">~/swalih/profile.json</span>
                        </div>
                        <div className="p-6 text-sm space-y-1 text-gray-400 leading-loose">
                            <p><span className="text-white/20">{'{'}</span></p>
                            <p className="pl-4"><span className="text-blue-400">"name"</span><span className="text-white/20">:</span> <span className="text-green-300">"Muhammed Swalih MC"</span><span className="text-white/20">,</span></p>
                            <p className="pl-4"><span className="text-blue-400">"role"</span><span className="text-white/20">:</span> <span className="text-green-300">"MERN Stack Developer"</span><span className="text-white/20">,</span></p>
                            <p className="pl-4"><span className="text-blue-400">"location"</span><span className="text-white/20">:</span> <span className="text-yellow-300">"Kerala, India"</span><span className="text-white/20">,</span></p>
                            <p className="pl-4"><span className="text-blue-400">"status"</span><span className="text-white/20">:</span> <span className="text-green-400">"open_to_work"</span><span className="text-white/20">,</span></p>
                            <p className="pl-4"><span className="text-blue-400">"focus"</span><span className="text-white/20">:</span> <span className="text-pink-300">"full-stack"</span></p>
                            <p><span className="text-white/20">{'}'}</span></p>
                            <p className="pt-2 text-green-400">▋<span className="animate-pulse">_</span></p>
                        </div>
                        {/* <div className="overflow-hidden rounded-b-lg h-48">
                            <img src={imageMain} alt="hero" className="w-full h-full object-cover opacity-60" />
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

            {/* ── ABOUT ── */}
            <div id='about' className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center justify-between pt-32 pb-20">

                {/* Left */}
                <div className={`flex flex-col items-start space-y-8 lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-blue-400 text-xs tracking-widest uppercase">about.md</span>
                    </div>
                    <h2 className="font-black text-6xl lg:text-8xl text-white leading-none">
                        <span className="text-white/15">02.</span> ABOUT
                    </h2>
                    <div className="h-px bg-gradient-to-r from-blue-400/60 via-white/10 to-transparent w-3/4" />

                    <div className="space-y-4 text-gray-500 text-sm leading-relaxed max-w-xl border-l border-white/10 pl-4">
                        <p><span className="text-blue-400">/*</span></p>
                        <p>I am <span className="text-white">very passionate about creating websites</span> and digital experiences that combine beautiful design with robust functionality.</p>
                        <p>As a dedicated <span className="text-green-400">MERN Stack Developer</span>, I specialize in building full-stack applications using MongoDB, Express.js, React, and Node.js.</p>
                        <p>What drives me is the endless possibility to innovate and create meaningful digital products that make a difference in people's lives.</p>
                        <p><span className="text-blue-400">*/</span></p>
                    </div>

                    <div>
                        <p className="text-xs text-gray-600 tracking-widest mb-3">// TECH I WORK WITH</p>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'Solid.js', 'Node.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Express.js', 'JavaScript', 'TypeScript'].map((tech) => (
                                <span key={tech} className="px-3 py-1 border border-white/10 text-gray-500 hover:border-blue-400/50 hover:text-blue-300 text-xs rounded-sm transition-all duration-200 cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right — photo card */}
                <div className={`mt-16 lg:mt-0 lg:w-1/2 flex justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                    <div className="w-full max-w-sm border border-white/10 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm">
                        <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="ml-3 text-xs text-gray-500">~/swalih/photo.jpg</span>
                        </div>
                        <div className="relative">
                            <img src={aboutImg} alt="Muhammed Swalih MC" className="w-full h-80 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-4">
                                <p className="text-green-400 text-xs">$ whoami</p>
                                <p className="text-white text-sm font-bold">Muhammed Swalih MC</p>
                                <p className="text-gray-400 text-xs">MERN Stack Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

            {/* ── SKILLS ── */}
            <div id='skills' className="relative z-10 w-full max-w-7xl mx-auto px-6 min-h-screen py-32">
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-green-400 text-xs tracking-widest uppercase">skills.exe</span>
                    </div>
                    <h2 className="font-black text-6xl lg:text-8xl text-white leading-none">
                        <span className="text-white/15">03.</span> SKILLS
                    </h2>
                    <div className="mt-4 h-px bg-gradient-to-r from-green-400/60 via-white/10 to-transparent w-full" />
                </div>
        
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-10">
                        <div>
                            <p className="text-xs text-green-400 tracking-widest mb-4">// MERN STACK</p>
                            <div className="space-y-4">
                                {[
                                    { name: 'MongoDB', level: 90 },
                                    { name: 'Express.js', level: 85 },
                                    { name: 'React.js', level: 88 },
                                    { name: 'Node.js', level: 87 },
                                    { name: 'Nest.js', level: 82 },
                                    { name: 'Solid.js', level: 50 },
                                ].map((skill) => (
                                    <div key={skill.name} className="group">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{skill.name}</span>
                                            <span className="text-xs text-green-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-px bg-white/10 w-full relative overflow-hidden">
                                            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-emerald-300" style={{ width: `${skill.level}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
        
                        <div>
                            <p className="text-xs text-blue-400 tracking-widest mb-4">// FRONTEND</p>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1.5 border border-white/10 text-gray-400 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-200 rounded-sm cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
        
                    <div>
                        <div className="border border-white/10 rounded-lg overflow-hidden bg-black/60 backdrop-blur-sm">
                            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs text-gray-500">~/swalih/stack.json</span>
                            </div>
                            <div className="p-6 text-sm space-y-1 text-gray-400 leading-relaxed">
                                <p><span className="text-white/20">{'{'}</span></p>
                                <p className="pl-4"><span className="text-blue-400">"databases"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-green-300">Redis</span><span className="text-white/20">', '</span><span className="text-green-300">PostgreSQL</span><span className="text-white/20">', '</span><span className="text-green-300">MongoDB</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"cloud"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-yellow-300">AWS</span><span className="text-white/20">', '</span><span className="text-yellow-300">Vercel</span><span className="text-white/20">', '</span><span className="text-yellow-300">Render</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"tools"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-pink-300">Git</span><span className="text-white/20">', '</span><span className="text-pink-300">Docker</span><span className="text-white/20">', '</span><span className="text-pink-300">WebRTC</span><span className="text-white/20">', '</span><span className="text-pink-300">Socket.io</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"proficiency"</span><span className="text-white/20">:{` {`}</span></p>
                                <p className="pl-8"><span className="text-gray-500">"fullStack"</span><span className="text-white/20">:</span> <span className="text-green-400">92</span><span className="text-white/20">,</span></p>
                                <p className="pl-8"><span className="text-gray-500">"cloudDevOps"</span><span className="text-white/20">:</span> <span className="text-green-400">85</span><span className="text-white/20">,</span></p>
                                <p className="pl-8"><span className="text-gray-500">"databases"</span><span className="text-white/20">:</span> <span className="text-green-400">88</span></p>
                                <p className="pl-4"><span className="text-white/20">{`}`}</span></p>
                                <p><span className="text-white/20">{'}'}</span></p>
                                <p className="pt-2 text-green-400">▋<span className="animate-pulse">_</span></p>
                            </div>
                        </div>
        
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            {[
                                { label: 'Projects', value: '9+' },
                                { label: 'Stack', value: 'MERN' },
                                { label: 'Available', value: 'Now' },
                            ].map((stat) => (
                                <div key={stat.label} className="border border-white/10 rounded-lg p-4 text-center hover:border-green-400/30 transition-all duration-300">
                                    <p className="text-2xl font-black text-white">{stat.value}</p>
                                    <p className="text-xs text-gray-600 mt-1 tracking-widest uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

            {/* ── PROJECTS ── */}
            <div id="projects" className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                        <span className="text-pink-400 text-xs tracking-widest uppercase">projects.ls</span>
                    </div>
                    <h2 className="font-black text-6xl lg:text-8xl text-white leading-none">
                        <span className="text-white/15">04.</span> WORK
                    </h2>
                    <div className="mt-4 h-px bg-gradient-to-r from-pink-400/60 via-white/10 to-transparent w-full" />
                    <p className="mt-4 text-gray-600 text-sm max-w-xl border-l border-white/10 pl-4">
                        A collection of projects showcasing my expertise in full-stack development
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group border border-white/10 rounded-lg overflow-hidden hover:border-green-400/30 transition-all duration-300 bg-black/40 backdrop-blur-sm"
                        >
                            {/* Card titlebar */}
                            <div className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border-b border-white/10">
                                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                                <div className="w-2 h-2 rounded-full bg-green-500/60" />
                                <span className="ml-2 text-xs text-gray-600 truncate">{project.title.toLowerCase().replace(/ /g, '_')}.tsx</span>
                            </div>

                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-3">
                                <div>
                                    <p className="text-xs text-gray-600 mb-1">// {String(index + 1).padStart(2, '0')}</p>
                                    <h3 className="text-white font-bold text-sm group-hover:text-green-400 transition-colors">{project.title}</h3>
                                </div>

                                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="px-2 py-0.5 text-xs border border-white/10 text-gray-500 rounded-sm">{tech}</span>
                                    ))}
                                </div>

                                <div className="flex gap-2 pt-1">
                                    {project.demo && project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 bg-green-400 hover:bg-green-300 text-black text-xs font-bold rounded transition-all duration-200">
                                            <ExternalLink className="w-3 h-3" /> demo()
                                        </a>
                                    )}
                                    {project.code && (
                                        <a href={project.code} target="_blank" rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-green-400/40 text-gray-500 hover:text-green-400 text-xs rounded transition-all duration-200">
                                            <Github className="w-3 h-3" /> code()
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FOOTER ── */}
            <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 border-t border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-gray-700">
                        <span className="text-green-400">$</span> © 2024 Muhammed Swalih MC — All rights reserved.
                    </div>
                    <div className="flex items-center gap-3">
                        {[
                            { href: 'https://github.com/mhdswalih?tab=repositories', icon: <Github className="w-4 h-4" />, label: 'github' },
                            { href: 'https://www.linkedin.com/in/muhammed-swalih-mc-a39485329/', icon: <Linkedin className="w-4 h-4" />, label: 'linkedin' },
                            { href: 'mailto:ctmswalihmc@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'email' },
                        ].map((s) => (
                            <a key={s.label} href={s.href} className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-green-400/40 text-gray-600 hover:text-green-400 text-xs rounded transition-all duration-200">
                                {s.icon} {s.label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;