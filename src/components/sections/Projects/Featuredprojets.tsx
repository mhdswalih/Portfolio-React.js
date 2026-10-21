import type { CSSProperties, ReactNode } from 'react';
import { Github, ArrowRight, Sparkles } from 'lucide-react';

/* ─────────────────────────────────────────────
   Edit your projects here
   ───────────────────────────────────────────── */
type Project = {
    title: string;
    type?: string;
    description: string;
    tech: string[];
    demo: string;
    code: string;
    scene: 'eco' | 'edu' | 'menu';
};

const projects: Project[] = [
    {
        title: 'Ecoblend',
        type: 'Web Application',
        description:
            'A waste management platform to connect communities, track waste collection and promote a cleaner environment.',
        tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'],
        demo: '#',
        code: '#',
        scene: 'eco',
    },
    {
        title: 'EduLift Institute',
        description:
            'An educational platform for online courses, student management and digital learning.',
        tech: ['React', 'Node.js', 'MongoDB'],
        demo: '#',
        code: '#',
        scene: 'edu',
    },
    {
        title: 'MenuTask',
        description:
            'A restaurant management system for menu, orders, and customer management.',
        tech: ['Next.js', 'PostgreSQL', 'Prisma'],
        demo: '#',
        code: '#',
        scene: 'menu',
    },
];

/* ─────────────────────────────────────────────
   Mockup "images" — drawn in code, no assets needed.
   To use a real screenshot instead, pass `image` to <Scene />.
   ───────────────────────────────────────────── */

const Leaf = ({ className = '', style }: { className?: string; style?: CSSProperties }) => (
    <svg viewBox="0 0 100 140" className={className} style={style} aria-hidden="true">
        <path d="M50 4C84 34 92 84 50 136C8 84 16 34 50 4Z" fill="currentColor" />
        <path d="M50 14V130" stroke="rgba(255,255,255,.18)" strokeWidth="2" />
    </svg>
);

const Plant = ({ className = '', dark = false }: { className?: string; dark?: boolean }) => (
    <div className={`absolute ${className}`}>
        <div className="relative h-full w-full">
            <Leaf className="absolute left-[8%] top-[6%] h-[46%] -rotate-[24deg] text-[#3b3f3a]" />
            <Leaf className="absolute left-[34%] top-0 h-[54%] text-[#2c302c]" />
            <Leaf className="absolute left-[56%] top-[10%] h-[44%] rotate-[22deg] text-[#454a44]" />
            <Leaf className="absolute left-[20%] top-[28%] h-[40%] -rotate-[8deg] text-[#353934]" />
            <div
                className={`absolute bottom-0 left-[18%] h-[26%] w-[64%] rounded-b-[18px] rounded-t-[4px] ${
                    dark ? 'bg-[#2a2c2e]' : 'bg-[#e9e7e2]'
                }`}
            />
        </div>
    </div>
);

const Laptop = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div
        className={`absolute ${className}`}
        style={{ transform: 'perspective(1400px) rotateY(-10deg) rotateX(2deg)' }}
    >
        <div className="rounded-t-[10px] bg-[#17191b] p-[2.2%] shadow-[0_24px_40px_rgba(0,0,0,0.45)]">
            <div
                className="aspect-[16/10] w-full overflow-hidden rounded-[3px] bg-white"
                style={{ containerType: 'inline-size' }}
            >
                {children}
            </div>
        </div>
        <div className="-mx-[5%] h-[7px] rounded-b-[12px] bg-gradient-to-b from-[#d4d4d4] to-[#8a8a8a] shadow-[0_8px_14px_rgba(0,0,0,0.35)]" />
    </div>
);

