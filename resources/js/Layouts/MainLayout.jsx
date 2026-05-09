import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {
	return (
		<div className="w-full overflow-x-hidden">
			<Navbar />
            <main>
				{children}
			</main>
			<Footer />
		</div>
	);
}
