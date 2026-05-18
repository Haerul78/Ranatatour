<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Admin/Login');
    }

    public function showSignupForm()
    {
        return Inertia::render('Admin/Signup');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if ($this->isDefaultAdminCredentials($credentials)) {
            $user = $this->ensureDefaultAdminUser();
            Auth::login($user);

            $request->session()->regenerate();

            return redirect()->intended('/admin');
        }

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            if (Auth::user()?->role !== 'admin') {
                Auth::logout();

                return back()->withErrors([
                    'username' => 'Akun tidak memiliki akses admin.',
                ])->onlyInput('username');
            }

            return redirect()->intended('/admin');
        }

        return back()->withErrors([
            'username' => 'Username atau kata sandi salah.',
        ])->onlyInput('username');
    }

    public function signup(Request $request)
    {
        $credentials = $request->validate([
            'username' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if (! $this->isDefaultAdminCredentials($credentials)) {
            return back()->withErrors([
                'username' => 'Gunakan username admin dan password admin123.',
            ])->onlyInput('username');
        }

        $user = $this->ensureDefaultAdminUser();
        Auth::login($user);

        $request->session()->regenerate();

        return redirect()->intended('/admin');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::location('/login');
    }

    private function isDefaultAdminCredentials(array $credentials): bool
    {
        return $credentials['username'] === 'admin' && $credentials['password'] === 'admin123';
    }

    private function ensureDefaultAdminUser(): User
    {
        $user = User::firstOrNew(['username' => 'admin']);
        $user->name = $user->name ?: 'Administrator';
        $user->email = $user->email ?: 'admin@ranata.local';
        $user->role = 'admin';
        $user->password = Hash::make('admin123');
        $user->save();

        return $user;
    }
}
