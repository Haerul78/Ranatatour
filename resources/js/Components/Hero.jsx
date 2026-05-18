import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Hero() {
    const images = [
        "/images/Borobudur.jpg",
        "/images/Bali.jpg",
        "/images/Jakarta.jpg",
        "/images/Surabaya.jpg",
        "/images/Yogyakarta.jpg",
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative min-h-[80vh] overflow-hidden text-white px-6 md:px-10">
            {images.map((src, index) => (
                <img
                    key={src}
                    src={src}
                    alt="Hero background"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
                        index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden={index !== activeIndex}
                />
            ))}

            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

            <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-6 pt-28 md:px-10">
                <div className="max-w-2xl">
                    <p className="mb-3 text-sm uppercase tracking-[0.2em] text-white/80">Ranata Tour</p>
                    <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
                        Ibu Kota yang <span className="text-merah-ranata">Penuh Warna</span>, Cerita,
                        dan Kehidupan
                    </h1>
                    <p className="mt-5 text-base text-white/80 md:text-lg">
                        Jelajahi keindahan Jakarta bersama Ranata Tour. Pengalaman perjalanan nyaman yang
                        tak terlupakan.
                    </p>
                    <Link
                        href="/tour"
                        className="mt-7 inline-block rounded-full bg-merah-ranata px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-red-700"
                    >
                        Lihat Temu Tour
                    </Link>
                </div>
            </div>
        </section>
    );
}