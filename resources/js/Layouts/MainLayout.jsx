import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { div } from "framer-motion/client";

export default function MainLayout({ children }) {
	return (
		<div className="w-full">
			<Navbar />
            <main>
				{children}
			</main>
			<Footer />
		</div>
	);
}
