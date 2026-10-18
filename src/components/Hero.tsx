import { useState, useEffect } from 'react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import {
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiTypescript
} from 'react-icons/si';
import portrait from '../assets/Grayscale Curly-Haired Portrait Cutout.png';
import resume from '../assets/Resume/MuhamedSwalihMc New.pdf';

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' }
];

const STACK = [
    { label: 'React', icon: SiReact },
    { label: 'Next.js', icon: SiNextdotjs },
    { label: 'Node.js', icon: SiNodedotjs },
    { label: 'MongoDB', icon: SiMongodb },
    { label: 'PostgreSQL', icon: SiPostgresql },
    { label: 'TypeScript', icon: SiTypescript }
];

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const show = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

    return (
        <section
            id="home"
            className="relative z-10 w-full min-h-screen overflow-hidden bg-cream text-charcoal font-sans flex flex-col"
        >
            {/* paper texture */}
            <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                    backgroundImage:
                        'radial-gradient(circle at 1px 1px, rgba(32,35,38,0.14) 1px, transparent 0)',
                    backgroundSize: '28px 28px'
                }}
            />

            {/* ── NAVBAR ── */}
            <nav className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-6 shrink-0">
                <div className={`flex items-center justify-between transition-all duration-700 ${show}`}>
                    {/* logo */}
                    <a href="#home" className="group flex items-baseline text-3xl font-black tracking-tight text-charcoal">
                        M<span className="text-accent">S</span>
                        <span className="block h-[3px] w-0 bg-accent group-hover:w-full transition-all duration-300 -translate-y-1" />
                    </a>

                    {/* links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link, i) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className={`relative text-sm font-medium transition-colors duration-200 ${
                                        i === 0 ? 'text-accent' : 'text-charcoal/60 hover:text-charcoal'
                                    }`}
                                >
                                    {link.label}
                                    {i === 0 && (
                                        <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-accent rounded-full" />
                                    )}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="mailto:ctmswalihmc@gmail.com"
                                className="text-sm font-medium text-charcoal/60 hover:text-charcoal transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* download cv */}
                    <a
                        href={resume}
                        download="Muhammed Swalih MC Resume.pdf"
                        className="group flex items-center gap-2 bg-charcoal hover:bg-accent text-surface text-xs font-semibold tracking-wide px-5 py-3 rounded-full transition-colors duration-300"
                    >
                        Download CV
                        <Download className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </nav>

            {/* ── HERO ── */}
            <div className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16 pt-6 pb-8 lg:pt-6 lg:pb-8 grid grid-cols-1 lg:grid-cols-[1.16fr_0.84fr] gap-10 lg:gap-6 items-center lg:items-stretch">

                {/* Left */}
                <div className={`flex flex-col items-start h-full transition-all duration-1000 delay-200 ${show}`}>
                    <div className="flex-1 flex flex-col justify-start lg:justify-center">
                    <p className="text-lg sm:text-xl font-medium text-charcoal">
                        Hi, I&rsquo;m
                    </p>

                    <h1 className="mt-5 font-display font-extrabold tracking-tight leading-[0.88]">
                        <span className="block text-[clamp(2.75rem,8vw,5.5rem)] text-charcoal">Muhammed</span>
                        <span className="block text-[clamp(2.75rem,8vw,5.5rem)] text-accent">Swalih</span>
                    </h1>

                    <p className="mt-4 text-sm sm:text-lg font-bold uppercase tracking-[0.28em] text-charcoal/80">
                        Full Stack Developer
                    </p>

                    <p className="mt-3 max-w-md text-charcoal/60 text-sm sm:text-base font-medium leading-relaxed">
                        I build modern web applications with clean code, creative UI and a focus on
                        real-world impact.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2.5 bg-accent hover:bg-accent/85 text-surface text-sm font-semibold px-7 py-4 rounded-full transition-colors duration-300"
                        >
                            View My Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-semibold text-charcoal border border-beige hover:border-accent hover:text-accent px-7 py-4 rounded-full transition-colors duration-300"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3">
                        {STACK.map(({ label, icon: Icon }) => (
                            <span
                                key={label}
                                className="flex items-center gap-2 text-[13px] font-medium text-charcoal/80 hover:text-charcoal transition-colors duration-200 cursor-default"
                            >
                                <Icon className="w-5 h-5" />
                                {label}
                            </span>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Right — portrait */}
                <div
                    className={`relative self-center -mb-[16%] transition-all duration-1000 delay-400 lg:absolute lg:inset-y-0 lg:right-0 lg:mb-0 lg:self-auto lg:flex lg:w-[63vw] lg:max-w-[950px] lg:items-end lg:justify-center ${show}`}
                >
                    {/* handwritten note — beside the head */}
                    <div className="absolute top-[27%] right-[11%] z-20 hidden sm:block">
                        <p className="font-hand text-[28px] leading-[1.15] text-charcoal -rotate-3 text-right">
                            Better
                            <br />
                            Code
                            <br />
                            Better
                            <br />
                            Tomorrow
                        </p>
                        <svg
                            className="w-11 h-11 ml-auto mt-2 text-charcoal"
                            viewBox="0 0 40 40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M34 6c1 13-5 23-19 27" />
                            <path d="M15 33 8 35l2-7" />
                        </svg>
                    </div>

                    <div className="relative flex justify-center lg:w-full">
                        <div className="relative w-[88%] max-w-[520px] lg:w-[85%] lg:max-w-none lg:translate-y-0">
                            {/* soft peach panel behind the head */}
                            <div className="absolute left-[20%] top-[32%] h-[50%] w-[23%] bg-[color-mix(in_srgb,var(--color-accent)_8%,var(--color-cream))]" />

                            {/* long diagonal line crossing to the shoulder */}
                            <div className="absolute left-[12%] top-[43%] w-[41%] h-[2px] rounded-full bg-accent/45 rotate-[34deg] origin-left" />

                            {/* faint vertical accent line */}
                            <div className="absolute left-[19.7%] top-[48%] h-[24%] w-[2px] rounded-full bg-accent/45" />

                            <div className="absolute left-[20%] top-[48%] w-[15%] h-[2px] rounded-full bg-accent/45" />

                            {/* orange disc behind the head */}
                            <div className="absolute left-[68%] top-[42%] w-[50%] aspect-square -translate-x-1/2 rounded-full bg-accent" />

                            {/* photo */}
                            <img
                                src={portrait}
                                alt="Muhammed Swalih MC"
                                className="relative w-full drop-shadow-[0_40px_60px_rgba(32,35,38,0.16)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SCROLL BUTTON ── */}
            <a
                href="#about"
                aria-label="Scroll down"
                className="absolute bottom-8 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-surface text-charcoal border border-beige shadow-[0_10px_24px_rgba(32,35,38,0.14)] hover:bg-accent hover:border-accent hover:text-surface transition-colors duration-300"
            >
                <MousePointer2 className="w-5 h-5 animate-bounce" />
            </a>
        </section>
    );
};

export default Hero;