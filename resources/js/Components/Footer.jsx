export default function Footer() {
    return (
        <footer className="mt-20 bg-[#f7ece6]">
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-10">
                <div>
                    <h4 className="text-lg font-semibold text-merah-ranata">Ranatatour</h4>
                    <p className="mt-3 text-sm text-[#7c6f6a]">
                        Menyediakan pengalaman perjalanan premium sejak 2010 dengan layanan personal yang
                        hangat dan terpercaya.
                    </p>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-[#4b2e2b]">Perusahaan</h5>
                    <ul className="mt-3 space-y-2 text-sm text-[#7c6f6a]">
                        <li>Tentang Kami</li>
                        <li>Tim Kami</li>
                        <li>Karir</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-[#4b2e2b]">Layanan</h5>
                    <ul className="mt-3 space-y-2 text-sm text-[#7c6f6a]">
                        <li>Paket Wisata</li>
                        <li>Custom Trip</li>
                        <li>Corporate Travel</li>
                        <li>Honeymoon Package</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-semibold text-[#4b2e2b]">Bantuan</h5>
                    <ul className="mt-3 space-y-2 text-sm text-[#7c6f6a]">
                        <li>Syarat & Ketentuan</li>
                        <li>Kebijakan Privasi</li>
                        <li>Hubungi Kami</li>
                    </ul>
                    <div className="mt-5 flex rounded-full bg-white p-1">
                        <input
                            type="email"
                            placeholder="Email Anda"
                            className="flex-1 rounded-full bg-transparent px-3 text-xs text-[#7c6f6a]"
                        />
                        <button
                            type="button"
                            className="rounded-full bg-merah-ranata px-4 py-2 text-xs font-semibold text-white"
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-[#ecd9d2] py-4 text-center text-xs text-[#9b8f8a]">
                © 2026 Ranatatour. All rights reserved.
            </div>
        </footer>
    );
}