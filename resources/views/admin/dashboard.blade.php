<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Admin Dashboard</title>
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    </head>
    <body class="min-h-screen bg-[#f6eee9] text-[#4b2e2b]">
        <div class="mx-auto min-h-screen max-w-6xl px-6 py-10">
            <header class="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[#eddad2] bg-white px-6 py-6 shadow-[0_14px_32px_rgba(70,40,35,0.12)]">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.3em] text-[#9b8f8a]">Admin Dashboard</p>
                    <h1 class="mt-2 text-2xl font-semibold">Halo, Administrator</h1>
                    <p class="mt-1 text-sm text-[#7c6f6a]">Ringkasan data terbaru Ranata Tour.</p>
                </div>
                <form method="POST" action="/admin/logout">
                    @csrf
                    <button
                        type="submit"
                        class="rounded-full border border-[#eddad2] px-5 py-2 text-sm font-semibold text-[#7c6f6a] transition hover:border-[#991612] hover:text-[#991612]"
                    >
                        Logout
                    </button>
                </form>
            </header>

            <section class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-2xl border border-[#eddad2] bg-white p-5 shadow-[0_12px_24px_rgba(70,40,35,0.08)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b8f8a]">Tours</p>
                    <p class="mt-2 text-3xl font-semibold">{{ $stats['tours'] ?? 0 }}</p>
                </div>
                <div class="rounded-2xl border border-[#eddad2] bg-white p-5 shadow-[0_12px_24px_rgba(70,40,35,0.08)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b8f8a]">Events</p>
                    <p class="mt-2 text-3xl font-semibold">{{ $stats['events'] ?? 0 }}</p>
                </div>
                <div class="rounded-2xl border border-[#eddad2] bg-white p-5 shadow-[0_12px_24px_rgba(70,40,35,0.08)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b8f8a]">Articles</p>
                    <p class="mt-2 text-3xl font-semibold">{{ $stats['articles'] ?? 0 }}</p>
                </div>
                <div class="rounded-2xl border border-[#eddad2] bg-white p-5 shadow-[0_12px_24px_rgba(70,40,35,0.08)]">
                    <p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#9b8f8a]">Clients</p>
                    <p class="mt-2 text-3xl font-semibold">{{ $stats['clients'] ?? 0 }}</p>
                </div>
            </section>

            <section class="mt-10 grid gap-6 lg:grid-cols-2">
                <div class="rounded-3xl border border-[#eddad2] bg-white p-6 shadow-[0_14px_32px_rgba(70,40,35,0.12)]">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold">Tour Terbaru</h2>
                        <a href="/admin/tours" class="text-sm font-semibold text-[#991612]">Kelola</a>
                    </div>
                    <ul class="mt-4 space-y-3 text-sm text-[#7c6f6a]">
                        @forelse ($latestTours as $tour)
                            <li class="flex items-center justify-between rounded-xl border border-[#f1e3dd] px-4 py-3">
                                <span class="font-semibold text-[#4b2e2b]">{{ $tour->title }}</span>
                                <span class="text-xs">{{ $tour->created_at?->format('d M Y') }}</span>
                            </li>
                        @empty
                            <li class="rounded-xl border border-dashed border-[#f1e3dd] px-4 py-6 text-center text-xs text-[#9b8f8a]">
                                Belum ada tour.
                            </li>
                        @endforelse
                    </ul>
                </div>
                <div class="rounded-3xl border border-[#eddad2] bg-white p-6 shadow-[0_14px_32px_rgba(70,40,35,0.12)]">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold">Event Terbaru</h2>
                        <a href="/admin/events" class="text-sm font-semibold text-[#991612]">Kelola</a>
                    </div>
                    <ul class="mt-4 space-y-3 text-sm text-[#7c6f6a]">
                        @forelse ($latestEvents as $event)
                            <li class="flex items-center justify-between rounded-xl border border-[#f1e3dd] px-4 py-3">
                                <span class="font-semibold text-[#4b2e2b]">{{ $event->title }}</span>
                                <span class="text-xs">{{ $event->created_at?->format('d M Y') }}</span>
                            </li>
                        @empty
                            <li class="rounded-xl border border-dashed border-[#f1e3dd] px-4 py-6 text-center text-xs text-[#9b8f8a]">
                                Belum ada event.
                            </li>
                        @endforelse
                    </ul>
                </div>
            </section>
        </div>
    </body>
</html>
