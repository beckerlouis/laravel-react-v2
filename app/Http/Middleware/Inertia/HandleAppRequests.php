<?php

namespace App\Http\Middleware\Inertia;

use App\Data\Auth\UserData;
use App\Data\Global\AppData;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleAppRequests extends Middleware
{
    protected $rootView = 'app';

    public function share(Request $request): array
    {
        $data = AppData::from([
            'auth' => [
                'user' => $request->user() ? UserData::from($request->user()) : null,
            ],
            'search' => $request->search ?? null,
            'flash' => [
                'success' => $request->session()->get('success'),
                'error' => $request->session()->get('error'),
            ],
            'ziggy' => array_merge((new Ziggy)->toArray(), [
                'location' => $request->url(),
            ]),
            'appName' => config('app.name'),
        ]);

        return array_merge(parent::share($request), $data->toArray());
    }
}
