function Skills() {
    const skills = {
        "Frontend": [
            { name: "HTML", img: "/html.png", level: "Advanced" },
            { name: "TailWindCSS", img: "/tailwind.png", level: "Intermediate" },
            { name: "React", img: "/react.png", level: "Intermediate" },
            { name: "Flutter", img: "/pngwing.png", level: "Intermediate" },
        ],
        "Backend": [
            { name: "Flask", img: "/flask.png", level: "Intermediate" },
            { name: "Node.js", img: "/node.png", level: "Intermediate" },
            { name: "Firebase", img: "/firebase.png", level: "Intermediate" },
            { name: "MongoDB", img: "/mongo.png", level: "Beginner" },
        ],
        "Frameworks & Scraping": [

            { name: "Web Scraping", img: "/selenium.png", level: "Intermediate" },
        ],
        "Tools": [
            { name: "Git", img: "/git.png", level: "Intermediate" },
            { name: "Docker", img: "/docker.png", level: "Beginner" },
        ],
        "Programming": [
            { name: "C++", img: "/cpp.png", level: "Advanced" },
            { name: "Python", img: "/python.png", level: "Intermediate" },
            { name: "Java", img: "/java.png", level: "Beginner" },
        ],
    };

    // color codes for skill levels
    const levelColors = {
        Beginner: "bg-red-500",
        Intermediate: "bg-yellow-400",
        Advanced: "bg-green-500",
    };

    return (
        <div className="border bg-gradient-to-r from-[#000033] via-[#000080] to-[#00CFFF] min-h-screen text-white py-16 px-8">

            {/* Heading */}
            <div className="flex justify-center items-center mb-16">
                <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide drop-shadow-lg">
                    Skills
                </h1>
            </div>

            {/* Legend for levels */}
            <div className="flex justify-center gap-8 mb-12">
                {Object.keys(levelColors).map((level) => (
                    <div key={level} className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-full ${levelColors[level]}`} />
                        <span className="text-white text-lg">{level}</span>
                    </div>
                ))}
            </div>

            {/* Skill Categories */}
            <div className="space-y-16">
                {Object.keys(skills).map((category, idx) => (
                    <div key={idx}>
                        {/* Category Title */}
                        <h2 className="text-3xl font-semibold mb-8 text-cyan-300 tracking-wider uppercase">
                            {category}
                        </h2>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {skills[category].map((skill, i) => (
                                <div
                                    key={i}
                                    className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center shadow-xl transform hover:scale-110 hover:shadow-cyan-500/50 transition duration-300"
                                >
                                    {/* Skill Icon */}
                                    <img
                                        src={skill.img}
                                        alt={skill.name}
                                        className="w-16 h-16 mb-4 drop-shadow-lg"
                                    />
                                    <p className="text-lg font-medium text-white">{skill.name}</p>

                                    {/* Level Indicator Circle */}
                                    <span
                                        className={`absolute top-3 right-3 w-4 h-4 rounded-full ${levelColors[skill.level]}`}
                                        title={skill.level}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
