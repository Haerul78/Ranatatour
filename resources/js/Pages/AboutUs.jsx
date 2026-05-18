import { motion } from "framer-motion";
import MainLayout from "../Layouts/MainLayout";

export default function AboutUs({ about = null }) {
    const stats = [
        { number: "15+", label: "Tahun Pengalaman" },
        { number: "50K+", label: "Wisatawan Puas" },
        { number: "100+", label: "Destinasi" },
        { number: "500+", label: "Tour Packages" },
    ];

    const aboutStats = [
        { icon: "award", number: "14+", label: "Tahun Pengalaman" },
        { icon: "globe", number: "500+", label: "Trip Sukses" },
        { icon: "users", number: "10K+", label: "Pelanggan Puas" },
        { icon: "heart", number: "98%", label: "Rating Kepuasan" },
    ];

    const valueIcons = {
        heart: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
            >
                <path d="M12 20.5c-5-3.9-8-6.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 3c0 3.7-3 6.6-8 10.5Z" />
            </svg>
        ),
        award: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
            >
                <circle cx="12" cy="8" r="4" />
                <path d="M9 12l-2 8 5-2 5 2-2-8" />
            </svg>
        ),
        globe: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
            >
                <circle cx="12" cy="12" r="8" />
                <path d="M4 12h16" />
                <path d="M12 4a12 12 0 0 1 0 16" />
                <path d="M12 4a12 12 0 0 0 0 16" />
            </svg>
        ),
        target: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
            >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
            </svg>
        ),
        users: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[18px] w-[18px]"
            >
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
                <path d="M14.5 18a4.5 4.5 0 0 1 6.5 0" />
            </svg>
        ),
    };

    const values = [
        {
            icon: valueIcons.heart,
            title: "Kualitas Terbaik",
            description: "Kami berkomitmen memberikan pengalaman tour berkualitas tinggi dengan standar internasional",
        },
        {
            icon: valueIcons.award,
            title: "Harga Kompetitif",
            description: "Menawarkan paket tour dengan harga terjangkau tanpa mengurangi kualitas layanan",
        },
        {
            icon: valueIcons.globe,
            title: "Pelayanan Profesional",
            description: "Tim profesional kami siap melayani dan memastikan kepuasan Anda selama perjalanan",
        },
        {
            icon: valueIcons.target,
            title: "Keamanan Terjamin",
            description: "Keselamatan dan kenyamanan pelanggan adalah prioritas utama kami",
        },
    ];

    const journeyYears = ["2010", "2014", "2018", "2020", "2024"];

    const teamMembers = [
        {
            name: "Adi Supriyanto",
            position: "Tour Guide",
            image: "/images/Bali.jpg",
        },
        {
            name: "Siti Nurhaliza",
            position: "Tour Coordinator",
            image: "/images/Borobudur.jpg",
        },
        {
            name: "Ahmad Wijaya",
            position: "Travel Agent",
            image: "/images/Bali.jpg",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const aboutTitle = about?.about_title || "Tentang Kami";
    const aboutSummary =
        about?.about_summary ||
        "Menciptakan kenangan indah dalam setiap perjalanan";
    const aboutBody =
        about?.about_body ||
        "Ranatatour dimulai dengan visi sederhana untuk membuat perjalanan menjadi lebih mudah, aman, dan menyenangkan.";

    return (
        <MainLayout>
            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img 
                        src="/images/Bali.jpg" 
                        alt="Hero" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div 
                    className="relative z-10 text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        {aboutTitle.split(" ")[0]} <span className="text-merah-ranata">{aboutTitle.split(" ").slice(1).join(" ") || "Kami"}</span>
                    </h1>
                    <p className="text-xl text-gray-300">{aboutSummary}</p>
                </motion.div>
            </section>

            {/* Journey Section */}
            <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Perjalanan Kami Dimulai dari <span className="text-merah-ranata">Passion</span>
                            </h2>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                {aboutBody}
                            </p>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                Kami percaya bahwa setiap perjalanan adalah petualangan yang unik. Oleh karena itu, kami menyediakan paket tour yang fleksibel dan disesuaikan dengan kebutuhan setiap klien.
                            </p>
                            <button className="bg-merah-ranata hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300">
                                Hubungi Kami
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <img 
                                src="/images/Bali.jpg" 
                                alt="Journey" 
                                className="rounded-lg shadow-lg w-full h-96 object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="bg-merah-ranata py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center text-white"
                                variants={itemVariants}
                            >
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{stat.number}</h3>
                                <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-14 px-4 md:px-8 lg:px-16 bg-[#fdf2ea] border-t border-[#efcfc4]">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#4b2e2b] mb-2">Nilai-Nilai Kami</h2>
                        <p className="text-xs md:text-sm text-[#7c6f6a] max-w-2xl mx-auto">Prinsip yang menjadi fondasi layanan kami</p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {values.map((value, index) => (
                            <motion.div 
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-[#f1e3dd] shadow-[0_10px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)] transition duration-300 text-center"
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <div className="mx-auto flex items-center justify-center w-10 h-10 bg-[#fdeceb] text-merah-ranata rounded-full mb-4 ring-1 ring-[#f3d7d0]">
                                    {value.icon}
                                </div>
                                <h3 className="text-base font-semibold text-[#4b2e2b] mb-2">{value.title}</h3>
                                <p className="text-sm text-[#7c6f6a] leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* About Details Section */}
            <section className="bg-merah-ranata text-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {aboutStats.map((stat, index) => (
                            <motion.div key={index} className="text-center text-white" variants={itemVariants}>
                                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/90">
                                    {valueIcons[stat.icon]}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{stat.number}</h3>
                                <p className="text-xs md:text-sm text-white/70">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-10 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Tentang Kami</h2>
                            <p className="text-sm text-white/80 mb-4 leading-relaxed">
                                Ranatatour hadir sebagai partner perjalanan yang terpercaya, menghadirkan pengalaman liburan yang aman, nyaman, dan berkelas untuk berbagai kebutuhan wisata.
                            </p>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Dengan jaringan mitra di berbagai destinasi, kami memastikan setiap perjalanan berjalan lancar dan berkesan dengan layanan yang hangat dan profesional.
                            </p>
                            <button className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold text-merah-ranata shadow-sm transition hover:bg-red-50">
                                Pelajari Lebih Lanjut
                            </button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-base font-semibold mb-4">Perjalanan Kami</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {journeyYears.map((year, index) => (
                                    <span
                                        key={year}
                                        className={`rounded-full border px-3 py-1 text-xs transition ${
                                            index === 0
                                                ? "bg-white text-merah-ranata border-white"
                                                : "border-white/30 text-white/70"
                                        }`}
                                    >
                                        {year}
                                    </span>
                                ))}
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-merah-ranata">
                                        {valueIcons.award}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold">Awal Perjalanan</h4>
                                        <p className="text-xs text-white/60">2010</p>
                                    </div>
                                </div>
                                <p className="text-xs text-white/70 leading-relaxed">
                                    Ranatatour didirikan dengan misi memberikan pengalaman perjalanan premium yang terjangkau untuk setiap pelanggan.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fdf2ea] border-t border-[#efcfc4]">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-10"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-semibold text-[#4b2e2b] mb-2">Tim Profesional Kami</h2>
                        <p className="text-xs md:text-sm text-[#7c6f6a] max-w-2xl mx-auto">Dikelola oleh tim ahli di bidang pariwisata</p>
                    </motion.div>

                    <motion.div 
                        className="grid md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div 
                                key={index}
                                className="text-center bg-white rounded-2xl border border-[#f1e3dd] shadow-[0_10px_24px_rgba(0,0,0,0.08)]"
                                variants={itemVariants}
                            >
                                <div className="relative overflow-hidden rounded-2xl h-44">
                                    <img 
                                        src={member.image} 
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="px-4 py-4">
                                    <h3 className="text-sm font-semibold text-[#4b2e2b]">{member.name}</h3>
                                    <p className="text-xs text-[#7c6f6a]">{member.position}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-merah-ranata to-red-700 py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-white mb-4">Siap untuk Petualangan Berikutnya?</h2>
                        <p className="text-red-100 mb-8 text-lg">Mari bergabung dengan ribuan pelanggan yang telah merasakan pengalaman tour bersama Ranatatour</p>
                        <button className="bg-white text-merah-ranata px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition duration-300">
                            Pesan Paket Tour Sekarang
                        </button>
                    </motion.div>
                </div>
            </section>
        </MainLayout>
    );
}
