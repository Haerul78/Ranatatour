import { Link, router } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Index({ events }) {
    const handleDelete = (event) => {
        if (!confirm(`Hapus event "${event.title}"?`)) return;
        router.delete(`/admin/events/${event.id}`);
    };

    const featured = events?.filter(e => e.is_featured).length ?? 0;

    return (
        <AdminLayout title="Event" subtitle="Kelola daftar event yang tampil di website.">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{events?.length ?? 0}</span>
                            <span className="text-xs text-[#9b8f8a]">Total Event</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{featured}</span>
                            <span className="text-xs text-[#9b8f8a]">Featured</span>
                        </div>
                    </div>
                    <Link href="/admin/events/create"
                        className="flex items-center gap-2 rounded-xl bg-[#991612] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a]">
                        <PlusIcon />Tambah Event
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
                    <div className="border-b border-[#f4ede8] px-6 py-4">
                        <h3 className="text-sm font-semibold text-[#2d1a1a]">Daftar Event</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#fdf7f4] text-[10px] font-semibold uppercase tracking-widest text-[#9b8f8a]">
                                <tr>
                                    <th className="px-5 py-3.5">Event</th>
                                    <th className="px-5 py-3.5">Lokasi</th>
                                    <th className="px-5 py-3.5">Tanggal</th>
                                    <th className="px-5 py-3.5">Status</th>
                                    <th className="px-5 py-3.5 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f4ede8]">
                                {events?.length ? events.map(event => (
                                    <tr key={event.id} className="group transition hover:bg-[#fdf7f4]">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {event.image_url ? (
                                                    <img src={event.image_url} alt={event.title} className="h-10 w-14 rounded-lg object-cover" onError={e => e.target.style.display = "none"} />
                                                ) : (
                                                    <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-[#fdecea] text-xs font-bold text-[#991612]">
                                                        {event.title?.[0] ?? "E"}
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-[#2d1a1a]">{event.title}</p>
                                                    {event.badge && (
                                                        <span className="mt-0.5 inline-block rounded-full bg-[#fdecea] px-2 py-0.5 text-[10px] font-semibold text-[#991612]">{event.badge}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-[#7c6f6a]">{event.location || "—"}</td>
                                        <td className="px-5 py-4 text-[#7c6f6a]">{event.date || "—"}</td>
                                        <td className="px-5 py-4">
                                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${event.is_featured ? "bg-[#fdecea] text-[#991612]" : "bg-[#f4ede8] text-[#9b8f8a]"}`}>
                                                {event.is_featured ? "Featured" : "Regular"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/events/${event.id}/edit`}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#991612] transition hover:border-[#991612] hover:bg-[#fdecea]">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(event)}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#9b8f8a] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600">
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="px-5 py-16 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fdecea]">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#991612]"><path fillRule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clipRule="evenodd" /></svg>
                                                </div>
                                                <p className="text-sm font-semibold text-[#4b2e2b]">Belum ada event</p>
                                                <p className="text-xs text-[#9b8f8a]">Tambahkan event pertama Anda</p>
                                                <Link href="/admin/events/create" className="mt-2 rounded-xl bg-[#991612] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01f1a]">
                                                    Tambah Event
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}

function PlusIcon() {
    return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" /></svg>;
}