/* — screen: Ecoblend (light, green) — */
const EcoScreen = () => (
    <div className="flex h-full w-full flex-col bg-[#f6f7f2] text-[#16231a]">
        <div className="flex items-center gap-[2cqw] px-[4cqw] py-[2cqw]">
            <span className="text-[2.6cqw] font-extrabold text-[#2f6b3a]">Ecoblend</span>
            <span className="ml-auto flex gap-[2cqw] text-[1.8cqw] text-[#16231a]/60">
                <i className="not-italic">Home</i>
                <i className="not-italic">About</i>
                <i className="not-italic">Pickups</i>
                <i className="not-italic">Contact</i>
            </span>
            <span className="rounded-full bg-[#2f6b3a] px-[2cqw] py-[0.8cqw] text-[1.7cqw] text-white">Get started</span>
        </div>
        <div className="grid flex-1 grid-cols-[1fr_1.05fr] items-center gap-[3cqw] px-[4cqw] pb-[4cqw]">
            <div>
                <p className="text-[5.6cqw] font-extrabold leading-[1.05]">
                    Cleaner
                    <br />
                    Communities
                    <br />
                    <span className="text-[#2f6b3a]">Greener Tomorrow</span>
                </p>
                <div className="mt-[2.4cqw] space-y-[0.8cqw]">
                    <i className="block h-[0.7cqw] w-[90%] rounded bg-[#16231a]/15" />
                    <i className="block h-[0.7cqw] w-[75%] rounded bg-[#16231a]/15" />
                </div>
                <div className="mt-[3cqw] flex gap-[1.5cqw]">
                    <span className="rounded-full bg-[#2f6b3a] px-[2.4cqw] py-[1cqw] text-[1.7cqw] text-white">Join now</span>
                    <span className="rounded-full border border-[#16231a]/25 px-[2.4cqw] py-[1cqw] text-[1.7cqw]">Learn more</span>
                </div>
            </div>
            <div className="relative h-full min-h-[24cqw] overflow-hidden rounded-[3cqw] rounded-bl-[8cqw] bg-gradient-to-b from-[#cfe3ef] via-[#dcebd0] to-[#6f9a4b]">
                <div className="absolute bottom-0 left-[22%] h-[38%] w-[46%] rounded-t-[30%] bg-gradient-to-b from-[#8a7b63] to-[#5d523f]" />
                <div className="absolute bottom-[34%] left-[40%] h-[26%] w-[3.4%] bg-[#5a4631]" />
                <div className="absolute bottom-[48%] left-[27%] h-[34%] w-[36%] rounded-full bg-[#3f7a35] shadow-[inset_-1cqw_-1cqw_3cqw_rgba(0,0,0,0.25)]" />
                <div className="absolute bottom-[58%] left-[44%] h-[22%] w-[24%] rounded-full bg-[#53913f]" />
            </div>
        </div>
    </div>
);

/* — screen: EduLift (light, blue) — */
const EduScreen = () => (
    <div className="flex h-full w-full flex-col bg-[#f4f6fb] text-[#13203a]">
        <div className="flex items-center gap-[2cqw] px-[4cqw] py-[2.2cqw]">
            <span className="text-[2.8cqw] font-extrabold">EduLift</span>
            <span className="ml-auto flex gap-[2cqw] text-[1.9cqw] text-[#13203a]/55">
                <i className="not-italic">Courses</i>
                <i className="not-italic">Mentors</i>
                <i className="not-italic">Pricing</i>
            </span>
            <span className="rounded-md bg-[#2f6bff] px-[2cqw] py-[0.9cqw] text-[1.8cqw] text-white">Sign up</span>
        </div>
        <div className="grid flex-1 grid-cols-[1.1fr_1fr] items-center gap-[2cqw] px-[4cqw]">
            <div>
                <p className="text-[1.9cqw] text-[#2f6bff]">Learn anywhere</p>
                <p className="mt-[1cqw] text-[6.2cqw] font-extrabold leading-[1.05]">
                    Better Learning
                    <br />
                    Brighter Futures
                </p>
                <span className="mt-[3cqw] inline-block rounded-md bg-[#2f6bff] px-[2.6cqw] py-[1.2cqw] text-[1.9cqw] text-white">
                    Browse courses
                </span>
            </div>
            <div className="relative h-[85%] self-end">
                <div className="absolute inset-x-[8%] bottom-0 top-[10%] rounded-t-[4cqw] bg-gradient-to-b from-[#e5ecff] to-[#c8d6ff]" />
                <div className="absolute bottom-[34%] left-[34%] h-[22%] w-[30%] rounded-full bg-[#e2b48c]" />
                <div className="absolute bottom-[50%] left-[33%] h-[10%] w-[32%] rounded-t-full bg-[#2b2118]" />
                <div className="absolute bottom-0 left-[22%] h-[38%] w-[56%] rounded-t-[4cqw] bg-[#5b4a3a]" />
                <div className="absolute bottom-0 left-[40%] h-[30%] w-[20%] bg-[#e9edf5]" />
            </div>
        </div>
    </div>
);

