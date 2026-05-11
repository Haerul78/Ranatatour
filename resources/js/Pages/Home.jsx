import { motion } from "framer-motion";
import { useRef, useState } from "react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../Components/Hero";

export default function Home() {
    const destinationSliderRef = useRef(null);
    const eventSliderRef = useRef(null);
    const storySliderRef = useRef(null);
    const clientSliderRef = useRef(null);
    const [activeClientSlide, setActiveClientSlide] = useState(0);

    const handleScroll = (ref, direction) => {
        if (!ref.current) {
            return;
        }

        const offset = direction === "left" ? -320 : 320;
        ref.current.scrollBy({ left: offset, behavior: "smooth" });
    };

    const handleClientScroll = () => {
        if (!clientSliderRef.current) return;

        const scrollLeft = clientSliderRef.current.scrollLeft;
        const width = clientSliderRef.current.offsetWidth;

        const index = Math.round(scrollLeft / width);

        setActiveClientSlide(index);
    };

    const destinations = [
        {
            title: "Bali Paradise Tour",
            location: "Bali, Indonesia",
            price: "Rp 3.500.000",
            image: "/images/Bali.jpg",
            badge: "Popular",
        },
        {
            title: "Yogyakarta Heritage",
            location: "Yogyakarta, Indonesia",
            price: "Rp 1.800.000",
            image: "/images/Borobudur.jpg",
            badge: "Baru",
        },
        {
            title: "Bandung Highland",
            location: "Bandung, Indonesia",
            price: "Rp 2.400.000",
            image: "/images/Bali.jpg",
            badge: "Hemat",
        },
        {
            title: "Bandung Highland",
            location: "Bandung, Indonesia",
            price: "Rp 2.400.000",
            image: "/images/Bali.jpg",
            badge: "Hemat",
        },
        {
            title: "Bandung Highland",
            location: "Bandung, Indonesia",
            price: "Rp 2.400.000",
            image: "/images/Bali.jpg",
            badge: "Hemat",
        },
    ];

    const events = [
        {
            title: "Jazz Traffic Festival",
            location: "Jakarta, Indonesia",
            price: "Rp 3.500.000",
            image: "/images/Bali.jpg",
            badge: "Festival",
        },
        {
            title: "Yogyakarta Heritage",
            location: "Yogyakarta, Indonesia",
            price: "Rp 2.800.000",
            image: "/images/Borobudur.jpg",
            badge: "Musik",
        },
        {
            title: "Bandung Highland",
            location: "Bandung, Indonesia",
            price: "Rp 2.100.000",
            image: "/images/Bali.jpg",
            badge: "Budaya",
        },
        {
            title: "Lombok Island Escape",
            location: "Lombok, Indonesia",
            price: "Rp 4.200.000",
            image: "/images/Borobudur.jpg",
            badge: "Populer",
        },
    ];

    const stories = [
        {
            title: "10 Destinasi Tersembunyi di Bali yang Wajib Dikunjungi",
            date: "12 April 2026",
            image: "/images/Bali.jpg",
            label: "Cerita",
        },
        {
            title: "Tips Liburan Hemat ke Yogyakarta untuk Keluarga",
            date: "10 April 2026",
            image: "/images/Borobudur.jpg",
            label: "Tips",
        },
        {
            title: "Kuliner Khas Jakarta yang Harus Dicoba",
            date: "8 April 2026",
            image: "/images/Bali.jpg",
            label: "Kuliner",
        },
        {
            title: "Kuliner Khas Jakarta yang Harus Dicoba",
            date: "8 April 2026",
            image: "/images/Bali.jpg",
            label: "Kuliner",
        },
        {
            title: "Kuliner Khas Jakarta yang Harus Dicoba",
            date: "8 April 2026",
            image: "/images/Bali.jpg",
            label: "Kuliner",
        },
        {
            title: "Kuliner Khas Jakarta yang Harus Dicoba",
            date: "8 April 2026",
            image: "/images/Bali.jpg",
            label: "Kuliner",
        },
    ];

    const stats = [
        {
            value: "14+",
            label: "Tahun Pengalaman",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 9a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                    <path d="M5 20a7 7 0 0 1 14 0" />
                </svg>
            ),
        },
        {
            value: "500+",
            label: "Trip Sukses",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                </svg>
            ),
        },
        {
            value: "10K+",
            label: "Travelers",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
                    <path d="M5 18a4 4 0 0 1 8 0" />
                    <path d="M16 11a5 5 0 0 1 5 5" />
                </svg>
            ),
        },
        {
            value: "98%",
            label: "Rating Kepuasan",
            icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21s-6-4.35-9-7.5A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9 7.5C18 16.65 12 21 12 21Z" />
                </svg>
            ),
        },
    ];

    const contactItems = [
        {
            label: "Alamat",
            value: "Jl. Tanah Abang No.12, Jakarta Pusat, DKI Jakarta 10230",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
            ),
        },
        {
            label: "Telepon",
            value: "(+62) 812 3456 7890",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 6.2 2 2 0 0 1 5.1 4h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1l-1.1 1.1a16 16 0 0 0 6.8 6.8l1.1-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
            ),
        },
        {
            label: "Email",
            value: "info@ranatatour.com",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    <path d="m22 8-10 6L2 8" />
                </svg>
            ),
        },
        {
            label: "Jam Operasional",
            value: "Senin - Jumat, 08.00 - 18.00 WIB",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                </svg>
            ),
        },
    ];

    return (
        <MainLayout>
            <div className="-mx-6 md:-mx-10">
                <Hero />
            </div>

            <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">Mulai Petualangan Impianmu</h2>
                    <p className="text-sm text-[#7c6f6a]">
                        Temukan paket perjalanan terbaik untuk liburan yang tak terlupakan.
                    </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                    {["Semua", "Bali", "Jakarta", "Yogyakarta", "Surabaya", "Bandung"].map(item => (
                        <button
                            key={item}
                            type="button"
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                                item === "Semua"
                                    ? "bg-merah-ranata text-white"
                                    : "border border-[#e7d9d4] text-[#7c6f6a] hover:border-merah-ranata hover:text-merah-ranata"
                            }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="relative mt-8 overflow-hidden">
                    <button
                        type="button"
                        onClick={() => handleScroll(destinationSliderRef, "left")}
                        className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7d9d4] bg-white/95 text-[#7c6f6a] shadow-md transition hover:border-merah-ranata hover:text-merah-ranata lg:inline-flex"
                    >
                        <span className="text-lg">&#8592;</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => handleScroll(destinationSliderRef, "right")}
                        className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7d9d4] bg-white/95 text-[#7c6f6a] shadow-md transition hover:border-merah-ranata hover:text-merah-ranata lg:inline-flex"
                    >
                        <span className="text-lg">&#8594;</span>
                    </button>

                    <div
                        ref={destinationSliderRef}
                        className="flex flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-hide px-4"
                    >
                        {destinations.map(item => (
                            <article
                                key={item.title}
                                className="w-[42%] flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm sm:w-[32%] md:w-[25%] lg:w-[calc(25%-12px)]"
                            >
                                <div className="relative h-28 sm:h-36 md:h-40">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                    <span className="absolute left-3 top-3 rounded-full bg-merah-ranata px-3 py-1 text-[10px] font-semibold uppercase text-white">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="space-y-1 p-3 sm:p-4">
                                    <h3 className="text-xs font-semibold sm:text-sm text-[#4b2e2b]">{item.title}</h3>
                                    <p className="text-xs sm:text-sm text-[#9b8f8a]">{item.location}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs sm:text-sm font-semibold text-merah-ranata">{item.price}</span>
                                        <span className="text-xs sm:text-sm text-[#9b8f8a]">4D3N</span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        className="rounded-full border border-merah-ranata px-6 py-2 text-sm font-semibold text-merah-ranata transition hover:bg-merah-ranata hover:text-white"
                    >
                        Lihat semua
                    </button>
                </div>
            </section>

            <section className="mx-auto mt-16 max-w-6xl px-6 md:px-10">
    <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold text-[#4b2e2b]">
            Agenda Seru Menantimu
        </h2>

        <p className="text-sm text-[#7c6f6a]">
            Temukan event menarik yang menunggu untuk kamu kunjungi hari ini.
        </p>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
        {["Semua", "Musik", "Festival", "Seni", "Olahraga"].map(item => (
            <button
                key={item}
                type="button"
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    item === "Semua"
                        ? "bg-merah-ranata text-white"
                        : "border border-[#e7d9d4] text-[#7c6f6a] hover:border-merah-ranata hover:text-merah-ranata"
                }`}
            >
                {item}
            </button>
        ))}
    </div>

    <div className="relative mt-8 overflow-hidden">
        <button
            type="button"
            onClick={() => handleScroll(eventSliderRef, "left")}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7d9d4] bg-white/95 text-[#7c6f6a] shadow-md transition hover:border-merah-ranata hover:text-merah-ranata lg:inline-flex"
        >
            <span className="text-lg">&#8592;</span>
        </button>

        <button
            type="button"
            onClick={() => handleScroll(eventSliderRef, "right")}
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e7d9d4] bg-white/95 text-[#7c6f6a] shadow-md transition hover:border-merah-ranata hover:text-merah-ranata lg:inline-flex"
        >
            <span className="text-lg">&#8594;</span>
        </button>

        <div
            ref={eventSliderRef}
            className="flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-hide px-1"
        >
            {events.map(item => (
                <article
                    key={item.title}
                    className="w-[42%] snap-start flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm sm:w-[32%] md:w-[25%] lg:w-[calc(25%-12px)]"
                >
                    <div className="relative h-28 sm:h-36 md:h-40">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                        />

                        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase text-merah-ranata">
                            {item.badge}
                        </span>
                    </div>

                    <div className="space-y-1 p-3 sm:p-4">
                        <h3 className="text-xs font-semibold text-[#4b2e2b] sm:text-sm">
                            {item.title}
                        </h3>

                        <p className="text-xs text-[#9b8f8a] sm:text-sm">
                            {item.location}
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-merah-ranata sm:text-sm">
                                {item.price}
                            </span>

                            <span className="text-xs text-[#9b8f8a] sm:text-sm">
                                12 Mei 2026
                            </span>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </div>

    <div className="mt-8 flex justify-center">
        <button
            type="button"
            className="rounded-full border border-merah-ranata px-6 py-2 text-sm font-semibold text-merah-ranata transition hover:bg-merah-ranata hover:text-white"
        >
            Lihat semua
        </button>
    </div>
</section>

            <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
    <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-[#4b2e2b]">
                Cerita & Inspirasi
            </h2>

            <p className="mt-2 text-sm text-[#7c6f6a]">
                Temukan inspirasi perjalanan dan cerita menarik dari berbagai destinasi.
            </p>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
            <button
                type="button"
                onClick={() => handleScroll(storySliderRef, "left")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d9d4] text-[#7c6f6a] transition hover:border-merah-ranata hover:text-merah-ranata"
            >
                <span className="text-lg">&#8592;</span>
            </button>

            <button
                type="button"
                onClick={() => handleScroll(storySliderRef, "right")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d9d4] text-[#7c6f6a] transition hover:border-merah-ranata hover:text-merah-ranata"
            >
                <span className="text-lg">&#8594;</span>
            </button>
        </div>
    </div>

    <div
        ref={storySliderRef}
        className="mt-10 flex snap-x snap-mandatory flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-hide"
    >
        {stories.map(item => (
            <article
                key={item.title}
                className="w-[42%] snap-start flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-sm sm:w-[32%] md:w-[25%] lg:w-[calc(25%-12px)]"
            >
                <div className="relative h-28 sm:h-36 md:h-40">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase text-merah-ranata">
                        {item.label}
                    </span>
                </div>

                <div className="space-y-1 p-3 sm:p-4">
                    <p className="text-xs text-[#9b8f8a]">
                        {item.date}
                    </p>

                    <h3 className="text-xs font-semibold text-[#4b2e2b] sm:text-sm">
                        {item.title}
                    </h3>

                    <button
                        type="button"
                        className="text-xs font-semibold text-merah-ranata"
                    >
                        Baca Selengkapnya →
                    </button>
                </div>
            </article>
        ))}
    </div>
</section>

            <section className="mt-20 bg-merah-ranata text-white">
                <div className="relative mx-auto max-w-6xl overflow-visible px-6 py-14 md:px-10">
                    <motion.div
                        className="pointer-events-none absolute -left-24 top-6 h-48 w-48 rounded-full bg-white/30 blur-3xl"
                        animate={{ x: [0, 160, 0], y: [0, 50, 0], opacity: [0.45, 0.7, 0.45] }}
                        transition={{ duration: 100, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="pointer-events-none absolute left-1/4 top-10 h-56 w-56 rounded-full bg-white/30 blur-3xl"
                        animate={{ x: [0, -120, 0], y: [0, 40, 0], opacity: [0.4, 0.65, 0.4] }}
                        transition={{ duration: 100, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="pointer-events-none absolute right-10 top-8 h-52 w-52 rounded-full bg-white/30 blur-3xl"
                        animate={{ x: [0, -150, 0], y: [0, 45, 0], opacity: [0.42, 0.68, 0.42] }}
                        transition={{ duration: 100, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="pointer-events-none absolute bottom-10 left-1/3 h-60 w-60 rounded-full bg-white/30 blur-3xl"
                        animate={{ x: [0, 140, 0], y: [0, -60, 0], opacity: [0.38, 0.6, 0.38] }}
                        transition={{ duration: 100, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="pointer-events-none absolute -bottom-6 right-1/4 h-44 w-44 rounded-full bg-white/30 blur-3xl"
                        animate={{ x: [0, -110, 0], y: [0, -50, 0], opacity: [0.35, 0.6, 0.35] }}
                        transition={{ duration: 100, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="relative grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {stats.map(item => (
                            <div key={item.label} className="flex flex-col items-center gap-2 rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white md:h-10 md:w-10">
                                    {item.icon}
                                </span>
                                <div>
                                    <p className="text-xl font-semibold md:text-2xl">{item.value}</p>
                                    <p className="mt-1 text-xs text-white/70">{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-semibold">Tentang Kami</h2>
                            <p className="mt-4 text-sm text-white/80">
                                Ranata Tour adalah sahabat perjalanan impian yang siap membawamu menjelajah
                                Indonesia dengan pengalaman terbaik. Layanan profesional, itinerary personal,
                                dan jaringan lokal terbaik adalah kekuatan kami.
                            </p>
                            <button
                                type="button"
                                className="mt-6 rounded-full border border-white/70 px-6 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-merah-ranata"
                            >
                                Pelajari Lebih Lanjut
                            </button>
                        </div>

                        <div className="rounded-2xl bg-white/10 p-6">
                            <h3 className="text-center text-lg font-semibold lg:text-left">Perjalanan Kami</h3>
                            <div className="mt-4 flex flex-wrap gap-2 text-xs">
                                {["2020", "2021", "2022", "2023", "2024"].map(year => (
                                    <span
                                        key={year}
                                        className="rounded-full border border-white/30 px-3 py-1 text-white/80"
                                    >
                                        {year}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5 rounded-xl bg-white/15 p-4">
                                <p className="text-xs text-white/70">Awal Perjalanan</p>
                                <p className="mt-2 text-sm">
                                    Ranata Tour berdiri dengan visi memberikan pengalaman perjalanan yang
                                    penuh cerita bagi setiap pelanggan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f7ece6] py-16">
    <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#4b2e2b]">
                Klien Kami
            </h2>

            <p className="mt-2 text-sm text-[#7c6f6a]">
                Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
            </p>
        </div>

        {/* MOBILE SLIDER */}
        <div className="mt-10 md:hidden">
            <div
                ref={clientSliderRef}
                onScroll={handleClientScroll}
                className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide scroll-smooth"
            >    
                {/* Slide 1 */}
                <div className="min-w-full snap-center">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-center">
                        {[
                            "Pertamina",
                            "BRI",
                            "Telkom",
                            "Garuda",
                            "Mandiri",
                            "PLN",
                        ].map(client => (
                            <div
                                key={client}
                                className="text-[11px] font-semibold tracking-[0.15em] text-[#8b7f7a] uppercase"
                            >
                            {client}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="min-w-full snap-center">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-6 text-center">
                        {[
                            "BCA",
                            "Astra",
                            "Unilever",
                            "Sinarmas",
                            "Indofood",
                            "Gojek",
                        ].map(client => (
                            <div
                                key={client}
                                className="text-[11px] font-semibold tracking-[0.15em] text-[#8b7f7a] uppercase"
                            >
                                {client}
                            </div>
                        ))}
                    </div>
                </div>    
            </div>

            {/* Indicator */}
            <div className="mt-8 flex items-center justify-center gap-2">
                {[0, 1].map(index => (
                    <span
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            activeClientSlide === index
                                ? "w-5 bg-merah-ranata"
                                : "w-2 bg-[#d8c7c0]"
                        }`}
                    />
                ))}
            </div>
        </div>

        {/* DESKTOP GRID */}
        <div className="mt-10 hidden gap-6 text-center text-sm font-semibold text-[#8b7f7a] sm:grid-cols-2 md:grid md:grid-cols-4">
            {[
                "Pertamina",
                "BRI",
                "Telkom",
                "Garuda",
                "Mandiri",
                "PLN",
                "BCA",
                "Astra",
                "Unilever",
                "Sinarmas",
                "Indofood",
                "Gojek",
            ].map(client => (
                <div
                    key={client}
                    className="tracking-[0.15em] uppercase"
                >
                    {client}
                </div>
            ))}
        </div>
    </div>
</section>

            <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">Lokasi Kami</h2>
                    <p className="mt-2 text-sm text-[#7c6f6a]">
                        Kunjungi kantor kami atau hubungi tim untuk informasi lebih lanjut.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    <div className="rounded-2xl border border-[#f1e3dd] bg-[#f8eee9] p-6 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                        <h3 className="text-lg font-semibold text-[#4b2e2b]">Hubungi Kami</h3>
                        <ul className="mt-4 space-y-3 text-sm text-[#7c6f6a]">
                            {contactItems.map(item => (
                                <li key={item.label} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-merah-ranata text-white">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <span className="block text-xs font-semibold text-[#4b2e2b]">{item.label}</span>
                                        <span>{item.value}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-sm font-semibold text-[#4b2e2b]">Kirim Pesan</p>
                        <div className="mt-3 space-y-3">
                            <input
                                type="text"
                                placeholder="Nama Anda"
                                className="w-full rounded-lg border border-[#ead8d0] bg-white px-4 py-2 text-sm focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="w-full rounded-lg border border-[#ead8d0] bg-white px-4 py-2 text-sm focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <textarea
                                rows="3"
                                placeholder="Pesan Anda"
                                className="w-full rounded-lg border border-[#ead8d0] bg-white px-4 py-2 text-sm focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <button
                                type="button"
                                className="w-full rounded-md bg-merah-ranata px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            src="https://www.youtube.com/embed/rAx1qYtXI28?autoplay=1&mute=1&loop=1&playlist=rAx1qYtXI28&controls=0&modestbranding=1&playsinline=1&rel=0"
                            title="Bali scenic video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}