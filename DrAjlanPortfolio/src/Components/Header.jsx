import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F9FAFB] border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">

        {/* LOGO */}
        <a
          href="/"
          className="text-blue-700 text-2xl md:text-3xl transition-opacity duration-300 hover:opacity-90"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            letterSpacing: "0.5px",
          }}
        >
          Ajlan Al Zaki
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-lg">
          {["Home", "About", "Advisory", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-700 transition-colors duration-200 hover:text-blue-800"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <button
          className="hidden md:block px-6 py-2 rounded-full text-sm font-medium
                     bg-blue-700 text-white transition-colors duration-300
                     hover:bg-blue-800"
        >
          Contact me
        </button>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`h-[2px] w-6 bg-blue-700 transition-all duration-300
            ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-blue-700 transition-all duration-300
            ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-blue-700 transition-all duration-300
            ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-6 px-6 py-6 bg-white border-t">
          {["Home", "About", "Advisory", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="text-blue-700 text-lg font-medium hover:text-blue-800"
            >
              {item}
            </a>
          ))}

          <button
            className="mt-4 px-6 py-3 rounded-full text-sm font-medium
                       bg-blue-700 text-white hover:bg-blue-800"
          >
            Contact me
          </button>
        </nav>
      </div>
    </header>
  );
}
