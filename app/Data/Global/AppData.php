<?php

namespace App\Data\Global;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class AppData extends Data
{
    public function __construct(
        public AuthData $auth,
        public ?string $search,
        public FlashData $flash,
        public array $ziggy,
        public string $appName,
    ) {
    }

    public static function fromModel($array): self
    {
        return new self(
            auth: AuthData::from($array['auth']),
            search: $array['search'] ?? null,
            flash: FlashData::from($array['flash']),
            ziggy: $array['ziggy'],
            appName: $array['appName'],
        );
    }
}
