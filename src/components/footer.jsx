import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white bottom-0 min-h-[20vh]">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-bold">MyBlogss</h2>
            <p className="mt-2 text-sm text-gray-400">
              Building awesome experiences with React & Tailwind.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Services</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact or Social */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: <a href="mailto:info@mybrand.com" className="hover:text-white">b230065@nitsikkim.ac.in</a></li>
              <li>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 8522840158</a></li>
              <li><a href="https://www.linkedin.com/in/s-rajesh-reddy/" className="hover:text-white">LinkedIn</a></li>
              <li><a href="https://github.com/SiddareddyRajeshReddy" className="hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} MyBlogss. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
