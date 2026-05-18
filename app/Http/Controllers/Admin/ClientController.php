<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Clients/Index', [
            'clients' => Client::orderByDesc('created_at')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Clients/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'logo_url' => ['nullable', 'string', 'max:255'],
            'testimonial' => ['nullable', 'string', 'max:255'],
            'is_featured' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');

        Client::create($validated);

        return redirect('/admin/clients')->with('success', 'Klien berhasil ditambahkan.');
    }

    public function edit(Client $client)
    {
        return Inertia::render('Admin/Clients/Edit', ['client' => $client]);
    }

    public function update(Request $request, Client $client)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:150'],
            'logo_url' => ['nullable', 'string', 'max:255'],
            'testimonial' => ['nullable', 'string', 'max:255'],
            'is_featured' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');

        $client->update($validated);

        return redirect('/admin/clients')->with('success', 'Klien berhasil diperbarui.');
    }

    public function destroy(Client $client)
    {
        $client->delete();

        return redirect('/admin/clients')->with('success', 'Klien berhasil dihapus.');
    }
}
