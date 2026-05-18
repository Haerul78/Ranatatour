<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Articles/Index', [
            'articles' => Article::orderByDesc('created_at')->get(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Articles/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:200'],
            'excerpt' => ['nullable', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
            'image_url' => ['nullable', 'string', 'max:255'],
            'published_at' => ['nullable', 'date'],
            'label' => ['nullable', 'string', 'max:100'],
            'is_featured' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');

        Article::create($validated);

        return redirect('/admin/articles')->with('success', 'Artikel berhasil ditambahkan.');
    }

    public function edit(Article $article)
    {
        return Inertia::render('Admin/Articles/Edit', ['article' => $article]);
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:200'],
            'excerpt' => ['nullable', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
            'image_url' => ['nullable', 'string', 'max:255'],
            'published_at' => ['nullable', 'date'],
            'label' => ['nullable', 'string', 'max:100'],
            'is_featured' => ['nullable', 'boolean'],
            'sort_order' => ['nullable', 'integer', 'min:0'],
        ]);

        $validated['is_featured'] = $request->boolean('is_featured');

        $article->update($validated);

        return redirect('/admin/articles')->with('success', 'Artikel berhasil diperbarui.');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect('/admin/articles')->with('success', 'Artikel berhasil dihapus.');
    }
}
