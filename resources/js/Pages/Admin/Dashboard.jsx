import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import AdminLayout from "../../Layouts/AdminLayout";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.35, delay },
});

const statCards = (stats) => [
    {
        label: "Total Tour",
        value: stats?.tours ?? 0,
        desc: "Destinasi aktif",
        color: "from-[#991612] to-[#6f0f0c]",
        shadow: "rgba(153,22,18,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
        href: "/admin/tours",
    },
    {
        label: "Total Event",
        value: stats?.events ?? 0,
        desc: "Event aktif & terjadwal",
        color: "from-[#c76854] to-[#9c3e2e]",
        shadow: "rgba(199,104,84,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
        ),
        href: "/admin/events",
    },
    {
        label: "Artikel",
        value: stats?.articles ?? 0,
        desc: "Konten & insight",
        color: "from-[#df7f6e] to-[#b8483f]",
        shadow: "rgba(223,127,110,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
        ),
        href: "/admin/articles",
    },
    {
        label: "Klien",
        value: stats?.clients ?? 0,
        desc: "Partner & korporat",
        color: "from-[#e3a39f] to-[#c07070]",
        shadow: "rgba(192,112,112,0.3)",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        href: "/admin/clients",
    },
];

const quickActions = [
    { label: "Tambah Tour", href: "/admin/tours/create", color: "bg-[#991612]", text: "text-white" },
    { label: "Tambah Event", href: "/admin/events/create", color: "bg-white border border-[#e8d5ce]", text: "text-[#4b2e2b]" },
    { label: "Tulis Artikel", href: "/admin/articles/create", color: "bg-white border border-[#e8d5ce]", text: "text-[#4b2e2b]" },
];

function EmptyState({ text }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#e8d5ce] py-10 text-center">
            <div className="mb-2 rounded-full bg-[#f7ede8] p-3 text-[#c4a09a]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>
            <p className="text-xs text-[#9b8f8a]">{text}</p>
        </div>
    );
}

