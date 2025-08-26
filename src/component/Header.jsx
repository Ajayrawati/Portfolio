

function Header() {
    return (
        <div className="bg-gradient-to-r from-[#000033] via-[#000080] via-[#0047AB] to-[#00CFFF] text-white  font-sans">

            <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
                <h1 className="text-2xl font-bold">ajay<span className="text-orange-500">.</span></h1>
                <ul className="flex gap-8 text-gray-300">
                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                    <li className="hover:text-orange-500 cursor-pointer">Skills</li>
                    <li className="hover:text-orange-500 cursor-pointer">Experience</li>
                    <li className="hover:text-orange-500 cursor-pointer">Contact</li>
                </ul>
                <a
                    href="/resume.pdf"
                    className="border border-gray-950 px-4 py-2 rounded-lg hover:border-blue-900 hover:text-blue-900 transition"
                >
                    Download Resume
                </a>
            </nav>
        </div>
    );
}

export default Header;
