import { Link } from 'react-router-dom';
import { Camera, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 group -ml-3">
            {/* <Link to="/" className="flex items-center space-x-2 group"> */}
            {/* <Camera className="w-8 h-8 text-gray-900" />
            <span className="text-2xl font-bold text-gray-900">LensArt</span> */}
            <img src="/images/Parshwa shah Photography(White).png" alt="LensArt Logo" className="w-28 h-28 rounded-full object-cover"/>
            </Link >
            <p className="text-gray-400 mb-4 max-w-md">
              Capturing your precious moments with artistry and passion. Professional photography services for weddings, events, portraits, and corporate needs.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a> */}
              <a href="https://www.instagram.com/parshwashahphotography/?igsh=MW8yenY4OHpxeWc3cQ%3D%3D#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">+91 9662333135</span>
              </li>
              <li className="flex items-center space-x-3 max-w-full">
                <Mail className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-400 whitespace-nowrap">
                  Parshwashahphotography@gmail.com
                </span>
              </li>




              {/* <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <span className="text-gray-400">123 Photography Lane, Studio City, CA 90210</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ParshwaShah Photography. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
