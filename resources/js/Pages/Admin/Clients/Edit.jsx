import { Link, useForm } from "@inertiajs/react";
import AdminLayout from "../../../Layouts/AdminLayout";

export default function Edit({ client }) {
    const { data, setData, put, processing, errors } = useForm({
        name: client.name ?? "", logo_url: client.logo_url ?? "",
        testimonial: client.testimonial ?? "",
        is_featured: client.is_featured ?? false, sort_order: client.sort_order ?? 0,
    });

    const handleSubmit = e => {
        e.preventDefault();
        put(`/admin/clients/${client.id}`);
    };

    return (
        <AdminLayout title="Edit Klien" subtitle={`Mengedit: ${client.name}`}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
                    <div className="space-y-5">
                        <Card title="Informasi Klien" accent="#991612">
                            <Field label="Nama Klien / Perusahaan" required error={errors.name}>
                                <Input value={data.name} onChange={v => setData("name", v)} placeholder="Contoh: PT. Maju Bersama" error={errors.name} autoFocus />
                            </Field>
                            <Field label="URL Logo" error={errors.logo_url}>
                                <Input value={data.logo_url} onChange={v => setData("logo_url", v)} placeholder="/images/logo-klien.png" error={errors.logo_url} />
                                <LogoPreview src={data.logo_url} name={data.name} />
                            </Field>
                        </Card>

                        <Card title="Testimoni" accent="#c76854">
                            <Field label="Kutipan Testimoni" error={errors.testimonial}>
                                <textarea value={data.testimonial} onChange={e => setData("testimonial", e.target.value)}
                                    rows={4} placeholder="Apa yang klien katakan tentang layanan Ranata Tour? Tulis di sini..."
                                    className={textareaClass(errors.testimonial)} />
                                {data.testimonial && (
                                    <div className="mt-3 rounded-xl border border-[#e8d5ce] bg-[#fdf7f4] p-4">
                                        <p className="text-xs italic text-[#7c6f6a]">"{data.testimonial}"</p>
                                        {data.name && <p className="mt-2 text-[11px] font-semibold text-[#4b2e2b]">— {data.name}</p>}
                                    </div>
                                )}
                            </Field>
                        </Card>
                    </div>

                    <div className="space-y-5">
                        <Card title="Pengaturan" accent="#e3a39f">
                            <Field label="Status">
                                <Toggle checked={data.is_featured} onChange={v => setData("is_featured", v)} label="Tampilkan sebagai Featured" desc="Klien akan muncul di bagian unggulan" />
                            </Field>
                            <Field label="Urutan Tampil" error={errors.sort_order}>
                                <Input type="number" value={data.sort_order} onChange={v => setData("sort_order", v)} placeholder="0" error={errors.sort_order} />
                                <p className="mt-1 text-[11px] text-[#9b8f8a]">Angka kecil = tampil lebih awal</p>
                            </Field>
                        </Card>
                        <div className="flex flex-col gap-2.5">
                            <button type="submit" disabled={processing}
                                className="flex items-center justify-center gap-2 rounded-xl bg-[#991612] py-3 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(153,22,18,0.3)] transition hover:bg-[#b01f1a] disabled:opacity-60">
                                {processing ? <><Spinner />Menyimpan...</> : <><SaveIcon />Perbarui Klien</>}
                            </button>
                            <Link href="/admin/clients" className="flex items-center justify-center rounded-xl border border-[#e0ccc5] py-3 text-sm font-semibold text-[#7c6f6a] transition hover:border-[#991612] hover:text-[#991612]">
                                Batal
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </AdminLayout>
    );
}

function Card({ title, accent, children }) {
    return (
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0_4px_20px_rgba(153,22,18,0.07)]">
            <div className="flex items-center gap-3 border-b border-[#f4ede8] px-6 py-4">
                <span className="h-3 w-1 rounded-full" style={{ background: accent }} />
                <h3 className="text-sm font-semibold text-[#2d1a1a]">{title}</h3>
            </div>
            <div className="space-y-4 p-6">{children}</div>
        </div>
    );
}
function Field({ label, required, error, children }) {
    return (
        <div>
            <label className="mb-1.5 flex items-center gap-1 text-xs font-semibold text-[#4b2e2b]">
                {label}{required && <span className="text-[#991612]">*</span>}
            </label>
            {children}
            {error && <p className="mt-1.5 text-xs text-red-600">⚠ {error}</p>}
        </div>
    );
}
function Input({ value, onChange, placeholder, error, type = "text", autoFocus, className = "" }) {
    return (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} autoFocus={autoFocus}
            className={`w-full rounded-xl border bg-[#fdfaf9] px-3.5 py-2.5 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:bg-white focus:ring-2 ${className} ${error ? "border-red-400 focus:ring-red-200" : "border-[#e8d5ce] focus:border-[#991612] focus:ring-[#991612]/15"}`} />
    );
}
function textareaClass(error) {
    return `w-full rounded-xl border bg-[#fdfaf9] px-3.5 py-2.5 text-sm text-[#2d1a1a] placeholder-[#c4aea6] outline-none transition focus:bg-white focus:ring-2 resize-none ${error ? "border-red-400 focus:ring-red-200" : "border-[#e8d5ce] focus:border-[#991612] focus:ring-[#991612]/15"}`;
}
function Toggle({ checked, onChange, label, desc }) {
    return (
        <button type="button" onClick={() => onChange(!checked)} className="flex w-full items-start gap-3 rounded-xl border border-[#e8d5ce] bg-[#fdfaf9] p-3.5 text-left transition hover:border-[#c4aea6]">
            <div className={`relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-[#991612]" : "bg-[#ddd0ca]"}`}>
                <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-4" : "translate-x-0.5"}`} />
            </div>
            <div>
                <p className="text-xs font-semibold text-[#2d1a1a]">{label}</p>
                {desc && <p className="mt-0.5 text-[11px] text-[#9b8f8a]">{desc}</p>}
            </div>
        </button>
    );
}
function LogoPreview({ src, name }) {
    if (!src && !name) return null;
    return (
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-[#e8d5ce] bg-[#fdf7f4] p-3">
            {src ? (
                <img src={src} alt={name} className="h-10 w-20 object-contain" onError={e => e.target.style.display = "none"} />
            ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdecea] text-sm font-bold text-[#991612]">
                    {name?.[0]?.toUpperCase() ?? "?"}
                </div>
            )}
            <p className="text-xs font-semibold text-[#4b2e2b]">{name || "Nama klien"}</p>
        </div>
    );
}
function SaveIcon() {
    return <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path d="M3.75 3A1.75 1.75 0 0 0 2 4.75v10.5c0 .966.784 1.75 1.75 1.75h12.5A1.75 1.75 0 0 0 18 15.25V7.082a1.75 1.75 0 0 0-.513-1.237L14.154 2.513A1.75 1.75 0 0 0 12.917 2H3.75ZM6 15v-4a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 .75.75v4H6Zm7.5-11.25v2.5A.75.75 0 0 1 12.75 7h-5A.75.75 0 0 1 7 6.25v-2.5h6.5Z" /></svg>;
}
function Spinner() {
    return <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" /></svg>;
}
