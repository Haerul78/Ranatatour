import { Link, router } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Index({ articles }) {
    const handleDelete = (article) => {
        if (!confirm(`Hapus artikel "${article.title}"?`)) return;
        router.delete(`/admin/articles/${article.id}`);
    };

    const featured = articles?.filter(a => a.is_featured).length ?? 0;

    return (
        <AdminLayout title="Artikel" subtitle="Kelola artikel yang tampil di website.">
            <div className="space-y-5">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{articles?.length ?? 0}</span>
                            <span className="text-xs text-[#9b8f8a]">Total Artikel</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-[0_2px_12px_rgba(153,22,18,0.07)]">
                            <span className="text-lg font-bold text-[#991612]">{featured}</span>
                            <span className="text-xs text-[#9b8f8a]">Featured</span>
                        </div>
                    </div>
                    <Link href="/admin/articles/create"
                        className="flex items-center gap-2 rounded-xl bg-[#991612] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a]">
                        <PlusIcon />Tulis Artikel
                    </Link>
                </div>

                {/* Table */}
                <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
                    <div className="border-b border-[#f4ede8] px-6 py-4">
                        <h3 className="text-sm font-semibold text-[#2d1a1a]">Daftar Artikel</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#fdf7f4] text-[10px] font-semibold uppercase tracking-widest text-[#9b8f8a]">
                                <tr>
                                    <th className="px-5 py-3.5">Artikel</th>
                                    <th className="px-5 py-3.5">Label</th>
                                    <th className="px-5 py-3.5">Publish</th>
                                    <th className="px-5 py-3.5">Status</th>
                                    <th className="px-5 py-3.5 text-right">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#f4ede8]">
                                {articles?.length ? articles.map(article => (
                                    <tr key={article.id} className="group transition hover:bg-[#fdf7f4]">
                                        <td className="px-5 py-4">
                                            <div className="flex items-center gap-3">
                                                {article.image_url ? (
                                                    <img src={article.image_url} alt={article.title} className="h-10 w-14 rounded-lg object-cover" onError={e => e.target.style.display = "none"} />
                                                ) : (
                                                    <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-[#fdecea] text-xs font-bold text-[#991612]">
                                                        {article.title?.[0] ?? "A"}
                                                    </div>
                                                )}
                                                <div className="min-w-0">
                                                    <p className="max-w-[240px] truncate font-semibold text-[#2d1a1a]">{article.title}</p>
                                                    {article.excerpt && (
                                                        <p className="mt-0.5 max-w-[240px] truncate text-[11px] text-[#9b8f8a]">{article.excerpt}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-4">
                                            {article.label ? (
                                                <span className="rounded-full bg-[#f4ede8] px-2.5 py-1 text-[11px] font-semibold text-[#7c6f6a]">{article.label}</span>
                                            ) : <span className="text-[#c4aea6]">—</span>}
                                        </td>
                                        <td className="px-5 py-4 text-[11px] text-[#7c6f6a]">
                                            {article.published_at ? article.published_at.slice(0, 10) : "—"}
                                        </td>
                                        <td className="px-5 py-4">
                                            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${article.is_featured ? "bg-[#fdecea] text-[#991612]" : "bg-[#f4ede8] text-[#9b8f8a]"}`}>
                                                {article.is_featured ? "Featured" : "Regular"}
                                            </span>
                                        </td>
                                        <td className="px-5 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link href={`/admin/articles/${article.id}/edit`}
                                                    className="rounded-lg border border-[#e8d5ce] px-3 py-1.5 text-xs font-semibold text-[#991612] transition hover:border-[#991612] hover:bg-[#fdecea]">
                                                    Edit
                                                </Link>
                                                <button onClick={() => handleDelete(article)}
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
                                                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#991612]"><path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clipRule="evenodd" /></svg>
                                                </div>
                                                <p className="text-sm font-semibold text-[#4b2e2b]">Belum ada artikel</p>
                                                <p className="text-xs text-[#9b8f8a]">Tulis artikel pertama Anda</p>
                                                <Link href="/admin/articles/create" className="mt-2 rounded-xl bg-[#991612] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b01f1a]">
                                                    Tulis Artikel
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
