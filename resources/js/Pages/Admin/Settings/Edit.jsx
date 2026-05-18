import { useForm } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Edit({ settings }) {
    const { data, setData, put, processing, errors } = useForm({
        about_title: settings?.about_title ?? "",
        about_summary: settings?.about_summary ?? "",
        about_body: settings?.about_body ?? "",
        contact_address: settings?.contact_address ?? "",
        contact_phone: settings?.contact_phone ?? "",
        contact_email: settings?.contact_email ?? "",
        contact_hours: settings?.contact_hours ?? "",
        contact_map_url: settings?.contact_map_url ?? "",
    });

    const handleSubmit = e => {
        e.preventDefault();
        put("/admin/settings");
    };

    return (
        <AdminLayout title="Pengaturan Website" subtitle="Kelola konten halaman About Us dan Contact.">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <div className="space-y-5">
                        {/* About */}
                        <Card
                            accent="#991612"
                            icon={<svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" /></svg>}
                            title="Halaman About Us"
                            desc="Informasi tentang Ranata Tour yang tampil di halaman About"
                        >
                            <Field label="Judul Halaman" error={errors.about_title}>
                                <Input value={data.about_title} onChange={v => setData("about_title", v)}
                                    placeholder="Tentang Ranata Tour" error={errors.about_title} autoFocus />
                            </Field>
                            <Field label="Ringkasan" error={errors.about_summary}>
                                <textarea value={data.about_summary} onChange={e => setData("about_summary", e.target.value)}
                                    rows={2} placeholder="Deskripsi singkat perusahaan yang muncul di hero section..."
                                    className={textareaClass(errors.about_summary)} />
                            </Field>
                            <Field label="Deskripsi Lengkap" error={errors.about_body}>
                                <textarea value={data.about_body} onChange={e => setData("about_body", e.target.value)}
                                    rows={6} placeholder="Cerita lengkap tentang Ranata Tour, sejarah, visi, misi, dan layanan..."
                                    className={textareaClass(errors.about_body)} />
                            </Field>
                        </Card>

                        {/* Contact */}
                        <Card
                            accent="#c76854"
                            icon={<svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" /></svg>}
                            title="Halaman Contact"
                            desc="Informasi kontak yang tampil di halaman Contact"
                        >
                            <Field label="Alamat Kantor" error={errors.contact_address}>
                                <textarea value={data.contact_address} onChange={e => setData("contact_address", e.target.value)}
                                    rows={2} placeholder="Jl. Contoh No. 123, Kelurahan, Kecamatan, Jakarta 12345"
                                    className={textareaClass(errors.contact_address)} />
                            </Field>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Nomor WhatsApp / Telepon" error={errors.contact_phone}>
                                    <Input value={data.contact_phone} onChange={v => setData("contact_phone", v)}
                                        placeholder="+62 812 3456 7890" error={errors.contact_phone} />
                                </Field>
                                <Field label="Email" error={errors.contact_email}>
                                    <Input type="email" value={data.contact_email} onChange={v => setData("contact_email", v)}
                                        placeholder="info@ranatatour.com" error={errors.contact_email} />
                                </Field>
                            </div>
                            <Field label="Jam Operasional" error={errors.contact_hours}>
                                <Input value={data.contact_hours} onChange={v => setData("contact_hours", v)}
                                    placeholder="Senin – Jumat, 08.00 – 17.00 WIB" error={errors.contact_hours} />
                            </Field>
                            <Field label="URL Embed Google Maps" error={errors.contact_map_url}>
                                <Input value={data.contact_map_url} onChange={v => setData("contact_map_url", v)}
                                    placeholder="https://www.google.com/maps/embed?pb=..." error={errors.contact_map_url} />
                                <p className="mt-1 text-[11px] text-[#9b8f8a]">Salin URL embed dari Google Maps (bukan URL biasa)</p>
                            </Field>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-5">
                        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
                            <div className="border-b border-[#f4ede8] px-5 py-4">
                                <p className="text-xs font-semibold text-[#2d1a1a]">Pratinjau Info</p>
                            </div>
                            <div className="space-y-4 p-5">
                                <InfoItem icon="🏢" label="Perusahaan" value={data.about_title || "—"} />
                                <InfoItem icon="📞" label="Telepon" value={data.contact_phone || "—"} />
                                <InfoItem icon="📧" label="Email" value={data.contact_email || "—"} />
                                <InfoItem icon="⏰" label="Jam Buka" value={data.contact_hours || "—"} />
                                <InfoItem icon="📍" label="Alamat" value={data.contact_address || "—"} />
                            </div>
                        </div>

                        <TipCard items={[
                            "Isi semua field agar halaman About & Contact terlihat lengkap",
                            "Nomor WhatsApp dimulai dengan +62 (tanpa 0 di depan)",
                            "URL Maps: di Google Maps, klik Bagikan → Sematkan peta → salin src iframe",
                            "Perubahan langsung terlihat di website setelah disimpan",
                        ]} />

                        <div className="flex flex-col gap-2.5">
                            <button type="submit" disabled={processing}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#991612] py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a] disabled:opacity-60">
                                {processing
                                    ? <><Spinner />Menyimpan...</>
                                    : <><SaveIcon />Simpan Pengaturan</>}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}

function Card({ title, desc, accent, icon, children }) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
            <div className="flex items-start gap-3 border-b border-[#f4ede8] px-6 py-4">
                <div className="mt-0.5 rounded-lg p-1.5" style={{ background: `${accent}18`, color: accent }}>
                    {icon}
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-[#2d1a1a]">{title}</h3>
                    {desc && <p className="mt-0.5 text-[11px] text-[#9b8f8a]">{desc}</p>}
                </div>
            </div>
            <div className="space-y-4 p-6">{children}</div>
        </div>
    );
}

function Field({ label, error, children }) {
    return (
        <div>
            <label className="mb-1.5 block text-xs font-semibold text-[#4b2e2b]">{label}</label>
            {children}
            {error && <p className="mt-1.5 text-xs text-red-600">⚠ {error}</p>}
        </div>
    );
}

function Input({ value, onChange, placeholder, error, type = "text", autoFocus }) {
    return (
        <input type={type} value={value} onChange={e => onChange(e.target.value)}
            placeholder={placeholder} autoFocus={autoFocus}
            className={`w-full rounded-xl border bg-[#fdfaf9] px-3.5 py-2.5 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:bg-white focus:ring-2 ${
                error ? "border-red-400 focus:ring-red-200" : "border-[#e8d5ce] focus:border-[#991612] focus:ring-[#991612]/15"
            }`} />
    );
}

function textareaClass(error) {
    return `w-full rounded-xl border bg-[#fdfaf9] px-3.5 py-2.5 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:bg-white focus:ring-2 resize-none ${
        error ? "border-red-400 focus:ring-red-200" : "border-[#e8d5ce] focus:border-[#991612] focus:ring-[#991612]/15"
    }`;
}

function InfoItem({ icon, label, value }) {
    return (
        <div className="flex items-start gap-2.5">
            <span className="mt-0.5 text-base">{icon}</span>
            <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#9b8f8a]">{label}</p>
                <p className="mt-0.5 truncate text-xs text-[#4b2e2b]">{value}</p>
            </div>
        </div>
    );
}

function TipCard({ items }) {
    return (
        <div className="rounded-2xl border border-[#e8d5ce] bg-[#fdf7f4] p-4">
            <p className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-[#991612]">
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5"><path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" /></svg>
                Panduan
            </p>
            <ul className="space-y-1.5">
                {items.map((tip, i) => <li key={i} className="flex items-start gap-2 text-[11px] text-[#7c6f6a]"><span className="text-[#991612]">•</span>{tip}</li>)}
        </ul>
        </div>
    );
}

function SaveIcon() {
    return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 15.25V7.082a1.75 1.75 0 0 0-.513-1.237L14.154 2.513A1.75 1.75 0 0 0 12.917 2H3.75ZM6 15v-4a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v4H6Zm7.5-11.25v2.5A.75.75 0 0 1 12.75 7h-5A.75.75 0 0 1 7 6.25v-2.5h6.5Z" /></svg>;
}

function Spinner() {
    return <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z"/></svg>;
}
