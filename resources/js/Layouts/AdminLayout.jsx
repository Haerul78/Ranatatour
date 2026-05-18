import { Link, router, usePage } from "@inertiajs/react";

const navItems = [
    {
        href: "/admin",
        label: "Dashboard",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
            </svg>
        ),
    },
    {
        href: "/admin/tours",
        label: "Tour",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z" />
                <circle cx="12" cy="9" r="2.5" />
            </svg>
        ),
    },
    {
        href: "/admin/events",
        label: "Event",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" strokeLinecap="round" strokeWidth="2.2" />
            </svg>
        ),
    },
    {
        href: "/admin/articles",
        label: "Artikel",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
        ),
    },
    {
        href: "/admin/clients",
        label: "Client",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        href: "/admin/users",
        label: "User",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        ),
    },
    {
        href: "/admin/settings",
        label: "Pengaturan",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
            </svg>
        ),
    },
];

export default function AdminLayout({ title, subtitle, children }) {
    const { url } = usePage();

    const handleLogout = () => {
        router.post("/admin/logout");
    };

    const isActive = href =>
        href === "/admin" ? url === "/admin" : url.startsWith(href);

    return (
        <div className="flex min-h-screen bg-[#f4ede8]">
            {/* Sidebar */}
            <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col overflow-y-auto lg:flex"
                style={{ background: "linear-gradient(160deg, #1c0a0a 0%, #6f0f0c 50%, #991612 100%)" }}>

                {/* Brand */}
                <div className="px-6 pb-4 pt-8">
                    <div className="flex items-center gap-3">
                        <img src="/images/LOGO RANATA.svg" alt="Ranata Tour" className="h-8 w-auto drop-shadow" />
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">Admin</p>
                            <p className="text-base font-semibold text-white leading-tight">
                                Ranata<span className="text-[#f2b7a5]">Tour</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Profile */}
                <div className="mx-4 mb-6 rounded-2xl bg-white/10 px-4 py-3.5 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2b7a5]/30 text-sm font-bold text-[#f2b7a5]">
                            A
                        </div>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-white">Administrator</p>
                            <p className="truncate text-[11px] text-white/50">admin@ranata.local</p>
                        </div>
                    </div>
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-0.5 px-3">
                    <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">Menu</p>
                    {navItems.map(item => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                                    active
                                        ? "bg-white text-[#991612] shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
                                        : "text-white/70 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <span className={active ? "text-[#991612]" : "text-white/50"}>
                                    {item.icon}
                                </span>
                                {item.label}
                                {active && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[#991612]" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Bottom */}
                <div className="space-y-1 p-3">
                    <Link
                        href="/"
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-white/40">
                            <path d="M3 12L12 3l9 9" /><path d="M9 21V12h6v9" /><path d="M3 12v9h18V12" />
                        </svg>
                        Lihat Website
                    </Link>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60 transition hover:bg-white/10 hover:text-white"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 text-white/40">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Keluar
                    </button>
                </div>
            </aside>

            {/* Main */}
            <div className="flex min-w-0 flex-1 flex-col">
                {/* Top Bar */}
                <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#e8d5ce]/60 bg-[#f4ede8]/80 px-6 py-4 backdrop-blur-md lg:px-8">
                    <div>
                        <h1 className="text-xl font-semibold text-[#2d1a1a]">{title}</h1>
                        {subtitle && <p className="mt-0.5 text-xs text-[#9b8f8a]">{subtitle}</p>}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            href="/"
                            className="hidden items-center gap-2 rounded-xl border border-[#e0ccc5] bg-white px-4 py-2 text-xs font-semibold text-[#7c6f6a] shadow-sm transition hover:border-[#991612] hover:text-[#991612] sm:flex"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                            Website
                        </Link>
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="flex items-center gap-2 rounded-xl border border-[#e0ccc5] bg-white px-4 py-2 text-xs font-semibold text-[#7c6f6a] shadow-sm transition hover:border-red-300 hover:bg-red-50 hover:text-red-600 lg:hidden"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3.5 w-3.5">
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
                            </svg>
                            Keluar
                        </button>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
