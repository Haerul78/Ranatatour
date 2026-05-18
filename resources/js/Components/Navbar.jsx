import { Link } from "@inertiajs/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [shouldAnimate, setShouldAnimate] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Tour", href: "/tour" },
        { label: "Event", href: "/event" },
        { label: "About Us", href: "/about-us" },
        { label: "Contact", href: "/contact" },
    ];

    const menuContainer = {
        hidden: { opacity: 0, y: -6 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
    };

    const menuItem = {
        hidden: { opacity: 0, y: -6 },
        visible: { opacity: 1, y: 0 },
    };

    useMotionValueEvent(scrollY, "change", latest => {
        setIsScrolled(latest > 10);
    });

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem("ranata_nav_animated") === "true";
        if (!hasAnimated) {
            setShouldAnimate(true);
            sessionStorage.setItem("ranata_nav_animated", "true");
        }
    }, []);

    const navText =
        isScrolled
            ? "text-[#4b2e2b]"
            : "text-white";
    const menuText =
        isScrolled
            ? "text-[#7c6f6a]"
            : "text-white/80";
    const logoTone = isScrolled ? "opacity-90" : "drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]";
    const langButtonTone =
        isScrolled
            ? "border-[#e7d9d4] text-[#4b2e2b]"
            : "border-white/40 text-white";
    const langDropdownTone =
        isScrolled
            ? "border-[#ead8d0] bg-white/90 text-[#4b2e2b]"
            : "border-white/30 bg-white/20 text-white";

    return (
        <motion.nav
            className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-all duration-300 md:px-10"
            initial={false}
            animate={{
                backgroundColor: isScrolled
                    ? "rgba(255, 255, 255, 0.98)"
                    : "rgba(255, 255, 255, 0)",
                boxShadow: isScrolled
                    ? "0 12px 32px rgba(15, 23, 42, 0.08)"
                    : "0 0 0 rgba(0,0,0,0)",
                backdropFilter: isScrolled
                    ? "blur(10px)"
                    : "blur(0px)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <img
                    src="/images/LOGO RANATA.svg"
                    alt="Ranata Tour"
                    className={`h-9 w-auto transition ${logoTone}`}
                />
                <h1 className={`text-xl font-semibold md:text-2xl ${navText}`}>
                    {/* Ranata<span className={isScrolled ? "text-merah-ranata" : "text-[#f2b7a5]"}>Tour</span> */}
                    Ranata<span className="text-merah-ranata">Tour</span>
                </h1>
            </div>

            {/*  Menu */}
            <motion.ul
                className={`hidden gap-8 text-sm font-medium lg:flex ${menuText}`}
                variants={menuContainer}
                initial={shouldAnimate ? "hidden" : false}
                animate="visible"
            >
                {navItems.map(item => (
                    <motion.li
                        key={item.label}
                        className="cursor-pointer transition hover:text-merah-ranata"
                        variants={menuItem}
                        whileHover={{ y: -2 }}
                    >
                        {item.external ? (
                            <a href={item.href}>{item.label}</a>
                        ) : (
                            <Link href={item.href}>{item.label}</Link>
                        )}
                    </motion.li>
                ))}
            </motion.ul>

            {/* Button */}
            <div className="flex items-center gap-3">
                <div className="relative hidden md:flex">
                    <button
                        type="button"
                        onClick={() => setIsLangOpen(prev => !prev)}
                        className={`inline-flex items-center gap-2 rounded-full px-2 text-xs font-semibold transition hover:text-merah-ranata ${menuText}`}
                        aria-haspopup="true"
                        aria-expanded={isLangOpen}
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 3a9 9 0 1 0 9 9" />
                            <path d="M3 12h18" />
                            <path d="M12 3a12 12 0 0 1 0 18" />
                            <path d="M12 3a12 12 0 0 0 0 18" />
                        </svg>
                        <span>ID | EN</span>
                    </button>
                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                className={`absolute right-0 mt-2 w-28 rounded-2xl border px-1 py-1 shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md ${langDropdownTone}`}
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen(false)}
                                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-semibold transition hover:text-merah-ranata"
                                >
                                    ID
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen(false)}
                                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-semibold transition hover:text-merah-ranata"
                                >
                                    EN
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <motion.div
                    className="hidden md:inline-flex"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Link
                        href="/login"
                        className="rounded-full bg-merah-ranata px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        Login
                    </Link>
                </motion.div>
                <div className="relative md:hidden">
                    <button
                        type="button"
                        onClick={() => setIsLangOpen(prev => !prev)}
                        className={`inline-flex h-11 items-center gap-2 rounded-full border px-3 text-xs font-semibold ${langButtonTone}`}
                        aria-haspopup="true"
                        aria-expanded={isLangOpen}
                    >
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M12 3a9 9 0 1 0 9 9" />
                            <path d="M3 12h18" />
                            <path d="M12 3a12 12 0 0 1 0 18" />
                            <path d="M12 3a12 12 0 0 0 0 18" />
                        </svg>
                        <span>ID/EN</span>
                    </button>
                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                className={`absolute right-0 mt-2 w-28 rounded-2xl border px-1 py-1 shadow-[0_12px_28px_rgba(0,0,0,0.2)] backdrop-blur-md ${langDropdownTone}`}
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.18, ease: "easeOut" }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen(false)}
                                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-semibold transition hover:text-merah-ranata"
                                >
                                    ID
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsLangOpen(false)}
                                    className="w-full rounded-xl px-3 py-2 text-left text-xs font-semibold transition hover:text-merah-ranata"
                                >
                                    EN
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <motion.button
    type="button"
    onClick={() => {
        setIsLangOpen(false);
        setIsMenuOpen(prev => !prev);
    }}
    className={`inline-flex h-11 w-11 flex-col items-center justify-center gap-1 rounded-full border transition md:hidden ${
        isScrolled || isMenuOpen
            ? "border-[#e7d9d4] text-[#4b2e2b]"
            : "border-white/40 text-white"
    }`}
    whileTap={{ scale: 0.95 }}
>
    <span className="sr-only">Toggle menu</span>

    <span
        className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            isMenuOpen ? "translate-y-1.5 rotate-45" : ""
        }`}
    />

    <span
        className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
        }`}
    />

    <span
        className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
            isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
        }`}
    />
</motion.button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(false)}
                            className="absolute inset-0 bg-black/30"
                            aria-label="Close menu"
                        />
                        <motion.aside
                            className="absolute right-0 top-0 h-screen w-72 bg-white px-6 py-8 shadow-2xl"
                            initial={{ x: 320 }}
                            animate={{ x: 0 }}
                            exit={{ x: 320 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <div className="mb-8 flex items-center justify-between">
                                <span className="text-lg font-semibold text-[#4b2e2b]">Menu</span>
                                <button
                                    type="button"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-full border border-[#e7d9d4] px-3 py-1 text-sm text-[#7c6f6a]"
                                >
                                    Close
                                </button>
                            </div>
                            <motion.ul
                                className="space-y-4 text-sm font-semibold text-[#4b2e2b]"
                                variants={menuContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {navItems.map(item => (
                                    <motion.li key={item.label} variants={menuItem}>
                                        <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                            <motion.div whileTap={{ scale: 0.98 }}>
                                <Link
                                    href="/login"
                                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-merah-ranata px-5 py-2 text-sm font-semibold text-white"
                                >
                                    Login
                                </Link>
                            </motion.div>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}