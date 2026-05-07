import { nav } from "framer-motion/client";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-10 py-5 flex justify-between items-center transition-all duration-300">
            {/* Logo */}
            <h1 className="text-2xl font-bold">
                <span className="text-merah-ranata">Ranata</span>
                <span className="text-gray-400">Tour</span>
            </h1>

            {/*  Menu */}
            <ul className="flex gap-8 text-gray-700 font-medium">
                <li className="hover:text-merah-ranata cursor-pointer transition">Home</li>
                <li className="hover:text-merah-ranata cursor-pointer transition">Destinations</li>
                <li className="hover:text-merah-ranata cursor-pointer transition">Activites</li>
                <li className="hover:text-merah-ranata cursor-pointer transition">About Us</li>
                <li className="hover:text-merah-ranata cursor-pointer transition">Contact</li>
            </ul>

            {/* Button */}
            <button type="button" className="bg-merah-ranata text-white px-6 py-2 rounded-md hover:bg-red-700 transition">
                Login
            </button>
        </nav>
    );
}