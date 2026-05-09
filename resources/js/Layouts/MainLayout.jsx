import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

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