/* — screen: MenuTask (dark dashboard) — */
const MenuScreen = () => (
    <div className="flex h-full w-full bg-[#101214] text-white/80">
        <div className="w-[16%] space-y-[2cqw] border-r border-white/10 p-[2cqw]">
            <span className="block text-[2.2cqw] font-bold text-white">MenuTask</span>
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <i key={i} className={`block h-[1.6cqw] rounded ${i === 1 ? 'bg-[#ff6a2b]/80' : 'bg-white/10'}`} />
            ))}
        </div>
        <div className="flex-1 p-[2.4cqw]">
            <div className="flex items-center justify-between">
                <span className="text-[2.4cqw] font-semibold text-white">Orders</span>
                <i className="block h-[2.4cqw] w-[14cqw] rounded bg-white/10" />
            </div>
            <div className="mt-[2cqw] grid grid-cols-3 gap-[1.6cqw]">
                {['128', '24', '$4.2k'].map((v) => (
                    <div key={v} className="rounded-md border border-white/10 bg-white/[0.04] p-[1.6cqw]">
                        <i className="block h-[0.9cqw] w-[40%] rounded bg-white/15" />
                        <p className="mt-[1.2cqw] text-[3.2cqw] font-bold text-white">{v}</p>
                    </div>
                ))}
            </div>
            <div className="mt-[2cqw] space-y-[1.2cqw]">
                {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center gap-[1.6cqw] rounded border border-white/10 px-[1.6cqw] py-[1.2cqw]">
                        <i className="block h-[1.6cqw] w-[1.6cqw] rounded-full bg-[#ff6a2b]/70" />
                        <i className="block h-[0.9cqw] w-[30%] rounded bg-white/20" />
                        <i className="ml-auto block h-[0.9cqw] w-[12%] rounded bg-white/10" />
                        <i className="block h-[1.4cqw] w-[8cqw] rounded-full bg-emerald-400/30" />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const screens = { eco: <EcoScreen />, edu: <EduScreen />, menu: <MenuScreen /> };

/* Background photo-style scene + laptop */
const Scene = ({
    scene,
    image,
    size = 'large',
    alt,
}: {
    scene: Project['scene'];
    image?: string;
    size?: 'large' | 'small';
    alt: string;
}) => {
    if (image) {
        return <img src={image} alt={alt} className="h-full w-full object-cover" />;
    }
    const dark = scene === 'menu';
    return (
        <div
            role="img"
            aria-label={alt}
            className={`relative h-full w-full overflow-hidden ${
                dark
                    ? 'bg-gradient-to-br from-[#4a4c4f] via-[#2c2e30] to-[#181a1c]'
                    : 'bg-gradient-to-br from-[#b9b9b8] via-[#8f908f] to-[#5d5e5e]'
            }`}
        >
            {/* soft window light */}
            <div className="absolute -left-[10%] top-0 h-full w-[45%] bg-white/10 blur-2xl" />
            {/* blurred background plant + foreground plant */}
            <Plant dark={dark} className="-left-[2%] bottom-[18%] h-[62%] w-[26%] opacity-90 blur-[1.5px]" />
            <Plant dark={dark} className="-right-[3%] bottom-[22%] h-[48%] w-[20%] opacity-50 blur-[4px]" />
            {/* desk */}
            <div className="absolute inset-x-0 bottom-0 h-[24%] bg-gradient-to-b from-[#3c3a38] to-[#1f1e1d]" />
            <Laptop
                className={
                    size === 'large'
                        ? 'bottom-[9%] left-[20%] w-[66%]'
                        : 'bottom-[12%] left-[22%] w-[68%]'
                }
            >
                {screens[scene]}
            </Laptop>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
    );
};

/* ─────────────────────────────────────────────
   Section
   ───────────────────────────────────────────── */
const FeaturedProjects = () => {
    const [main, ...rest] = projects;

    return (
        <section
            id="projects"
            className="relative  z-10 w-full overflow-hidden bg-cream py-6 font-sans text-charcoal lg:py-8"
        >
            <div className="relative z-10 mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-10">
                {/* header */}
                <div className="mb-6 grid grid-cols-1 items-end gap-8 lg:mb-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10">
                    <div>
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-semibold">02</span>
                            <span className="h-px w-40 bg-charcoal/50 sm:w-52" />
                        </div>
                        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-accent">My Work</p>
                        <h2 className="mt-2 font-display text-[clamp(2.75rem,6.2vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight text-black">
                            Featured <span className="text-accent">Projects</span>
                        </h2>
                    </div>

                    <div className="flex items-center justify-between gap-6 lg:pb-3">
                        <p className="max-w-[17rem] text-[13px] leading-[1.7] text-charcoal/60">
                            Here are some of the projects I've worked on. Each project reflects real
                            problems, modern technologies and a focus on clean design and performance.
                        </p>
                        <a
                            href="https://github.com/mhdswalih?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-charcoal/40 px-5 py-2.5 text-xs font-semibold transition-colors duration-300 hover:bg-charcoal hover:text-cream"
                        >
                            View All Projects
                            <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* 01 — featured */}
                    <article className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-charcoal/10 bg-[#f7f3e9] p-2.5 lg:grid-cols-[1.1fr_1fr]">
                        <div className="relative h-56 overflow-hidden rounded-xl sm:h-64 lg:h-[17rem]">
                            <Scene scene={main.scene} alt={`${main.title} preview`} />
                            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-semibold text-cream">
                                <Sparkles className="h-3.5 w-3.5" /> Featured
                            </span>
                        </div>

                        <div className="flex flex-col justify-center px-6 py-6 lg:px-8">
                            <div className="flex items-center gap-4">
                                <span className="text-xs font-semibold">01</span>
                                <span className="h-px w-20 bg-charcoal/30" />
                                <span className="ml-auto text-xs text-charcoal/50">{main.type}</span>
                            </div>
                            <h3 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-black lg:text-[2rem]">
                                {main.title}
                            </h3>
                            <p className="mt-3 max-w-md text-[15px] leading-[1.7] text-charcoal/60">{main.description}</p>
                            <div className="mt-5 flex flex-wrap gap-2.5">
                                {main.tech.map((t) => (
                                    <span key={t} className="rounded-full bg-charcoal/[0.07] px-4 py-1.5 text-xs font-medium text-charcoal/70">
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-7 flex flex-wrap items-center gap-4">
                                <a
                                    href={main.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-[#d94e1b]"
                                >
                                    Live Site
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                                <a
                                    href={main.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:text-accent"
                                >
                                    <Github className="h-5 w-5" /> View Code
                                </a>
                            </div>
                        </div>
                    </article>

                    {/* 02 & 03 */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {rest.map((p, i) => (
                            <article
                                key={p.title}
                                className="grid grid-cols-1 overflow-hidden rounded-2xl border border-charcoal/10 bg-[#f7f3e9] p-2.5 sm:grid-cols-[44%_1fr]"
                            >
                                <div className="h-48 overflow-hidden rounded-xl sm:h-auto sm:min-h-[13rem]">
                                    <Scene scene={p.scene} size="small" alt={`${p.title} preview`} />
                                </div>
                                <div className="flex flex-col px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-semibold">{String(i + 2).padStart(2, '0')}</span>
                                        <span className="h-px w-12 bg-charcoal/30" />
                                        <span className="ml-auto inline-flex items-center gap-1 rounded-full border border-accent/40 bg-white/60 px-2.5 py-0.5 text-[11px] font-semibold text-accent">
                                            <Sparkles className="h-3 w-3" /> Live
                                        </span>
                                    </div>
                                    <h3 className="mt-4 font-display text-[1.4rem] font-extrabold tracking-tight text-black">{p.title}</h3>
                                    <p className="mt-2 text-[13px] leading-[1.65] text-charcoal/60">{p.description}</p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span key={t} className="rounded-full bg-charcoal/[0.07] px-3.5 py-1 text-[11px] font-medium text-charcoal/65">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                                        <a
                                            href={p.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-xs font-semibold text-cream transition-colors duration-300 hover:bg-[#d94e1b]"
                                        >
                                            Live Site
                                            <ArrowRight className="h-3.5 w-3.5" />
                                        </a>
                                        <a
                                            href={p.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300 hover:text-accent"
                                        >
                                            <Github className="h-4 w-4" /> View Code
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;