import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiPhone, FiClock, FiCalendar } from "react-icons/fi";
import googlePlay from "../assets/google-play.png";
import appStore from "../assets/app-store.png"; 

const Footer = () => {
  return (
    <footer className="bg-accentForest border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + Tagline */}
        <div>
          <h2 className="text-primaryMint text-2xl font-semibold">
            Swan Botanicals
          </h2>
          <p className="text-sm mt-2 text-primaryIvory">
            When botanical meet quality, people can't help but notice.
            <br />
            Now on Android & iOS
          </p>
          <div className="flex gap-3 mt-4">
            <img src={googlePlay} alt="Google Play" className="h-11" />
            <img src={appStore} alt="App Store" className="h-10" />
          </div>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-primaryMint font-semibold mb-3">CUSTOMER CARE</h3>
          <ul className="space-y-2 text-sm text-primaryIvory">
            <li>My Account</li>
            <li>FAQ’s | Exchange and Refund Policy</li>
            <li>Rewards</li>
            <li>Shipping</li>
            <li>Track Shipment</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-primaryMint font-semibold mb-3">ABOUT</h3>
          <ul className="space-y-2 text-sm text-primaryIvory">
            <li>About Us</li>
            <li>Store Locator</li>
            <li>Conscious Beauty</li>
            <li>Blog</li>
            <li>Rewards</li>
            <li>Ask Us</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-3">
          <div className="flex gap-4 text-primaryIvory text-xl">
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
          </div>
          <p className="text-sm text-primaryIvory">
            <a href="mailto:care@beautybarn.in" className="text-primaryIvory">
              info@swanbotanicals.com
            </a>
          </p>
          <p className="text-sm text-primaryIvory">
            Mahatma Gandhi inner ring road, Guntur pin code: 522034
          </p>

          <div className="flex items-center gap-2 text-sm text-primaryIvory">
            <FiPhone /> Customer Care: +919492785945
          </div>
          <div className="flex items-center gap-2 text-sm text-primaryIvory">
            <FiClock /> Business Hours: 09.30 AM - 5:30 PM
          </div>
          <div className="flex items-center gap-2 text-sm text-primaryIvory">
            <FiCalendar /> Days Open: Monday to Saturday
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-accentCharcoal py-3 text-center text-sm text-primaryIvory border-t-2 border-gray-600">
        © Copyright 2025 Swan Botanicals. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
