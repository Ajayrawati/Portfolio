import { ReactTyped } from "react-typed";


export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-[#000033] via-[#000080] via-[#0047AB] to-[#00CFFF] text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between  py-20 max-w-7xl mx-auto  w-full">

        {/* Left Content */}
        <div className="max-w-lg">
          <h2 className="text-2xl text-gray-200">
            Hey, I am <span className="text-orange-500 font-semibold">Ajay</span>
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4">
            <ReactTyped
              strings={[
                "Building Ideas into Reality",
                "Building My Version Of it",
                "Building the Future Step by Step",
              ]}
              typeSpeed={60}
              backSpeed={50}
              loop
            />
          </h1>

          <p className="text-gray-200 mt-4">
            Passionate about creativity, growth, and turning ideas into impactful results while staying curious and adaptable.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="mailto:ajay@example.com"
              className="px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Hire Me
            </a>
            <a
              href="#"
              className="px-6 py-3  border-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500 transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Content (Avatar + Floating Icons) */}
        <div className="relative mt-10 md:mt-0 flex justify-end w-full  mx-0">
          <img
            src="/character.webp"
            alt="Avatar"
            className="w-[550px] py-0.5 drop-shadow-[0_0_20px_rgba(255,100,0,0.6)]"
          />

          {/* Floating Tech Icons */}
          <div className="absolute top-10 left-[15%]">
            <img src="/html.webp" alt="HTML" className="w-[100px] animate-bounce" />
          </div>
          <div className="absolute bottom-16 left-[10%]">
            <img src="/bulb.webp" alt="CSS" className="w-[100px] animate-bounce" />
          </div>
          <div className="absolute bottom-10 right-24">
            <img src="/node.webp" alt="Node.js" className="w-[100px] animate-bounce" />
          </div>
          <div className="absolute top-20 right-40">
            <img src="/android.webp" alt="Figma" className="w-[50px] animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
