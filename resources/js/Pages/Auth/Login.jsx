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
    const { data, setData, post, processing } = useForm({ login: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        post("/login");
    };

    return (
        <div className="flex min-h-screen">
            {/* Left Panel */}
            <div className="relative hidden w-1/2 overflow-hidden lg:flex">
                <img
                    src="/images/Bali.jpg"
                    alt="Ranata Tour"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#6f0f0c]/90 via-[#991612]/75 to-[#b01f1a]/60" />
                <div className="relative flex w-full flex-col justify-between p-12">
                    <Link href="/" className="flex items-center gap-3">
                        <img src="/images/LOGO RANATA.svg" alt="Ranata Tour" className="h-9 w-auto drop-shadow-lg" />
                        <span className="text-xl font-semibold text-white">
                            Ranata<span className="text-[#f2b7a5]">Tour</span>
                        </span>
                    </Link>
                    <div>
                        <motion.h2
                            className="text-4xl font-semibold leading-snug text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Jelajahi Dunia<br />
                            <span className="text-[#f2b7a5]">Bersama Kami</span>
                        </motion.h2>
                        <motion.p
                            className="mt-4 text-sm leading-relaxed text-white/70"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            Masuk untuk melihat paket tour, event, dan penawaran eksklusif yang telah kami siapkan untukmu.
                        </motion.p>
                        <motion.div
                            className="mt-8 flex items-center gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {["Bali", "Yogyakarta", "Lombok", "Jakarta"].map(city => (
                                <span
                                    key={city}
                                    className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-white/80"
                                >
                                    {city}
                                </span>
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
                    <Link href="/" className="mb-8 flex items-center gap-2 lg:hidden">
                        <img src="/images/LOGO RANATA.svg" alt="Ranata Tour" className="h-8 w-auto" />
                        <span className="text-lg font-semibold text-[#4b2e2b]">
                            Ranata<span className="text-[#991612]">Tour</span>
                        </span>
                    </Link>

                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b07070]">Selamat Datang</p>
                    <h1 className="mt-2 text-3xl font-semibold text-[#2d1a1a]">Masuk ke Akun</h1>
                    <p className="mt-2 text-sm text-[#7c6f6a]">Gunakan email atau username untuk masuk.</p>

                    {errors?.login && (
                        <motion.div
                            className="mt-5 flex items-center gap-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            initial={{ opacity: 0, scale: 0.97 }}
                            animate={{ opacity: 1, scale: 1 }}
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0">
                                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                            </svg>
                            {errors.login}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-[#4b2e2b]">Email / Username</label>
                            <input
                                type="text"
                                name="login"
                                value={data.login}
                                onChange={e => setData("login", e.target.value)}
                                placeholder="contoh@email.com"
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
                                    placeholder="Masukkan password"
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
                            className="relative mt-2 w-full overflow-hidden rounded-2xl bg-[#991612] px-4 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(153,22,18,0.35)] transition hover:bg-[#b01f1a] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
                                    </svg>
                                    Memproses...
                                </span>
                            ) : "Masuk"}
                        </button>
                    </form>

                    <div className="mt-6 flex items-center justify-center gap-1 text-xs text-[#9b8f8a]">
                        <Link href="/" className="font-semibold text-[#991612] transition hover:text-[#b01f1a]">
                            ← Kembali ke Beranda
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
