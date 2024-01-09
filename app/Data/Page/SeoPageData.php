<?php

namespace App\Data\Page;

use Spatie\LaravelData\Data;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript]
class SeoPageData extends Data
{
    public function __construct(
        public string $title = '',
        public string $description = '',
        public array $keywords = [],
    ) {
    }
}
