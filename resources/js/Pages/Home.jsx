import { motion } from "framer-motion";
import { useRef } from "react";
import MainLayout from "../Layouts/MainLayout";
import Hero from "../Components/Hero";

export default function Home() {
    const destinationSliderRef = useRef(null);
    const eventSliderRef = useRef(null);
    const storySliderRef = useRef(null);

    const handleScroll = (ref, direction) => {
        if (!ref.current) {
            return;
        }

        const offset = direction === "left" ? -320 : 320;
        ref.current.scrollBy({ left: offset, behavior: "smooth" });
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

    return (
        <MainLayout>
            <div className="-mx-6 md:-mx-10">
                <Hero />
            </div>

            <section className="mx-auto mt-16 max-w-6xl">
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
                                className="w-[70%] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm sm:w-[45%] md:w-[32%] lg:w-[calc(25%-12px)]"
                            >
                                <div className="relative h-40">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                    <span className="absolute left-3 top-3 rounded-full bg-merah-ranata px-3 py-1 text-[10px] font-semibold uppercase text-white">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="space-y-2 p-4">
                                    <h3 className="text-sm font-semibold text-[#4b2e2b]">{item.title}</h3>
                                    <p className="text-xs text-[#9b8f8a]">{item.location}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-merah-ranata">{item.price}</span>
                                        <span className="text-xs text-[#9b8f8a]">4D3N</span>
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

            <section className="mx-auto mt-16 max-w-6xl">
                <div className="flex flex-col gap-3">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">Agenda Seru Menantimu</h2>
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
                        className="flex flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-hide px-4"
                    >
                        {events.map(item => (
                            <article
                                key={item.title}
                                className="w-[70%] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm sm:w-[45%] md:w-[32%] lg:w-[calc(25%-12px)]"
                            >
                                <div className="relative h-40">
                                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase text-merah-ranata">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="space-y-2 p-4">
                                    <h3 className="text-sm font-semibold text-[#4b2e2b]">{item.title}</h3>
                                    <p className="text-xs text-[#9b8f8a]">{item.location}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-merah-ranata">{item.price}</span>
                                        <span className="text-xs text-[#9b8f8a]">12 Mei 2026</span>
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

            <section className="mx-auto mt-20 max-w-6xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-semibold text-[#4b2e2b]">Cerita & Inspirasi</h2>
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
                    className="mt-10 flex flex-nowrap gap-6 overflow-x-auto pb-2 scrollbar-hide"
                >
                    {stories.map(item => (
                        <article
                            key={item.title}
                            className="w-[80%] flex-shrink-0 overflow-hidden rounded-2xl bg-white shadow-sm sm:w-[55%] md:w-[40%] lg:w-[calc(33.333%-16px)]"
                        >
                            <div className="relative h-44">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase text-merah-ranata">
                                    {item.label}
                                </span>
                            </div>
                            <div className="space-y-3 p-5">
                                <p className="text-xs text-[#9b8f8a]">{item.date}</p>
                                <h3 className="text-sm font-semibold text-[#4b2e2b]">{item.title}</h3>
                                <button type="button" className="text-xs font-semibold text-merah-ranata">
                                    Baca Selengkapnya →
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="-mx-6 mt-20 bg-merah-ranata text-white md:-mx-10">
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

                    <div className="relative grid gap-6 text-center sm:grid-cols-2 md:grid-cols-4">
                        {stats.map(item => (
                            <div key={item.label} className="flex flex-col items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white">
                                    {item.icon}
                                </span>
                                <div>
                                    <p className="text-2xl font-semibold">{item.value}</p>
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

            <section className="-mx-6 bg-[#f7ece6] py-16 md:-mx-10">
                <div className="mx-auto max-w-6xl px-6 md:px-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-[#4b2e2b]">Klien Kami</h2>
                        <p className="mt-2 text-sm text-[#7c6f6a]">
                            Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 text-center text-sm font-semibold text-[#8b7f7a] sm:grid-cols-2 md:grid-cols-4">
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
                            <div key={client} className="tracking-[0.15em] uppercase">
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
                    <div className="rounded-2xl bg-[#f8eee9] p-6">
                        <h3 className="text-lg font-semibold text-[#4b2e2b]">Hubungi Kami</h3>
                        <div className="mt-4 space-y-4 text-sm text-[#7c6f6a]">
                            <p>
                                <span className="block text-xs font-semibold text-[#4b2e2b]">Alamat</span>
                                Jl. Tanah Abang No.12, Jakarta Pusat, DKI Jakarta 10230
                            </p>
                            <p>
                                <span className="block text-xs font-semibold text-[#4b2e2b]">Telepon</span>
                                (+62) 812 3456 7890
                            </p>
                            <p>
                                <span className="block text-xs font-semibold text-[#4b2e2b]">Email</span>
                                info@ranatatour.com
                            </p>
                            <p>
                                <span className="block text-xs font-semibold text-[#4b2e2b]">Jam Operasional</span>
                                Senin - Jumat, 08.00 - 18.00 WIB
                            </p>
                        </div>

                        <div className="mt-6 space-y-3">
                            <input
                                type="text"
                                placeholder="Nama Anda"
                                className="w-full rounded-lg border border-white/70 bg-white px-4 py-2 text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="w-full rounded-lg border border-white/70 bg-white px-4 py-2 text-sm"
                            />
                            <textarea
                                rows="3"
                                placeholder="Pesan Anda"
                                className="w-full rounded-lg border border-white/70 bg-white px-4 py-2 text-sm"
                            />
                            <button
                                type="button"
                                className="w-full rounded-full bg-merah-ranata px-4 py-2 text-sm font-semibold text-white"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </div>

                    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
                        <iframe
                            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
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