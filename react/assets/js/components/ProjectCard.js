const ProjectCard = ({ work }) => (
    <a href={work.url} target="_blank" className="group block h-full">
        <article className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-accent-cyan/50 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.2)]">
            <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10"></div>
                <img src={`../assets/img/works/${work.src}.png`} alt={work.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 right-4 z-20 bg-dark/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono text-accent-cyan border border-accent-cyan/30">
                    PROJECT
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent-cyan transition-colors">{work.name}</h3>
                <p className="text-slate-400 text-sm flex-1 leading-relaxed">
                    Check out this project. Click to view live demo or case study.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-accent-cyan uppercase tracking-wider">
                    View Project <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        </article>
    </a>
);
window.ProjectCard = ProjectCard;