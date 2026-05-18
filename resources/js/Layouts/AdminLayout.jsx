import { Link, useForm } from "@inertiajs/react";

export default function AdminLayout({ title, subtitle, children }) {
    const { post } = useForm();

    const handleLogout = () => {
        post("/admin/logout");
    };

    return (
        <div className="min-h-screen bg-[#f7efe9] text-[#3c2a2a]">
            <div className="min-h-screen px-5 py-10 lg:px-10">
                <div className="grid min-h-[calc(100vh-5rem)] gap-6 lg:grid-cols-[260px_1fr]">
                    <aside className="sticky top-10 h-fit rounded-[28px] bg-white shadow-[0_18px_40px_rgba(153,22,18,0.16)]">
                        <div className="rounded-[28px] bg-gradient-to-b from-[#b01f1a] via-[#991612] to-[#6f0f0c] px-6 pb-6 pt-8 text-white">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">Admin</p>
                            <h2 className="mt-3 text-xl font-semibold tracking-wide">Ranata Tour</h2>
                            <p className="mt-2 text-xs text-white/80">Management Portal</p>
                            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/15 px-3 py-3">
                                <div className="h-10 w-10 rounded-full bg-white/30" />
                                <div>
                                    <p className="text-sm font-semibold">Administrator</p>
                                    <p className="text-[11px] text-white/70">Project Manager</p>
                                </div>
                            </div>
                        </div>
                        <nav className="space-y-1 px-4 pb-6 pt-6 text-sm font-semibold text-[#7c6f6a]">
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#e6b1ad]" />
                                Home
                            </Link>
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin/tours">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#d98a84]" />
                                Tour
                            </Link>
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin/events">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#c86a62]" />
                                Event
                            </Link>
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin/articles">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#e3a39f]" />
                                Artikel
                            </Link>
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin/clients">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#d0766d]" />
                                Client
                            </Link>
                            <Link className="flex items-center gap-3 rounded-2xl px-4 py-2 transition hover:bg-[#f7ede8] hover:text-[#991612]" href="/admin/users">
                                <span className="h-2.5 w-2.5 rounded-full bg-[#bf5850]" />
                                User
                            </Link>
                        </nav>
                    </aside>
                    <div className="space-y-6">
                        <header className="flex flex-wrap items-center justify-between gap-4 rounded-[26px] bg-white px-6 py-5 shadow-[0_18px_36px_rgba(153,22,18,0.12)]">
                            <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9b8f8a]">Dashboard</p>
                                <h1 className="mt-2 text-2xl font-semibold">{title}</h1>
                                {subtitle ? <p className="mt-1 text-sm text-[#7c6f6a]">{subtitle}</p> : null}
                            </div>
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/"
                                    className="rounded-full border border-[#ead3cc] px-5 py-2 text-sm font-semibold text-[#7c6f6a] transition hover:border-[#991612] hover:text-[#991612]"
                                >
                                    Lihat Website
                                </Link>
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="rounded-full border border-[#ead3cc] px-5 py-2 text-sm font-semibold text-[#7c6f6a] transition hover:border-[#991612] hover:text-[#991612]"
                                >
                                    Logout
                                </button>
                            </div>
                        </header>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
