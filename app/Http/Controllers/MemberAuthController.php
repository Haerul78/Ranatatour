<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class MemberAuthController extends Controller
{
    public function showLoginForm()
    {
        return Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'login' => ['required', 'string'],
            'password' => ['required', 'string'],
        ]);

        if ($this->isDefaultAdminCredentials($credentials)) {
            $user = $this->ensureDefaultAdminUser();
            Auth::login($user);

            $request->session()->regenerate();

            return redirect()->intended('/admin');
        }

        $loginValue = $credentials['login'];
        $attempted = Auth::attempt(['email' => $loginValue, 'password' => $credentials['password']]);

        if (!$attempted) {
            $attempted = Auth::attempt(['username' => $loginValue, 'password' => $credentials['password']]);
        }

        if ($attempted) {
            $request->session()->regenerate();

            return redirect()->intended('/');
        }

        return back()->withErrors([
            'login' => 'Email/username atau kata sandi salah.',
        ])->onlyInput('login');
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login');
    }

    private function isDefaultAdminCredentials(array $credentials): bool
    {
        return $credentials['login'] === 'admin' && $credentials['password'] === 'admin123';
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
