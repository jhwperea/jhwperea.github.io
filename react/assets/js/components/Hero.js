const Hero = () => {
    const SocialLink = window.SocialLink;
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative">
            <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 text-center md:text-left animate-slide-up">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent-cyan uppercase bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                        Available for hire
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                        Jhonier Alejandro<br />
                        <span className="text-gradient">Perea Derazo</span>
                    </h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">Software Developer & Web Designer based in Colombia. <br />Crafting digital experiences with code and creativity.</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                        <SocialLink href="https://github.com/jhwperea" icon="fa-github" />
                        <SocialLink href="https://www.linkedin.com/in/jhonierperea/" icon="fa-linkedin" />
                        <SocialLink href="https://wa.me/573013127037" icon="fa-whatsapp" />
                        <a href="mailto:jhwperea@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white hover:border-accent-cyan hover:bg-accent-cyan/10 hover:scale-110 transition-all duration-300">
                            <i className="fa-regular fa-envelope text-xl"></i>
                        </a>
                    </div>
                    <a href="../assets/Cv-JhonierPerea.pdf" target="_blank"
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-dark font-bold hover:bg-accent-cyan hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                        <i className="fa-regular fa-file-pdf"></i> Download CV
                    </a>
                </div>
                <div className="order-1 md:order-2 flex justify-center relative animate-fade-in">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/30 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border-2 border-accent-violet/30 animate-[spin_15s_linear_infinite_reverse]"></div>
                        <img src="../assets/img/p.jpeg" alt="Jhonier Perea" className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full border-4 border-dark shadow-2xl" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 animate-bounce text-slate-500">
                <i className="fa-solid fa-arrow-down"></i>
            </div>
        </section>
    );
};
window.Hero = Hero;
