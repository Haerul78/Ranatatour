import MainLayout from "../Layouts/MainLayout";

export default function Tour() {
    const filters = ["Semua", "Bali", "Jakarta", "Yogyakarta", "Surabaya", "Bandung"];

    const packages = [
        {
            title: "Paket Tour Jakarta Heritage",
            location: "Jakarta",
            price: "Rp 3.500.000",
            duration: "3 Hari 2 Malam",
            image: "/images/Jakarta.jpg",
            badge: "Rp 3.500.000",
        },
        {
            title: "Paket Tour Bali Paradise",
            location: "Bali",
            price: "Rp 4.500.000",
            duration: "4 Hari 3 Malam",
            image: "/images/Bali.jpg",
            badge: "Rp 4.500.000",
        },
        {
            title: "Paket Tour Borobudur & Prambanan",
            location: "Yogyakarta",
            price: "Rp 2.500.000",
            duration: "3 Hari 2 Malam",
            image: "/images/Borobudur.jpg",
            badge: "Rp 2.500.000",
        },
        {
            title: "Paket Tour Lombok Eksotis",
            location: "Lombok",
            price: "Rp 4.800.000",
            duration: "5 Hari 4 Malam",
            image: "/images/Bali.jpg",
            badge: "Rp 4.800.000",
        },
        {
            title: "Paket Tour Komodo Adventure",
            location: "Labuan Bajo",
            price: "Rp 5.900.000",
            duration: "4 Hari 3 Malam",
            image: "/images/Surabaya.jpg",
            badge: "Rp 5.900.000",
        },
        {
            title: "Paket Tour Raja Ampat Paradise",
            location: "Papua",
            price: "Rp 6.500.000",
            duration: "5 Hari 4 Malam",
            image: "/images/Bali.jpg",
            badge: "Rp 6.500.000",
        },
    ];

    return (
        <MainLayout>
            <section className="relative min-h-[60vh] overflow-hidden text-white">
                <img
                    src="/images/Jakarta.jpg"
                    alt="Paket Tour Premium"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 pt-24 md:px-10">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/80">Ranata Tour</p>
                        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">
                            Paket <span className="text-[#f2b7a5]">Tour</span> Premium
                        </h1>
                        <p className="mt-4 text-base text-white/80">
                            Jelajahi keindahan Indonesia dengan paket tour eksklusif kami.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto mt-14 max-w-6xl">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">
                        Wujudkan liburan <span className="text-merah-ranata">impianmu</span>
                    </h2>
                    <p className="mt-2 text-sm text-[#7c6f6a]">ukir cerita baru di setiap destinasi.</p>
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
                    <div className="flex items-center gap-2 rounded-full border border-[#e7d9d4] bg-white px-3 py-2 text-xs text-[#7c6f6a]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-28 bg-transparent text-xs focus:outline-none"
                        />
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-merah-ranata text-white">
                            🔍
                        </span>
                    </div>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {packages.map(item => (
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
                                    <span>{item.duration}</span>
                                    <span className="text-merah-ranata">{item.price}</span>
                                </div>
                                <button
                                    type="button"
                                    className="w-full rounded-full bg-merah-ranata px-4 py-2 text-xs font-semibold text-white"
                                >
                                    Lihat Detail
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
                        Lihat selanjutnya
                    </button>
                </div>
            </section>
        </MainLayout>
    );
}
