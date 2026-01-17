const SkillCard = ({ skill }) => (
    <div className="glass-card p-2 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-all duration-300 group cursor-default border-slate-800 hover:border-accent-violet/50">
        <div className="w-24 h-24 p-1 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img src={`../assets/img/skills/${skill.src}.png`} alt={skill.description} className="w-full h-full object-contain" />
        </div>
        <span className="text-xs font-medium text-slate-300 group-hover:text-white">{skill.description}</span>
    </div>
);
window.SkillCard = SkillCard;