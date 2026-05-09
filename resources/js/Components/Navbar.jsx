import { Link } from "@inertiajs/react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Tour", href: "/tour" },
        { label: "Event", href: "/event" },
        { label: "About Us", href: "#about" },
        { label: "Contact", href: "#contact" },
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

    const navText = isScrolled ? "text-[#4b2e2b]" : "text-white";
    const menuText = isScrolled ? "text-[#7c6f6a]" : "text-white/80";
    const logoTone = isScrolled ? "opacity-90" : "drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]";

    return (
        <motion.nav
            className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 transition-all duration-300 md:px-10"
            initial={false}
            animate={{
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)",
                boxShadow: isScrolled ? "0 12px 32px rgba(15, 23, 42, 0.08)" : "0 0 0 rgba(0,0,0,0)",
                backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <motion.img
                    src="/images/LOGO RANATA.svg"
                    alt="Ranata Tour"
                    className={`h-9 w-auto transition ${logoTone}`}
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <h1 className={`text-xl font-semibold md:text-2xl ${navText}`}>
                    Ranata<span className={isScrolled ? "text-merah-ranata" : "text-[#f2b7a5]"}>Tour</span>
                </h1>
            </div>

            {/*  Menu */}
            <motion.ul
                className={`hidden gap-8 text-sm font-medium md:flex ${menuText}`}
                variants={menuContainer}
                initial="hidden"
                animate="visible"
            >
                {navItems.map(item => (
                    <motion.li
                        key={item.label}
                        className="cursor-pointer transition hover:text-merah-ranata"
                        variants={menuItem}
                        whileHover={{ y: -2 }}
                    >
                        <Link href={item.href}>{item.label}</Link>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Button */}
            <div className="flex items-center gap-3">
                <motion.button
                    type="button"
                    className="hidden rounded-full bg-merah-ranata px-5 py-2 text-sm font-semibold text-white transition hover:bg-red-700 md:inline-flex"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Login
                </motion.button>
                <motion.button
                    type="button"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition md:hidden ${
                        isScrolled ? "border-[#e7d9d4] text-[#4b2e2b]" : "border-white/40 text-white"
                    }`}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="sr-only">Toggle menu</span>
                    <span className="block h-0.5 w-4 rounded-full bg-current" />
                    <span className="mt-1 block h-0.5 w-4 rounded-full bg-current" />
                    <span className="mt-1 block h-0.5 w-4 rounded-full bg-current" />
                </motion.button>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 md:hidden"
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
                            className="absolute right-0 top-0 h-full w-72 bg-white px-6 py-8 shadow-2xl"
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
                            <motion.button
                                type="button"
                                className="mt-8 w-full rounded-full bg-merah-ranata px-5 py-2 text-sm font-semibold text-white"
                                whileTap={{ scale: 0.98 }}
                            >
                                Login
                            </motion.button>
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}