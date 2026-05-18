import { Link, router } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Index({ clients }) {
    const handleDelete = (client) => {
        if (!confirm(`Hapus klien "${client.name}"?`)) return;
        router.delete(`/admin/clients/${client.id}`);
    };

    const featured = clients?.filter(c => c.is_featured).length ?? 0;

    return (
        <AdminLayout title="Klien" subtitle="Kelola partner dan klien yang tampil di website.">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{clients?.length ?? 0}</span>
                            <span className="text-xs text-[#9b8f8a]">Total Klien</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{featured}</span>
                            <span className="text-xs text-[#9b8f8a]">Featured</span>
                        </div>
                    </div>
                    <Link href="/admin/clients/create"
                        className="flex items-center gap-2 rounded-xl bg-[#991612] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a]">
                        <PlusIcon />Tambah Klien
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
                    <div className="border-b border-[#f4ede8] px-6 py-4">
                        <h3 className="text-sm font-semibold text-[#2d1a1a]">Daftar Klien</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#fdf7f4] text-[10px] font-semibold uppercase tracking-widest text-[#9b8f8a]">
                                <tr>
                                    <th className="px-5 py-3.5">Klien</th>
                                    <th className="px-5 py-3.5">Testimoni</th>
                                    <th className="px-5 py-3.5">Status</th>
                                    <th className="px-5 py-3.5 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f4ede8]">
                                {clients?.length ? clients.map(client => (
                                    <tr key={client.id} className="group transition hover:bg-[#fdf7f4]">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {client.logo_url ? (
                                                    <img src={client.logo_url} alt={client.name} className="h-10 w-16 rounded-lg object-contain" onError={e => e.target.style.display = "none"} />
                                                ) : (
                                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecea] text-sm font-bold text-[#991612]">
                                                        {client.name?.[0]?.toUpperCase() ?? "K"}
                                                    </div>
                                                )}
                                                <p className="font-semibold text-[#2d1a1a]">{client.name}</p>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            {client.testimonial ? (
                                                <p className="max-w-[280px] truncate text-xs italic text-[#7c6f6a]">"{client.testimonial}"</p>
                                            ) : <span className="text-[#c4aea6]">—</span>}
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${client.is_featured ? "bg-[#fdecea] text-[#991612]" : "bg-[#f4ede8] text-[#9b8f8a]"}`}>
                                                {client.is_featured ? "Featured" : "Regular"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/clients/${client.id}/edit`}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#991612] transition hover:border-[#991612] hover:bg-[#fdecea]">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(client)}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#9b8f8a] transition hover:border-red-300 hover:bg-red-50 hover:text-red-600">
                                                    Hapus
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="4" className="px-5 py-16 text-center">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fdecea]">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#991612]"><path d="M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM1.615 16.428a1.224 1.224 0 0 1-.569-1.175 6.002 6.002 0 0 1 11.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 0 1 7 18a9.953 9.953 0 0 1-5.385-1.572ZM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 0 0-1.588-3.755 4.502 4.502 0 0 1 5.874 2.636.818.818 0 0 1-.36.98A7.465 7.465 0 0 1 14.5 16Z" /></svg>
                                                </div>
                                                <p className="text-sm font-semibold text-[#4b2e2b]">Belum ada klien</p>
                                                <p className="text-xs text-[#9b8f8a]">Tambahkan klien pertama Anda</p>
                                                <Link href="/admin/clients/create" className="mt-2 rounded-xl bg-[#991612] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01f1a]">
                                                    Tambah Klien
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
