<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function edit()
    {
        $settings = SiteSetting::query()->first();

        if (!$settings) {
            $settings = SiteSetting::create([]);
        }

        return view('admin.settings.edit', ['settings' => $settings]);
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'about_title' => ['nullable', 'string', 'max:200'],
            'about_summary' => ['nullable', 'string', 'max:255'],
            'about_body' => ['nullable', 'string'],
            'contact_address' => ['nullable', 'string', 'max:255'],
            'contact_phone' => ['nullable', 'string', 'max:100'],
            'contact_email' => ['nullable', 'string', 'max:120'],
            'contact_hours' => ['nullable', 'string', 'max:120'],
            'contact_map_url' => ['nullable', 'string', 'max:255'],
        ]);

        $settings = SiteSetting::query()->first();

        if (!$settings) {
            $settings = SiteSetting::create($validated);
        } else {
            $settings->update($validated);
        }

        return redirect('/admin/settings')->with('success', 'Konten About & Contact diperbarui.');
    }
}
