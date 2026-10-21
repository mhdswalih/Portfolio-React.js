import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import Hero from '../Hero';
import FeaturedProjects from '../sections/Projects/Featuredprojets';
import aboutImg from '../../assets/Contemplation Above the Misty Valley.png'


const Landing = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='relative bg-charcoal w-full min-h-screen overflow-hidden font-mono'>

            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
            {/* faint accent glow */}
            <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            {/* ── HERO ── */}
            <Hero />

            <div className="w-full max-w-7xl mx-auto px-6"><div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" /></div>

          {/* ── ABOUT ── */}
<section
    id="about"
    className="relative z-10 w-full bg-cream text-charcoal font-sans overflow-hidden"
>
    {/* very faint paper texture */}
    <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(32,35,38,0.14) 1px, transparent 0)',
            backgroundSize: '28px 28px'
        }}
    />

    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-center">

        {/* ── Left ── */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4">
                <span className="text-base font-semibold text-charcoal">01</span>
                <span className="h-px w-48 sm:w-80 bg-charcoal/60" />
            </div>

            <h2 className="mt-10 font-display font-extrabold tracking-tight leading-[0.92] text-accent">
                <span className="block text-[clamp(3.5rem,8vw,7rem)]">About</span>
                <span className="block text-[clamp(3.5rem,8vw,7rem)]">Me</span>
            </h2>

            <p className="mt-8 max-w-[30rem] text-[17px] leading-[1.75] text-charcoal/75">
                I'm a full stack developer from Kerala, passionate about building web applications
                and exploring new technologies. I love turning ideas into real products and always
                eager to learn and grow in the tech world.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-10 gap-y-4">
                <div className="flex items-center gap-2.5">
                    <MapPin className="h-5 w-5 text-accent" strokeWidth={2.4} />
                    <span className="text-[15px] text-charcoal/80">Kerala, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                    <GraduationCap className="h-5 w-5 text-accent" strokeWidth={2.4} />
                    <span className="text-[15px] text-charcoal/80">B.A. Sociology (2023)</span>
                </div>
            </div>

            <a
                href="#skills"
                className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-charcoal/50 bg-transparent px-7 py-3 text-sm font-medium text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-cream"
            >
                More About Me
                <ArrowRight className="h-4 w-4" />
            </a>
        </div>

        {/* ── Right: tilted photo collage ── */}
        <div className={`relative mx-auto w-full max-w-[340px] sm:max-w-[360px] transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* handwritten note + arrow */}
            <div className="absolute top-0 -right-4 sm:-right-24 z-20 -rotate-[8deg]">
                <p className="font-hand text-[28px] leading-[1.1] text-charcoal">
                    Keep
                    <br />
                    Building
                </p>
                <svg
                    className="w-9 h-9 ml-2 mt-1 text-charcoal"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M32 6c2 12-5 22-19 25" />
                    <path d="M13 30l-5 3 2-8" />
                </svg>
            </div>

            {/* everything inside shares ONE rotation, so all layers stay aligned */}
            <div className="relative -rotate-[7deg]">

                {/* soft grey card behind photo */}
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-charcoal/10" />

                {/* thin outline frame — shows on the left (and a bit at the top) */}
                <div className="absolute -left-[14%] top-[6%] h-[92%] w-[90%] border-[1.5px] border-charcoal/70" />

                {/* orange ribbon — right edge, top half */}
                <div className="absolute -right-[4%] -top-[1%] h-[48%] w-[30%] bg-accent" />

                {/* orange chunk — bottom-left corner */}
                <div className="absolute -bottom-[3%] -left-[10%] h-[12%] w-[44%] bg-accent" />

                {/* photo */}
                <div className="relative aspect-[5/8] w-full overflow-hidden shadow-[0_18px_40px_rgba(32,35,38,0.22)]">
                    <img
                        src={aboutImg}
                        alt="Muhammed Swalih MC"
                        className="h-full w-full object-cover object-center grayscale"
                    />
                </div>
            </div>
        </div>
    </div>
</section>
       <section className="">
          <FeaturedProjects  />
       </section>
          

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
                            <p className="text-xs text-green-400 tracking-widest mb-4">// CORE STACK</p>
                            <div className="space-y-4">
                                {[
                                    { name: 'MongoDB', level: 90 },
                                    { name: 'Express.js', level: 85 },
                                    { name: 'React.js', level: 88 },
                                    { name: 'Node.js', level: 87 },
                                    { name: 'Next.js', level: 78 },
                                    { name: 'Nest.js', level: 75 },
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
                                {['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'].map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1.5 border border-white/10 text-gray-400 hover:border-blue-400/50 hover:text-blue-300 transition-all duration-200 rounded-sm cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-yellow-400 tracking-widest mb-4">// BACKEND & DATABASE</p>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Express.js', 'Nest.js', 'MongoDB', 'PostgreSQL', 'Redis', 'REST APIs', 'JWT Auth'].map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1.5 border border-white/10 text-gray-400 hover:border-yellow-400/50 hover:text-yellow-300 transition-all duration-200 rounded-sm cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-pink-400 tracking-widest mb-4">// AI, CMS & AUTOMATION</p>
                            <div className="flex flex-wrap gap-2">
                                {['n8n', 'Strapi.js', 'AI Agents', 'Claude.ai', 'Codex', 'GLM', 'AI Models', 'Workflow Automation'].map((tech) => (
                                    <span key={tech} className="text-xs px-3 py-1.5 border border-white/10 text-gray-400 hover:border-pink-400/50 hover:text-pink-300 transition-all duration-200 rounded-sm cursor-default">
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
                                <p className="pl-4"><span className="text-blue-400">"frontend"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-green-300">React.js</span><span className="text-white/20">', '</span><span className="text-green-300">Next.js</span><span className="text-white/20">', '</span><span className="text-green-300">Tailwind CSS</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"backend"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-yellow-300">Node.js</span><span className="text-white/20">', '</span><span className="text-yellow-300">Express.js</span><span className="text-white/20">', '</span><span className="text-yellow-300">MongoDB</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"cloud"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-yellow-300">AWS</span><span className="text-white/20">', '</span><span className="text-yellow-300">Vercel</span><span className="text-white/20">', '</span><span className="text-yellow-300">Render</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"aiAutomation"</span><span className="text-white/20">:</span> <span className="text-white/20">['</span><span className="text-pink-300">n8n</span><span className="text-white/20">', '</span><span className="text-pink-300">Strapi.js</span><span className="text-white/20">', '</span><span className="text-pink-300">AI Agents</span><span className="text-white/20">'],</span></p>
                                <p className="pl-4"><span className="text-blue-400">"proficiency"</span><span className="text-white/20">:{` {`}</span></p>
                                <p className="pl-8"><span className="text-gray-500">"fullStack"</span><span className="text-white/20">:</span> <span className="text-green-400">92</span><span className="text-white/20">,</span></p>
                                <p className="pl-8"><span className="text-gray-500">"frontend"</span><span className="text-white/20">:</span> <span className="text-green-400">90</span><span className="text-white/20">,</span></p>
                                <p className="pl-8"><span className="text-gray-500">"backend"</span><span className="text-white/20">:</span> <span className="text-green-400">88</span><span className="text-white/20">,</span></p>
                                <p className="pl-8"><span className="text-gray-500">"automation"</span><span className="text-white/20">:</span> <span className="text-green-400">80</span></p>
                                <p className="pl-4"><span className="text-white/20">{`}`}</span></p>
                                <p><span className="text-white/20">{'}'}</span></p>
                                <p className="pt-2 text-green-400">▋<span className="animate-pulse">_</span></p>
                            </div>
                        </div>
        
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            {[
                                { label: 'Projects', value: '9+' },
                                { label: 'Stack', value: 'MERN+' },
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

            {/* ── FOOTER ── */}
            <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 border-t border-white/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-gray-700">
                        <span className="text-green-400">$</span> © 2026 Muhammed Swalih MC - All rights reserved.
                    </div>
                    <div className="flex items-center gap-3">
                        {[
                            { href: 'https://github.com/mhdswalih?tab=repositories', icon: <Github className="w-4 h-4" />, label: 'github' },
                            { href: 'https://www.linkedin.com/in/muhammed-swalih-mc-a39485329/', icon: <Linkedin className="w-4 h-4" />, label: 'linkedin' },
                            { href: 'mailto:ctmswalihmc@gmail.com', icon: <Mail className="w-4 h-4" />, label: 'email' },
                        ].map(({ href, icon, label }) => (
                            <a key={label} href={href} className="flex items-center gap-1.5 px-3 py-1.5 border border-white/10 hover:border-green-400/40 text-gray-600 hover:text-green-400 text-xs rounded transition-all duration-200">
                                {icon} {label}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
