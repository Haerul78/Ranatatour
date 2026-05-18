import { motion } from "framer-motion";
import MainLayout from "../Layouts/MainLayout";

export default function Contact({ contact = null }) {
    const contactItems = [
        {
            label: "Alamat",
            value: contact?.contact_address || "Jl. Tanah Abang No.12, Jakarta Pusat, DKI Jakarta 10230",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                >
                    <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
                    <circle cx="12" cy="9" r="2.5" />
                </svg>
            ),
        },
        {
            label: "Telepon",
            value: contact?.contact_phone || "(+62) 812 3456 7890",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 6.2 2 2 0 0 1 5.1 4h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1l-1.1 1.1a16 16 0 0 0 6.8 6.8l1.1-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
                </svg>
            ),
        },
        {
            label: "Email",
            value: contact?.contact_email || "info@ranatatour.com",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                >
                    <path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
                    <path d="m22 8-10 6L2 8" />
                </svg>
            ),
        },
        {
            label: "Jam Operasional",
            value: contact?.contact_hours || "Senin - Jumat, 08.00 - 18.00 WIB",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                </svg>
            ),
        },
    ];

    return (
        <MainLayout>
            <div className="-mx-6 md:-mx-10">
                <section className="relative min-h-[60vh] overflow-hidden text-white">
                    <img
                        src="/images/Jakarta.jpg"
                        alt="Hubungi Ranata Tour"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/55" />

                    <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 pt-28 md:px-10">
                        <div className="mx-auto max-w-2xl text-center">
                            <motion.h1
                                className="text-4xl font-semibold leading-tight md:text-6xl"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                Hubungi <span className="text-merah-ranata">Kami</span>
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-sm text-white/80 md:text-base"
                                initial={{ opacity: 0, y: 18 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
                            >
                                Kami siap membantu mewujudkan perjalanan impian Anda.
                            </motion.p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="mx-auto mt-20 max-w-6xl px-6 md:px-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-[#4b2e2b]">Lokasi Kami</h2>
                    <p className="mt-2 text-sm text-[#7c6f6a]">
                        Kunjungi kantor kami atau hubungi tim untuk informasi lebih lanjut.
                    </p>
                </div>

                <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                    <div className="rounded-2xl border border-[#f1e3dd] bg-[#f8eee9] p-5 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                        <h3 className="text-lg font-semibold text-[#4b2e2b]">Hubungi Kami</h3>
                        <ul className="mt-4 space-y-3 text-xs text-[#7c6f6a]">
                            {contactItems.map(item => (
                                <li key={item.label} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-merah-ranata text-white">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <span className="block text-[11px] font-semibold text-[#4b2e2b]">{item.label}</span>
                                        <span className="leading-snug">{item.value}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <p className="mt-6 text-xs font-semibold text-[#4b2e2b]">Kirim Pesan</p>
                        <div className="mt-3 space-y-3">
                            <input
                                type="text"
                                placeholder="Nama Anda"
                                className="w-full rounded-md border border-[#ead8d0] bg-white px-3 py-2 text-xs focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <input
                                type="email"
                                placeholder="Email Anda"
                                className="w-full rounded-md border border-[#ead8d0] bg-white px-3 py-2 text-xs focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <textarea
                                rows="3"
                                placeholder="Pesan Anda"
                                className="w-full rounded-md border border-[#ead8d0] bg-white px-3 py-2 text-xs focus:border-merah-ranata focus:outline-none focus:ring-2 focus:ring-merah-ranata/20"
                            />
                            <button
                                type="button"
                                className="w-full rounded-md bg-merah-ranata px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                    </div>

                    <div className="relative flex min-h-90 items-center justify-center overflow-hidden rounded-2xl bg-black shadow-[0_14px_28px_rgba(0,0,0,0.18)]">
                        <div className="relative w-full max-w-215 aspect-video">
                            <iframe
                                className="absolute inset-0 h-full w-full"
                                src={contact?.contact_map_url || "https://www.youtube.com/embed/rAx1qYtXI28?controls=1&modestbranding=1&playsinline=1&rel=0"}
                                title="Lokasi Ranata Tour"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
