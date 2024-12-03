import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 fixed bottom-0 left-0 right-0">
      <div className="text-sm flex flex-col md:flex-row justify-between items-center border-t py-7 px-5 md:px-20">
        <div className="text-[#2429AF]">
          Kulsoom Adnan ⏤ {new Date().getFullYear()}
        </div>
        <nav className="flex flex-row gap-5">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="https://www.artstation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            ArtStation
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

