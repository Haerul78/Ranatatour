import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function MainLayout({ children }) {
	const whatsappNumber = "6281234567890";
	const whatsappMessage = "Halo Admin, saya ingin bertanya tentang paket tour.";
	const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

	return (
		<div className="w-full overflow-x-hidden">
			<Navbar />
            <main>
				{children}
			</main>
			<Footer />
			<a
				href={whatsappLink}
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_28px_rgba(0,0,0,0.2)] transition hover:scale-105"
				aria-label="Hubungi kami via WhatsApp"
			>
				<svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
					<path d="M19.1 17.4c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.1 8.1 0 0 1-2.4-1.5 9.1 9.1 0 0 1-1.6-2c-.2-.3 0-.5.1-.7s.3-.4.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.6-1-2.2c-.3-.6-.6-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.2-1.3.1-1.4c0-.1-.3-.2-.6-.4Z" />
					<path d="M26.7 5.3A14.9 14.9 0 0 0 16 1.2C8.2 1.2 1.9 7.5 1.9 15.3c0 2.4.6 4.8 1.7 6.9L2 30.8l8.8-2.3a14.1 14.1 0 0 0 5.2 1c7.8 0 14.1-6.3 14.1-14.1 0-3.8-1.5-7.4-4.1-10.1Zm-10.7 21c-1.8 0-3.5-.5-5-1.3l-.4-.2-5.2 1.4 1.4-5-.3-.5a11.7 11.7 0 0 1-1.6-6c0-6.4 5.2-11.6 11.6-11.6 3.1 0 6 1.2 8.2 3.4a11.5 11.5 0 0 1 3.4 8.2c0 6.4-5.2 11.6-11.6 11.6Z" />
				</svg>
			</a>
		</div>
	);
}
