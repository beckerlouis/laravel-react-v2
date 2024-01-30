<?php

namespace App\Data\Global;

use App\Data\Auth\UserData;
use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AuthData extends Data
{
    public function __construct(
        public ?UserData $user,
    ) {
    }
}
