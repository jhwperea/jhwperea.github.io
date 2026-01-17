const SocialLink = ({ href, icon }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white hover:border-accent-cyan hover:bg-accent-cyan/10 hover:scale-110 transition-all duration-300">
        <i className={`fa-brands ${icon} text-xl`}></i>
    </a>
);
window.SocialLink = SocialLink;