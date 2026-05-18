import AdminLayout from "../../../Layouts/AdminLayout";

export default function Index({ articles }) {
    return (
        <AdminLayout
            title="Artikel"
            subtitle="Kelola artikel utama yang tampil di website."
        >
            <section className="rounded-[28px] bg-white p-6 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#9b8f8a]">Articles</p>
                        <h2 className="mt-2 text-xl font-semibold text-[#3c2a2a]">Daftar Artikel</h2>
                    </div>
                    <a
                        href="/admin/articles/create"
                        className="rounded-full bg-[#991612] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#7f120f]"
                    >
                        Tambah Artikel
                    </a>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl border border-[#f1e2db]">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#f7ede8] text-xs uppercase tracking-[0.2em] text-[#9b8f8a]">
                            <tr>
                                <th className="px-4 py-3">Judul</th>
                                <th className="px-4 py-3">Label</th>
                                <th className="px-4 py-3">Publish</th>
                                <th className="px-4 py-3">Status</th>
                                <th className="px-4 py-3 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f1e2db]">
                            {articles?.length ? (
                                articles.map(article => (
                                    <tr key={article.id} className="bg-white">
                                        <td className="px-4 py-3 font-semibold text-[#3c2a2a]">{article.title}</td>
                                        <td className="px-4 py-3 text-[#7c6f6a]">{article.label || "-"}</td>
                                        <td className="px-4 py-3 text-[#7c6f6a]">{article.published_at || "-"}</td>
                                        <td className="px-4 py-3">
                                            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${article.is_featured ? "bg-[#f2e3dd] text-[#991612]" : "bg-[#f7ede8] text-[#9b4b3a]"}`}>
                                                {article.is_featured ? "Featured" : "Regular"}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-right">
                                            <a
                                                href={`/admin/articles/${article.id}/edit`}
                                                className="rounded-full border border-[#ead3cc] px-3 py-1 text-xs font-semibold text-[#991612] transition hover:border-[#991612]"
                                            >
                                                Edit
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-4 py-8 text-center text-sm text-[#9b8f8a]">
                                        Belum ada artikel.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </AdminLayout>
    );
}
