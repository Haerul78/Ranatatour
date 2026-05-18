import { Link, useForm, usePage } from "@inertiajs/react";
import { motion } from "framer-motion";
import { useState } from "react";

function EyeIcon({ open }) {
    return open ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
            <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
    );
}

export default function Login() {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({ username: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        post("/admin/login");
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Panel */}
            <div className="relative hidden w-1/2 overflow-hidden lg:flex">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a0a] via-[#6f0f0c] to-[#991612]" />
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(circle at 30% 70%, #fff 1px, transparent 1px), radial-gradient(circle at 70% 20%, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}
                />
                <div className="relative flex w-full flex-col justify-between p-12">
                    <div className="flex items-center gap-3">
                        <img src="/images/LOGO RANATA.svg" alt="Ranata Tour" className="h-9 w-auto drop-shadow-lg" />
                        <span className="text-xl font-semibold text-white">
                            Ranata<span className="text-[#f2b7a5]">Tour</span>
                        </span>
                    </div>
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#f2b7a5]" />
                            Admin Portal
                        </div>
                        <motion.h2
                            className="text-4xl font-semibold leading-snug text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Kelola Bisnis<br />
                            <span className="text-[#f2b7a5]">Dengan Mudah</span>
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-sm leading-relaxed text-white/60"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Akses dashboard untuk mengelola tour, event, artikel, dan seluruh konten Ranata Tour.
                        </motion.p>
                        <motion.div
                            className="mt-10 grid grid-cols-2 gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {[
                                { label: "Tour", icon: "🗺️" },
                                { label: "Event", icon: "🎪" },
                                { label: "Artikel", icon: "📝" },
                                { label: "Klien", icon: "🤝" },
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                                    <span className="text-base">{item.icon}</span>
                                    <span className="text-xs font-semibold text-white/70">{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex w-full flex-col items-center justify-center bg-[#fdf7f4] px-6 py-12 lg:w-1/2">
                <motion.div
                    className="w-full max-w-md"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {/* Mobile logo */}
                    <div className="mb-8 flex items-center gap-2 lg:hidden">
                        <img src="/images/LOGO RANATA.svg" alt="Ranata Tour" className="h-8 w-auto" />
                        <span className="text-lg font-semibold text-[#4b2e2b]">
                            Ranata<span className="text-[#991612]">Tour</span>
                        </span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8d5ce] bg-[#fdecea] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#991612]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#991612]" />
                        Admin
                    </span>
                    <h1 className="mt-3 text-3xl font-semibold text-[#2d1a1a]">Masuk Dashboard</h1>
                    <p className="mt-2 text-sm text-[#7c6f6a]">
                        Gunakan username <span className="font-semibold text-[#4b2e2b]">admin</span> dan password <span className="font-semibold text-[#4b2e2b]">admin123</span>.
                    </p>

                    {errors?.username && (
                        <motion.div
                            className="mt-5 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                            </svg>
                            {errors.username}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-[#4b2e2b]">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={e => setData("username", e.target.value)}
                                placeholder="admin"
                                required
                                autoFocus
                                className="mt-2 w-full rounded-2xl border border-[#e8d5ce] bg-white px-4 py-3 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:border-[#991612] focus:ring-2 focus:ring-[#991612]/15"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-semibold text-[#4b2e2b]">Password</label>
                            <div className="relative mt-2">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={data.password}
                                    onChange={e => setData("password", e.target.value)}
                                    placeholder="admin123"
                                    required
                                    className="w-full rounded-2xl border border-[#e8d5ce] bg-white px-4 py-3 pr-11 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:border-[#991612] focus:ring-2 focus:ring-[#991612]/15"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(v => !v)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9b8f8a] transition hover:text-[#991612]"
                                    aria-label="Toggle password visibility"
                                >
                                    <EyeIcon open={showPassword} />
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-2 w-full rounded-2xl bg-[#991612] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(153,22,18,0.35)] transition hover:bg-[#b01f1a] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
                                    </svg>
                                    Memproses...
                                </span>
                            ) : "Masuk ke Dashboard"}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-xs text-[#9b8f8a]">
                        Belum ada akun?{" "}
                        <Link href="/admin/signup" className="font-semibold text-[#991612] transition hover:text-[#b01f1a]">
                            Daftar di sini
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
