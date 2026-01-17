const { useState, useEffect } = React;
const Background = window.Background;
const Navbar = window.Navbar;
const Hero = window.Hero;
const ProjectCard = window.ProjectCard;
const SkillCard = window.SkillCard;
const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [works, setWorks] = useState([]);
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        const fetchData = async () => {
            try {
                const skillsRes = await fetch('../assets/js/skills.json');
                const skillsData = await skillsRes.json();
                setSkills(skillsData);
                const worksRes = await fetch('../assets/js/works.json');
                const worksData = await worksRes.json();
                setWorks(worksData);
            } catch (error) {
                console.error("Error loading data:", error);
            }
        };
        fetchData();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="text-slate-200">
            <Background/>
            <main>
                <Hero/>
                <section id="works" className="py-24 px-6 md:px-12 relative">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
                            Selected <span className="text-gradient">Works</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {works.map((work, index) => (
                                <ProjectCard key={index} work={work}/>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="skills" className="py-24 px-6 md:px-12 relative bg-darker/50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-center">
                            Tech <span className="text-gradient">Stacks</span>
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-6 lg:gap-8">
                            {skills.map((skill, index) => (
                                <SkillCard key={index} skill={skill}/>
                            ))}
                        </div>
                    </div>
                </section>
                <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-800 mt-12 bg-darker">
                    <p>© {new Date().getFullYear()} Jhonier Alejandro Perea. Built with React & Tailwind.</p>
                </footer>
            </main>
        </div>
    );
};
window.App = App;