export default function Dashboard({ stats, latestTours, latestEvents }) {
    const cards = statCards(stats);

    return (
        <AdminLayout
            title="Halo, Administrator 👋"
            subtitle="Berikut ringkasan data terbaru Ranata Tour."
        >
            {/* Stat Cards */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card, i) => (
                    <motion.div key={card.label} {...fadeUp(i * 0.07)}>
                        <Link
                            href={card.href}
                            className={`group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br p-5 text-white transition hover:opacity-95 hover:shadow-2xl ${card.color}`}
                            style={{ boxShadow: `0 10px 30px ${card.shadow}` }}
                        >
                            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/10 transition group-hover:scale-110" />
                            <div className="absolute -bottom-6 -left-3 h-24 w-24 rounded-full bg-white/5" />
                            <div className="relative flex items-start justify-between">
                                <div className="rounded-xl bg-white/20 p-2">
                                    {card.icon}
                                </div>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-80">
                                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                            <p className="relative mt-4 text-3xl font-bold">{card.value}</p>
                            <p className="relative mt-0.5 text-xs font-semibold opacity-80">{card.label}</p>
                            <p className="relative mt-1 text-[11px] opacity-60">{card.desc}</p>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions + Overview */}
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {/* Quick Actions */}
                <motion.div
                    className="rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(153,22,18,0.08)]"
                    {...fadeUp(0.28)}
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b8f8a]">Aksi Cepat</p>
                    <div className="mt-4 space-y-2.5">
                        {quickActions.map(action => (
                            <Link
                                key={action.label}
                                href={action.href}
                                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition hover:opacity-80 ${action.color} ${action.text}`}
                            >
                                {action.label}
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 opacity-60">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Summary */}
                <motion.div
                    className="col-span-2 rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(153,22,18,0.08)]"
                    {...fadeUp(0.32)}
                >
                    <div className="flex items-center justify-between">
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9b8f8a]">Ringkasan</p>
                        <span className="rounded-full bg-[#fdecea] px-3 py-1 text-[11px] font-semibold text-[#991612]">Live</span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {[
                            { label: "Tour Baru", value: latestTours?.length ?? 0, href: "/admin/tours" },
                            { label: "Event Baru", value: latestEvents?.length ?? 0, href: "/admin/events" },
                            { label: "Total Tour", value: stats?.tours ?? 0, href: "/admin/tours" },
                            { label: "Total Event", value: stats?.events ?? 0, href: "/admin/events" },
                        ].map(item => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group flex flex-col rounded-xl border border-[#f0e4de] bg-[#fdf7f4] p-4 transition hover:border-[#c07070]"
                            >
                                <span className="text-2xl font-bold text-[#2d1a1a]">{item.value}</span>
                                <span className="mt-1 text-xs text-[#9b8f8a] group-hover:text-[#991612]">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Latest Tables */}
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {/* Tour Terbaru */}
                <motion.div
                    className="rounded-2xl bg-white shadow-[0_4px_24px_rgba(153,22,18,0.08)]"
                    {...fadeUp(0.36)}
                >
                    <div className="flex items-center justify-between border-b border-[#f0e4de] px-5 py-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#991612]" />
                            <h2 className="text-sm font-semibold text-[#2d1a1a]">Tour Terbaru</h2>
                        </div>
                        <Link href="/admin/tours" className="text-xs font-semibold text-[#991612] transition hover:text-[#b01f1a]">
                            Kelola →
                        </Link>
                    </div>
                    <div className="p-4">
                        {latestTours?.length ? (
                            <ul className="space-y-2">
                                {latestTours.map((tour, i) => (
                                    <li
                                        key={tour.id}
                                        className="flex items-center gap-3 rounded-xl bg-[#fdf7f4] px-4 py-3 transition hover:bg-[#f7ede8]"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fdecea] text-xs font-bold text-[#991612]">
                                            {i + 1}
                                        </span>
                                        <span className="min-w-0 flex-1 truncate text-sm font-medium text-[#2d1a1a]">
                                            {tour.title}
                                        </span>
                                        <span className="shrink-0 text-[11px] text-[#b0a09a]">
                                            {tour.created_at?.slice(0, 10)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <EmptyState text="Belum ada tour yang ditambahkan." />
                        )}
                    </div>
                </motion.div>

                {/* Event Terbaru */}
                <motion.div
                    className="rounded-2xl bg-white shadow-[0_4px_24px_rgba(153,22,18,0.08)]"
                    {...fadeUp(0.4)}
                >
                    <div className="flex items-center justify-between border-b border-[#f0e4de] px-5 py-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[#c76854]" />
                            <h2 className="text-sm font-semibold text-[#2d1a1a]">Event Terbaru</h2>
                        </div>
                        <Link href="/admin/events" className="text-xs font-semibold text-[#991612] transition hover:text-[#b01f1a]">
                            Kelola →
                        </Link>
                    </div>
                    <div className="p-4">
                        {latestEvents?.length ? (
                            <ul className="space-y-2">
                                {latestEvents.map((event, i) => (
                                    <li
                                        key={event.id}
                                        className="flex items-center gap-3 rounded-xl bg-[#fdf7f4] px-4 py-3 transition hover:bg-[#f7ede8]"
                                    >
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#fdecea] text-xs font-bold text-[#c76854]">
                                            {i + 1}
                                        </span>
                                        <span className="min-w-0 flex-1 truncate text-sm font-medium text-[#2d1a1a]">
                                            {event.title}
                                        </span>
                                        <span className="shrink-0 text-[11px] text-[#b0a09a]">
                                            {event.created_at?.slice(0, 10)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <EmptyState text="Belum ada event yang ditambahkan." />
                        )}
                    </div>
                </motion.div>
            </div>
        </AdminLayout>
    );
}
