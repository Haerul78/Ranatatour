import { Link, useForm, usePage } from "@inertiajs/react";

export default function Login() {
    const { errors } = usePage().props;
    const { data, setData, post, processing } = useForm({
        login: "",
        password: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        post("/login");
    };

    return (
        <div className="min-h-screen bg-[#f6eee9] text-[#4b2e2b]">
            <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
                <div className="w-full max-w-md rounded-3xl border border-[#eddad2] bg-white p-8 shadow-[0_20px_60px_rgba(70,40,35,0.15)]">
                    <div className="mb-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8f8a]">Member</p>
                        <h1 className="mt-2 text-3xl font-semibold">Masuk</h1>
                        <p className="mt-2 text-sm text-[#7c6f6a]">
                            Gunakan email atau username untuk masuk.
                        </p>
                    </div>

                    {errors?.login ? (
                        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {errors.login}
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="text-xs font-semibold text-[#7c6f6a]">Email / Username</label>
                            <input
                                type="text"
                                name="login"
                                value={data.login}
                                onChange={event => setData("login", event.target.value)}
                                className="mt-2 w-full rounded-xl border border-[#ead8d0] px-4 py-3 text-sm focus:border-[#991612] focus:outline-none focus:ring-2 focus:ring-[#991612]/20"
                                placeholder="email atau username"
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
                        Kembali ke <Link href="/" className="font-semibold text-[#991612]">Beranda</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
