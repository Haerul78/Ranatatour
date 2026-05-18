import { Link, router } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Index({ tours }) {
    const handleDelete = (tour) => {
        if (!confirm(`Hapus tour "${tour.title}"?`)) return;
        router.delete(`/admin/tours/${tour.id}`);
    };

    const featured = tours?.filter(t => t.is_featured).length ?? 0;

    return (
        <AdminLayout title="Tour" subtitle="Kelola daftar tour yang tampil di website.">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{tours?.length ?? 0}</span>
                            <span className="text-xs text-[#9b8f8a]">Total Tour</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{featured}</span>
                            <span className="text-xs text-[#9b8f8a]">Featured</span>
                        </div>
                    </div>
                    <Link href="/admin/tours/create"
                        className="flex items-center gap-2 rounded-xl bg-[#991612] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a]">
                        <PlusIcon />Tambah Tour
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
                    <div className="border-b border-[#f4ede8] px-6 py-4">
                        <h3 className="text-sm font-semibold text-[#2d1a1a]">Daftar Tour</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#fdf7f4] text-[10px] font-semibold uppercase tracking-widest text-[#9b8f8a]">
                                <tr>
                                    <th className="px-5 py-3.5">Tour</th>
                                    <th className="px-5 py-3.5">Lokasi</th>
                                    <th className="px-5 py-3.5">Harga</th>
                                    <th className="px-5 py-3.5">Status</th>
                                    <th className="px-5 py-3.5 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f4ede8]">
                                {tours?.length ? tours.map(tour => (
                                    <tr key={tour.id} className="group transition hover:bg-[#fdf7f4]">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {tour.image_url ? (
                                                    <img src={tour.image_url} alt={tour.title} className="h-10 w-14 rounded-lg object-cover" onError={e => e.target.style.display = "none"} />
                                                ) : (
                                                    <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-[#fdecea] text-xs font-bold text-[#991612]">
                                                        {tour.title?.[0] ?? "T"}
                                                    </div>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-[#2d1a1a]">{tour.title}</p>
                                                    {tour.badge && (
                                                        <span className="mt-0.5 inline-block rounded-full bg-[#fdecea] px-2 py-0.5 text-[10px] font-semibold text-[#991612]">{tour.badge}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4 text-[#7c6f6a]">{tour.location || "—"}</td>
                                        <td className="px-5 py-4 text-[#7c6f6a]">{tour.price || "—"}</td>
                                        <td className="px-5 py-4">
                                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tour.is_featured ? "bg-[#fdecea] text-[#991612]" : "bg-[#f4ede8] text-[#9b8f8a]"}`}>
                                                {tour.is_featured ? "Featured" : "Regular"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/tours/${tour.id}/edit`}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#991612] transition hover:border-[#991612] hover:bg-[#fdecea]">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(tour)}
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
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#991612]"><path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" /><path fillRule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clipRule="evenodd" /></svg>
                                                </div>
                                                <p className="text-sm font-semibold text-[#4b2e2b]">Belum ada tour</p>
                                                <p className="text-xs text-[#9b8f8a]">Tambahkan tour pertama Anda</p>
                                                <Link href="/admin/tours/create" className="mt-2 rounded-xl bg-[#991612] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01f1a]">
                                                    Tambah Tour
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
