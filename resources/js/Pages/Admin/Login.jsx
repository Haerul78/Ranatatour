import { Link, useForm, usePage } from "@inertiajs/react";

export default function Login() {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        username: "",
        password: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        post("/admin/login");
    };

    return (
        <div className="min-h-screen bg-[#f6eee9] text-[#4b2e2b]">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
                <div className="w-full max-w-md rounded-3xl border border-[#eddad2] bg-white p-8 shadow-[0_20px_60px_rgba(70,40,35,0.15)]">
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8f8a]">Admin</p>
                        <h1 className="mt-2 text-3xl font-semibold">Masuk Dashboard</h1>
                        <p className="mt-2 text-sm text-[#7c6f6a]">
                            Gunakan username <span className="font-semibold">admin</span> dan password <span className="font-semibold">admin123</span>.
                        </p>
                    </div>

                    {errors?.username ? (
                        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {errors.username}
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-[#7c6f6a]">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={data.username}
                                onChange={event => setData("username", event.target.value)}
                                className="mt-2 w-full rounded-xl border border-[#ead8d0] px-4 py-3 text-sm focus:border-[#991612] focus:outline-none focus:ring-2 focus:ring-[#991612]/20"
                                placeholder="admin"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-xs font-semibold text-[#7c6f6a]">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={event => setData("password", event.target.value)}
                                className="mt-2 w-full rounded-xl border border-[#ead8d0] px-4 py-3 text-sm focus:border-[#991612] focus:outline-none focus:ring-2 focus:ring-[#991612]/20"
                                placeholder="admin123"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-2 w-full rounded-full bg-[#991612] px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            Masuk
                        </button>
                    </form>

                    <div className="mt-6 text-center text-xs text-[#7c6f6a]">
                        Belum ada akun admin? <Link href="/admin/signup" className="font-semibold text-[#991612]">Daftar di sini</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
