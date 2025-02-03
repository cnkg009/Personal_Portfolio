import React from "react";

const FooterSection = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 text-white bg-black font-semibold items-center px-4 md:px-6 border-t border-gray-700">
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Vikas Ranaout. All rights reserved.
      </p>

      <div className="sm:ml-auto flex flex-col sm:flex-row gap-4 sm:gap-6">
        <a
          className="text-xs sm:text-sm hover:underline underline-offset-4"
          href="#"
        >
          Terms of Service
        </a>
        <a
          className="text-xs sm:text-sm hover:underline underline-offset-4"
          href="#"
        >
          Privacy
        </a>
        <a
          className="text-xs sm:text-sm hover:underline underline-offset-4"
          href="#"
        >
          Contact Us
        </a>
        <a
          className="text-xs sm:text-sm hover:underline underline-offset-4"
          href="#"
        >
          About Us
        </a>
      </div>
      <div className="flex gap-4 mt-4 sm:mt-0">
        <a href="#" className="text-white hover:text-gray-400">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.29 3.9A12.14 12.14 0 013 4.79a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.19 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.14 12.14 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.72 8.72 0 0024 4.56a8.59 8.59 0 01-2.54.7z" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.06 8.19 8.96v-6.34h-2.46v-2.62h2.46v-2c0-2.43 1.48-3.76 3.64-3.76 1.04 0 1.93.08 2.19.11v2.54h-1.5c-1.18 0-1.41.56-1.41 1.38v1.8h2.82l-.37 2.62h-2.45v6.34c4.59-.9 8.19-4.55 8.19-8.96 0-5.5-4.46-9.96-9.96-9.96z" />
          </svg>
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-2.5v-10h2.5v10zm-1.25-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.25 11.25h-2.5v-5.5c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06v5.6h-2.5v-10h2.4v1.37h.03c.33-.63 1.14-1.3 2.35-1.3 2.51 0 2.97 1.65 2.97 3.8v6.13z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
