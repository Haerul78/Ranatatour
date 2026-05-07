import Navbar from "@/Components/Navbar";
import { div } from "framer-motion/client";

export default function MainLayout({ children }) {
	return (
        
		<div>
			<Navbar />
            <main className="px-6 pb-16 md:px-10">
				{children}
			</main>
		</div>
	);
}
