import AdminLayout from "../../Layouts/AdminLayout";

export default function Dashboard({ stats, latestTours, latestEvents }) {
    return (
        <AdminLayout
            title="Halo, Administrator"
            subtitle="Ringkasan data terbaru Ranata Tour."
        >
            <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#b01f1a] via-[#991612] to-[#6f0f0c] p-6 text-white shadow-[0_18px_36px_rgba(153,22,18,0.26)]">
                    <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-white/15" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">Weekly Tours</p>
                    <p className="mt-4 text-3xl font-semibold">{stats?.tours ?? 0}</p>
                    <p className="mt-2 text-xs text-white/80">Destinasi aktif minggu ini.</p>
                </div>
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#f3c2b1] via-[#df7f6e] to-[#b8483f] p-6 text-white shadow-[0_18px_36px_rgba(223,127,110,0.28)]">
                    <div className="absolute -right-8 -bottom-10 h-36 w-36 rounded-full bg-white/15" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">Weekly Events</p>
                    <p className="mt-4 text-3xl font-semibold">{stats?.events ?? 0}</p>
                    <p className="mt-2 text-xs text-white/80">Event berjalan & terjadwal.</p>
                </div>
                <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#f6d5c7] via-[#e7a28c] to-[#c76854] p-6 text-white shadow-[0_18px_36px_rgba(199,104,84,0.28)]">
                    <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/15" />
                    <p className="text-xs uppercase tracking-[0.3em] text-white/80">Konten Aktif</p>
                    <p className="mt-4 text-3xl font-semibold">{stats?.articles ?? 0}</p>
                    <p className="mt-2 text-xs text-white/80">Artikel & insight terbaru.</p>
                </div>
            </section>

            <section className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[26px] bg-white p-6 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#9b8f8a]">Clients</p>
                            <p className="mt-2 text-2xl font-semibold text-[#3c2a2a]">{stats?.clients ?? 0}</p>
                        </div>
                        <div className="h-12 w-12 rounded-2xl bg-[#f7ede8]" />
                    </div>
                    <p className="mt-4 text-sm text-[#7c6f6a]">Partner aktif & korporat.</p>
                </div>
                <div className="rounded-[26px] bg-white p-6 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-[#9b8f8a]">Highlights</p>
                            <p className="mt-2 text-2xl font-semibold text-[#3c2a2a]">Overview</p>
                        </div>
                        <a href="/admin/tours" className="text-sm font-semibold text-[#991612]">Kelola Tour</a>
                    </div>
                    <div className="mt-4 flex gap-3">
                        <div className="flex-1 rounded-2xl bg-[#f7ede8] p-4 text-xs text-[#7c6f6a]">Tour baru: {latestTours?.length ?? 0}</div>
                        <div className="flex-1 rounded-2xl bg-[#f7ede8] p-4 text-xs text-[#7c6f6a]">Event baru: {latestEvents?.length ?? 0}</div>
                    </div>
                </div>
            </section>

            <section className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Tour Terbaru</h2>
                        <a href="/admin/tours" className="text-sm font-semibold text-[#991612]">Kelola</a>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#7c6f6a]">
                        {latestTours?.length ? (
                            latestTours.map(tour => (
                                <li key={tour.id} className="flex items-center justify-between rounded-2xl border border-[#f1e2db] px-4 py-3">
                                    <span className="font-semibold text-[#3c2a2a]">{tour.title}</span>
                                    <span className="text-xs">{tour.created_at?.slice(0, 10)}</span>
                                </li>
                            ))
                        ) : (
                            <li className="rounded-2xl border border-dashed border-[#f1e2db] px-4 py-6 text-center text-xs text-[#9b8f8a]">
                                Belum ada tour.
                            </li>
                        )}
                    </ul>
                </div>
                <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Event Terbaru</h2>
                        <a href="/admin/events" className="text-sm font-semibold text-[#991612]">Kelola</a>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#7c6f6a]">
                        {latestEvents?.length ? (
                            latestEvents.map(event => (
                                <li key={event.id} className="flex items-center justify-between rounded-2xl border border-[#f1e2db] px-4 py-3">
                                    <span className="font-semibold text-[#3c2a2a]">{event.title}</span>
                                    <span className="text-xs">{event.created_at?.slice(0, 10)}</span>
                                </li>
                            ))
                        ) : (
                            <li className="rounded-2xl border border-dashed border-[#f1e2db] px-4 py-6 text-center text-xs text-[#9b8f8a]">
                                Belum ada event.
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        </AdminLayout>
    );
}
