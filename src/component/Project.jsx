import { useState } from "react";

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState("Android");

  const projects = {
    Android: [
      {
        title: "Barcode QRCode Scanner",
        img: "/barcode.webp",
        description:
          "An Android application that allows users to scan barcodes and QR codes quickly and accurately. Built with Flutter and powered by Google's MLKit for robust scanning performance.",
        tech: ["Flutter", "MLKit"],
        link: "https://github.com/yourusername/barcode-scanner",
      },
      {
        title: "Money Earning App",
        img: "/money.webp",
        description:
          "A gamified Android app where users can complete micro tasks, earn rewards, and track their progress. Designed with Firebase backend for real-time updates and secure authentication.",
        tech: ["Flutter", "Firebase"],
        link: "https://android-five-kappa.vercel.app/earn",
      },
    ],
    React: [
      {
        title: "YouTube Video Summarizer",
        img: "/youtube.webp",
        description:
          "A web app that generates concise summaries of YouTube videos using transcripts and AI-powered language models. Enhances productivity by extracting key points instantly.",
        tech: ["React", "Gemini Flash 1.5 API"],
        link: "https://github.com/Ajayrawati/Youtube_vedio_Summarizer",
      },
      {
        title: "Online Text Share",
        img: "/share.webp",
        description:
          "A real-time collaborative text sharing platform, similar to Pastebin. Users can create, share, and edit snippets instantly with a Firebase-powered backend.",
        tech: ["React", "Firebase"],
        link: "https://online-data-share.vercel.app/",
      },
      {
        title: "PixelBooth",
        img: "/pixel.webp",
        description:
          "A fun and interactive photo filter app where users can apply creative pixel effects to images. Built with React and Canvas API for dynamic rendering.",
        tech: ["React", "Canvas API"],
        link: "https://pixel-booth-six.vercel.app/",
      },
    ],
    "Python Scrapper": [
      {
        title: "IMDB Scrapper",
        img: "/imdb.webp",
        description:
          "A Python-based tool that scrapes movie ratings, reviews, and details directly from IMDB. Useful for building datasets or powering movie-related applications.",
        tech: ["Python", "BeautifulSoup"],
        link: "https://movie-api-omega-three.vercel.app/",
      },
      {
        title: "Instagram Video Downloader",
        img: "/insta.webp",
        description:
          "A lightweight Python script that allows users to download Instagram videos directly with ease. Built using Requests library for simple and reliable fetching.",
        tech: ["Python", "Requests"],
        link: "https://www.multipoint.shop/",
      },
    ],
    "Telegram Bot": [
      {
        title: "PDF/Text Summarizer",
        img: "/bot.webp",
        description:
          "A Telegram bot that summarizes long PDF documents, text files, or articles into concise insights. Integrates NLP techniques with Telegram API for seamless user interaction.",
        tech: ["Python", "NLTK", "Telegram API"],
        link: "https://github.com/Ajayrawati/Telegram_Summarize_Bot",
      },
    ],
    "Language Based": [
      {
        title: "Custom Compiler",
        img: "/custom.webp",
        description:
          "A custom-built compiler project developed from scratch to understand parsing, syntax analysis, and code generation. Implemented using C++ along with Lex and Yacc for lexical and grammar processing.",
        tech: ["C++", "Lex", "Yacc"],
        link: "https://github.com/Ajayrawati/PBL_Compiler_Custom_Compiler",
      },
    ],
  };

  return (
    <div id="projects" className=" bg-gradient-to-r border from-[#000033] via-[#000080] to-[#00CFFF] min-h-screen text-white p-8">
      {/* Header */}
      <div className="flex justify-center items-center mb-16">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide drop-shadow-lg">
          Projects
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 justify-center mb-8 flex-wrap">
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
            className="bg-[#1A1A85] text-black rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition transform"
          >
            {/* Image with fixed height + lazy loading */}
            <div className="w-full h-[220px] bg-gray-200">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-4 space-y-3">
              <h3 className="font-bold text-white text-lg">{p.title}</h3>
              <p className="text-sm text-white">{p.description}</p>

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
