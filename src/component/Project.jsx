import { useState } from "react";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("Android");

  const projects = {
    "Android": [
      {
        title: "Barcode QRCode Scanner",
        img: "/barcode.png",
        description: "Android app to scan barcodes and QR codes quickly.",
        tech: ["Flutter", "MLKit"],
        link: "https://github.com/yourusername/barcode-scanner",
      },
      {
        title: "Money Earning App",
        img: "/money.png",
        description: "Gamified Android app for micro tasks and rewards.",
        tech: ["Flutter", "Firebase"],
        link: "https://github.com/yourusername/money-earning-app",
      },
    ],
    "React": [
      {
        title: "YouTube Video Summarizer",
        img: "/youtube.png",
        description: "Summarizes YouTube videos using transcripts and AI.",
        tech: ["React", "Gemini Flash 1.5 API"],
        link: "https://github.com/Ajayrawati/Youtube_vedio_Summarizer",
      },
      {
        title: "Online Text Share",
        img: "/share.png",
        description: "Realtime text sharing app like Pastebin.",
        tech: ["React", "Firebase"],
        link: "https://online-data-share.vercel.app/",
      },
      {
        title: "PixelBooth",
        img: "/pixel.png",
        description: "Fun photo filter app with pixel effects.",
        tech: ["React", "Canvas API"],
        link: "https://pixel-booth-six.vercel.app/",
      },
    ],
    "Python Scrapper": [
      {
        title: "IMDB Scrapper",
        img: "/imdb.png",
        description: "Scrapes movie ratings and details from IMDB.",
        tech: ["Python", "BeautifulSoup"],
        link: "https://movie-api-omega-three.vercel.app/",
      },
      {
        title: "Instagram Video Downloader",
        img: "/insta.png",
        description: "A script to download Instagram videos directly.",
        tech: ["Python", "Requests"],
        link: "https://www.multipoint.shop/",
      },
    ],
    "Telegram Bot": [
      {
        title: "PDF/Text Summarizer",
        img: "/bot.png",
        description: "Telegram bot that summarizes documents and articles.",
        tech: ["Python", "NLTK", "Telegram API"],
        link: "https://github.com/Ajayrawati/Telegram_Summarize_Bot",
      },
    ],
    "Language Based": [
      {
        title: "Custom Compiler",
        img: "/custom.png",
        description:
          "A basic compiler built from scratch to understand parsing and code generation.",
        tech: ["C++", "Lex", "Yacc"],
        link: "https://github.com/Ajayrawati/PBL_Compiler_Custom_Compiler",
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r border from-[#000033] via-[#000080] to-[#00CFFF] min-h-screen text-white p-8">
      {/* Header */}
      <div className="flex justify-center items-center mb-16">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide drop-shadow-lg">
          Projects
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 justify-center mb-8">
        {Object.keys(projects).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-t-xl transition ${
              activeTab === category
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects[activeTab].map((p, idx) => (
          <div
            key={idx}
            className="bg-white text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.description}</p>

              {/* Tech Tags */}
              {p.tech && (
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* View Project Button */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  🔗 View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
