import MainLayout from "../Layouts/MainLayout";

export default function Event() {
    const filters = ["Semua", "Budaya", "Seni", "Musik", "Olahraga", "Festival"];

    const events = [
        {
            title: "Festival Budaya Jakarta 2026",
            location: "Jakarta",
            date: "12-17 Mei 2026",
            price: "Rp 150.000",
            image: "/images/Jakarta.jpg",
            badge: "Budaya",
        },
        {
            title: "Bali Arts Festival",
            location: "Bali",
            date: "10-20 Juni 2026",
            price: "Rp 200.000",
            image: "/images/Bali.jpg",
            badge: "Seni",
        },
        {
            title: "Borobudur Marathon",
            location: "Magelang",
            date: "05-12 Juli 2026",
            price: "Rp 350.000",
            image: "/images/Borobudur.jpg",
            badge: "Olahraga",
        },
        {
            title: "Jazz Traffic Festival",
            location: "Jakarta",
            date: "20-25 Agustus 2026",
            price: "Rp 250.000",
            image: "/images/Jakarta.jpg",
            badge: "Musik",
        },
        {
            title: "Festival Kenangan Nusantara",
            location: "Yogyakarta",
            date: "02-08 September 2026",
            price: "Rp 180.000",
            image: "/images/Yogyakarta.jpg",
            badge: "Budaya",
        },
        {
            title: "Surabaya Lantern Festival",
            location: "Surabaya",
            date: "15-20 Oktober 2026",
            price: "Rp 220.000",
            image: "/images/Surabaya.jpg",
            badge: "Festival",
        },
    ];

    return (
        <MainLayout>
            <section className="relative min-h-[60vh] overflow-hidden text-white px-6 md:px-10">
                <img
                    src="/images/Jakarta.jpg"
                    alt="Event & Festival"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 pt-24 md:px-10">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/80">Ranata Tour</p>
                        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
                            Event & <span className="text-merah-ranata">Festival</span>
                        </h1>
                        <p className="mt-4 text-base text-white/80">
                            Jangan lewatkan berbagai event menarik di destinasi wisata Indonesia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-14 max-w-6xl px-6 md:px-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">
                        Ukir <span className="text-merah-ranata">Kenangan</span> Abadi di Setiap Sudut Nusantara
                    </h2>
                    <p className="mt-2 text-sm text-[#7c6f6a]">
                        Satu platform untuk semua tiket event seni, olahraga, dan budaya. Cepat, aman, dan tanpa ribet.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-3">
                        {filters.map(item => (
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
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            placeholder="Search"
                            className="h-10 w-48 rounded-full border border-[#e7d9d4] bg-white px-4 text-xs text-[#7c6f6a] focus:outline-none"
                        />
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-merah-ranata text-white"
                            aria-label="Search"
                        >
                            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7" />
                                <path d="M20 20l-3.5-3.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {events.map(item => (
                        <article key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                            <div className="relative h-48">
                                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                                <span className="absolute right-3 top-3 rounded-full bg-merah-ranata px-3 py-1 text-[10px] font-semibold uppercase text-white">
                                    {item.badge}
                                </span>
                            </div>
                            <div className="space-y-3 p-5">
                                <h3 className="text-base font-semibold text-[#4b2e2b]">{item.title}</h3>
                                <p className="text-xs text-[#9b8f8a]">{item.location}</p>
                                <div className="flex items-center justify-between text-xs text-[#9b8f8a]">
                                    <span>{item.date}</span>
                                    <span className="text-merah-ranata">{item.price}</span>
                                </div>
                                <button
                                    type="button"
                                    className="w-full rounded-full bg-merah-ranata px-4 py-2 text-xs font-semibold text-white"
                                >
                                    Daftar Sekarang
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        className="rounded-full bg-merah-ranata px-6 py-3 text-sm font-semibold text-white"
                    >
                        Lihat semua
                    </button>
                </div>
            </section>
        </MainLayout>
    );
}
