<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Admin Sign Up</title>
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="min-h-screen bg-[#f6eee9] text-[#4b2e2b]">
        <div class="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-12">
            <div class="w-full max-w-md rounded-3xl border border-[#eddad2] bg-white p-8 shadow-[0_20px_60px_rgba(70,40,35,0.15)]">
                <div class="mb-6">
                    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8f8a]">Admin</p>
                    <h1 class="mt-2 text-3xl font-semibold">Buat Akun Admin</h1>
                    <p class="mt-2 text-sm text-[#7c6f6a]">Akun admin sementara: username <span class="font-semibold">admin</span> dan password <span class="font-semibold">admin123</span>.</p>
                </div>

                @if ($errors->any())
                    <div class="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {{ $errors->first() }}
                    </div>
                @endif

                <form method="POST" action="/admin/signup" class="space-y-4">
                    @csrf
                    <div>
                        <label class="text-xs font-semibold text-[#7c6f6a]">Username</label>
                        <input
                            type="text"
                            name="username"
                            value="{{ old('username', 'admin') }}"
                            class="mt-2 w-full rounded-xl border border-[#ead8d0] px-4 py-3 text-sm focus:border-[#991612] focus:outline-none focus:ring-2 focus:ring-[#991612]/20"
                            required
                        >
                    </div>
                    <div>
                        <label class="text-xs font-semibold text-[#7c6f6a]">Password</label>
                        <input
                            type="password"
                            name="password"
                            value="admin123"
                            class="mt-2 w-full rounded-xl border border-[#ead8d0] px-4 py-3 text-sm focus:border-[#991612] focus:outline-none focus:ring-2 focus:ring-[#991612]/20"
                            required
                        >
                    </div>
                    <button
                        type="submit"
                        class="mt-2 w-full rounded-full bg-[#991612] px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        Buat Akun Admin
                    </button>
                </form>

                <div class="mt-6 text-center text-xs text-[#7c6f6a]">
                    Sudah punya akun? <a href="/admin/login" class="font-semibold text-[#991612]">Masuk di sini</a>
                </div>
            </div>
        </div>
    </body>
</html>
