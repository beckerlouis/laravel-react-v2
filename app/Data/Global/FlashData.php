<?php

namespace App\Data\Global;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class FlashData extends Data
{
    public function __construct(
        public ?string $success,
        public ?string $error,
    ) {
    }
}
